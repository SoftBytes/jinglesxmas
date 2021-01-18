import React from 'react'
import Feed from 'react-instagram-authless-feed'
import { ErrorBoundary } from 'react-error-boundary'
import TreesForm from './treesForm'
import CollectionForm from './collectionForm'
import * as styles from './styles'

/***
 * 
 * The index page has three options:

    1) Sales are open
    2) Sales are closed, collection is open
    3) Everything closed for the year.

    To change between states you need to update flags in the App.js state

    isSoldOut: true,  // change this to false to see the tree order form
    isClosedForYear: true, // change this to false to see other states
 * 
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: undefined,
      isSoldOut: true,  // change this to false to see the tree order form
      isClosedForYear: true, // change this to false to see other states
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ done: true })
    }, 20);
  }

  scrollToForm() {
    const anchor = document.getElementsByName('trees')[0]
    if(anchor){
      anchor.scrollIntoView({ behavior: "smooth" })
    }
  }

  render() {
    const { isSoldOut, isClosedForYear } = this.state

    const instagramFeed = (
      <ErrorBoundary FallbackComponent={() => <></>}>
        <Feed userName="jinglesxmastrees" className="Feed" classNameLoading="Loading" limit="4"/>
      </ErrorBoundary>
    )

    const orderTreeIndex = (
    <>
    <div className={styles.pageWpap}>
      <div className={styles.specialOffer} onClick={this.scrollToForm}>
        Standard Tree with Cinco stand for $154
        <br/>
        <span>including delivery in Melbourne Area during the week.</span>
      </div>
      <div className={styles.subTextRed} onClick={this.scrollToForm}>
         HAVE YOU FOUND A CHEAPER CHRISTMAS TREE ELSEWHERE? 
         PLEASE CONTACT US ON <a href="tel:0411399607">0411399607</a> AND WE WILL BEAT IT BY 5%!
      </div>
      <div className={styles.h1} onClick={this.scrollToForm}>
      </div>
      <div className={styles.subTextGreen}>
       <span className='desktopOnly'>
         Are you looking for a real Christmas tree to make your Christmas spectacular? 
       </span>
        Our trees are sustainably grown on a farm in Daylesford (VIC).
        With delivery, setup and disposal, you get it all covered.
      </div>
      <TreesForm></TreesForm>
      <div className={styles.car}></div>
    </div>
    {instagramFeed}
 </>
 )


  const disposeTreeIndex = (
    <>
    <div className={styles.pageWpap}>
      <div className={styles.h1SoldOut}/>
      <div className={styles.soldOutMessage}>WE ARE CURRENTLY SOLD OUT!</div>
      <div className={styles.subTextGreen}>
          We wish you Happy Holidays and hope to see you next year.
        </div>
      <CollectionForm></CollectionForm>
      <div className={styles.car}></div>
    </div>
    {instagramFeed}
  </>
  )

  const closedIndex = (
    <>
      <div className={styles.pageWpap}>
        <div className={styles.h1SoldOut}/>
        <div className={styles.soldOutMessage}>
          Huge thanks to all who chose Jingles Xmas Trees.
          We hope you had a wonderful Christmas and a happy NYE.  <br/>
          We will see you at the end of the year.
        </div>
      </div>
      {instagramFeed}
    </>
  )


    return (
      <>
        {this.state.done ? 
          (isSoldOut ? ( isClosedForYear ? closedIndex : disposeTreeIndex ) : orderTreeIndex)
          : 
          (<h1 className="loading">Jingles Xmas Trees</h1>)
        }
      </>
    );
  }
}

export default App
