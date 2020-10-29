import React from 'react'
import TreeTile from './treeTile'
import Checkbox from './checkbox'
import DatesField from './datesField'
import PostCodeInput from './postCodeInput'
import * as styles from './styles'
import { TREES, LARGE_TREE_NAME } from './trees'
import { ADDITIONAL_ITEMS, STAND_KEY } from './additionalItems'
import { POSTCODES, WEEKEND_SURCHARGE } from './zones'

class TreesForm extends React.Component {

  constructor(props) {
    super(props)

    const defaultTree = TREES[0] || {}
    const defaultAdditionalSelection = ADDITIONAL_ITEMS[0] || {}

    this.state = {
      trees: TREES,
      selectedTree: defaultTree,
      checkedItemsSet: new Set([defaultAdditionalSelection]),
      disabledItemsSet: new Set(),
      total: defaultTree.price + defaultAdditionalSelection.price,
      areaSurcharge: 0,
      postCode: null,
      deliveryDate: null,
      isFormValid: true,
      formErrorMessage: null,
    }

    this.selectTree = this.selectTree.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeliveryDateChange = this.onDeliveryDateChange.bind(this)
    this.onPostCodeChange = this.onPostCodeChange.bind(this)
  }

  selectTree(tree) {
    this.setState(state => {
      const trees = state.trees.map(item => {
        return {...item, selected: item.name === tree.name}
      })
      return {
        ...state, 
        trees: trees, 
        selectedTree : tree,
        total: this.getTotal({tree:tree}) 
      }
    })
  }

  getTotal({
    tree = this.state.selectedTree,
    checkedItems = [...this.state.checkedItemsSet],
    deliveryDate = this.state.deliveryDate,
    areaSurcharge = this.state.areaSurcharge,
  }) {
    const additinalItemsPrice = checkedItems.reduce((sum, item) => { 
        if (item.key === STAND_KEY && tree.name === LARGE_TREE_NAME) {
          return sum + item.large.price 
        }
        return sum + item.price 
      }, 0
    )

    let dateSurcharge = 0 
    if (deliveryDate && deliveryDate.day() % 6 === 0) {
      dateSurcharge = WEEKEND_SURCHARGE 
    } 

    return tree.price + additinalItemsPrice + dateSurcharge + areaSurcharge
  }

  onDeliveryDateChange(deliveryDate) { 
    this.setState((state) => ({ 
      ...state,
      deliveryDate,
      total: this.getTotal({ deliveryDate }),
    }))
  }

  onPostCodeChange(postCode) { 
    const postCodeEnum = POSTCODES.find(c => c.code === postCode)
    const availableDates = postCodeEnum ? postCodeEnum.zone.availableDates : []
    const areaSurcharge = postCodeEnum ? postCodeEnum.zone.price : 0

    const { deliveryDate } = this.state
    let newDeliveryDate = deliveryDate
    // if deliveryDate is selected, but not in avaiable dates, set to null
    if (deliveryDate && !availableDates.find(d => d === deliveryDate.date())){
      newDeliveryDate = null
    }

    this.setState((state) => ({ 
      ...state,
      postCode,
      areaSurcharge,
      availableDates,
      deliveryDate: newDeliveryDate,
      total: this.getTotal({ areaSurcharge }),
    }))
  }

  handleChange(e) {
    const { checkedItemsSet, disabledItemsSet } = this.state
    const { name : itemName , checked : isChecked} = e.target

    const item = ADDITIONAL_ITEMS.find(i => i.name === itemName)

    if (!isChecked) {
      checkedItemsSet.delete(item)
    } else {
      checkedItemsSet.add(item)
    }
    this.updateInstallation(isChecked, itemName, checkedItemsSet, disabledItemsSet)

    this.setState((state) => ({ 
      ...state,
      checkedItemsSet,
      total: this.getTotal({checkedItems:  [...checkedItemsSet]}),
    }));
  }

  updateInstallation(isChecked, itemName, checkedItemsSet, disabledItemsSet) {
    if (!itemName.includes(STAND_KEY)) { 
      return
    }
    const installation = ADDITIONAL_ITEMS.find(i => i.name === 'installation')
    if (isChecked) {
      disabledItemsSet.delete(installation)
    } else {
      checkedItemsSet.delete(installation)
      disabledItemsSet.add(installation)
    }
  }

  getLabelText(item) {
    return <>{item.label} <span>{`+$${item.price}`}</span></>
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("submit");

    const { 
      checkedItemsSet, 
      selectedTree,
      deliveryDate,
      postCode,
    } = this.state

    if (!postCode || !deliveryDate) {
      this.setState((state) => ({ 
        ...state,
        isFormValid: false,
        formErrorMessage: "Please enter a valid PostCode and select a delivery date"
      }))
      return
    }

    fetch('/checkout', {
        method: 'POST',
        body: JSON.stringify({tree: this.state.selectedTree.name})
      }).then(function(response) {
        console.log(response)
        return response.json();
      });
  }

  render() {
    const { 
      trees, 
      total, 
      checkedItemsSet, 
      disabledItemsSet, 
      selectedTree,
      availableDates,
      deliveryDate,
      isFormValid,
      formErrorMessage,
    } = this.state

    const treesList = trees.map(tree => (
      <TreeTile tree={tree} key={tree.name} selectTree={this.selectTree}/>
    ))

    const checkboxes = ADDITIONAL_ITEMS.map(item => {
      let labelText = ''
      if (item.key === STAND_KEY && selectedTree.name === LARGE_TREE_NAME) {
        labelText = this.getLabelText(item.large)
      } else {
        labelText = this.getLabelText(item)
      }
      return (
        <div key={item.key}>
          <label className={styles.checkboxLabel}>
            <Checkbox 
              name={item.name} 
              checked={checkedItemsSet.has(item)} 
              disabled={disabledItemsSet.has(item)} 
              onChange={this.handleChange} 
            />
            {labelText}
          </label>
        </div>
    )})
    

    return (
      <form 
        className={styles.boxWpap} 
        method="post"     
        onSubmit={this.onSubmit}
      >
        <h2 className={styles.h2}>Order now</h2>
        <hr className={styles.hr}/>
        <div className={styles.tilesWpap}>
          {treesList}
        </div>
        <div className={styles.checkboxesWpap}>
          {checkboxes}
        </div>
        <hr className={styles.hr}/>
        <div className={styles.subTextGreen}>
          Delivery starts in December. Additional weekend and area surcharge applies.
        </div>
        <PostCodeInput onPostCodeChange={this.onPostCodeChange}/>
        <DatesField 
          onDeliveryDateChange={this.onDeliveryDateChange}
          availableDays={availableDates}
          selectedDate={deliveryDate}
        />
        <hr className={styles.hr}/>
        <button className={styles.cta} disabled={!isFormValid}>
            {`Buy for $${total}`}
        </button>
        <p>{formErrorMessage}</p>
      </form>
    )
  }
}



export default TreesForm

TreesForm.propTypes = {

}
