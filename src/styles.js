import { css } from 'emotion'
import { RED, DARK_GREEN, YELLOW } from './colorConsts'

export const pageWpap = css`
  &&& {
    @media (min-width: 768px) {
      font-size: 22px;
      line-height: 28px;
    }
  }
  * {
    font-family: 'Abhaya Libre', serif;
  }
  padding: 20px;
  text-align: center;
  width: 100%;
  background-image: url("./images/mobile_bg.png"); 
  background-repeat: no-repeat;
  background-size: 100%;

  @media (min-width: 600px) {
   background-image: url("./images/bg.png"); 
  }
`

export const specialOffer = css`
  color: ${YELLOW};
  background-color: ${RED};
  font-weight: 600;

  // font-family: 'IM Fell DW Pica SC', serif;
  width: 100%;
  margin: 2vw auto 0;
  padding: 0.4em 0.4em 0.4em 3em;
  font-size: 1em;
  line-height: 1.3em;
  border: 1px solid #fff;
  position: relative;

  span {
    font-weight: 600;
    // font-family: 'IM Fell DW Pica SC', serif;
    font-size: 1em;
    line-height: 1.2em;
    color: ${YELLOW};
  }

  ::after {
    content: "";
    position: absolute;
    background-image: url("./images/mult_mobile.png"); 
    // background-image: url("./images/bells.png"); 
    background-repeat: no-repeat;
    background-size: contain; 
    top:-20px;
    left: -64px;
    height: 140px;
    width: 116px;

    @media (min-width: 768px) {
      background-image: url("./images/mult.png"); 
      // background-image: url("./images/bells_desktop.png"); 
      top:-3vw;
      left: -12vw;
      height: 23vw; 
      width: 19vw; 
    }
  }

  @media (min-width: 500px) {
    width: 28em;
    padding: 0.5em 0.5em 0.5em 3em;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: 25em;
    font-size: 1.8vw;
    line-height: 2.3vw;
    padding: 0.3em 0.3em 0.3em 3.6em;

    span {
      font-size: 0.85em;
    }
  }
`

export const subTextRed = css`
  color: ${RED};
  // font-family: 'Cookie', cursive;
  // font-family: 'IM Fell DW Pica SC', serif;
  font-style: italic;
  font-weight: 500;
  width: 100%;
  margin: 6em auto 1em;
  font-size: 1.4em;

  @media (min-width: 360px) {
    margin: 6em auto 1em;
  }

  @media (min-width: 400px) {
    margin: 7em auto 1em;
  }

  @media (min-width: 480px) {
    margin: 0 auto 9em;
    font-size: 1.4em;
    width: 20em;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: 50vw;
    font-size: 1.9vw;
    line-height: 2.2vw;
    margin: 0 auto 20vw;
  }
`

export const subTextGreen = css`
  color: ${DARK_GREEN};
  font-family: 'Cookie', cursive;
  width: 100%;
  margin: 1em auto 0;
  font-size: 1.4em;

  @media (min-width: 500px) {
    width: 20em;
  }
`

export const h1 = css`
  margin: 3vw auto 1vw;

  background-image: url("./images/jingles-logo.png"); 
  background-repeat: no-repeat;
  height: 95px;
  width: 244px;
  cursor: pointer;

  @media (min-width: 768px) {
    background-image: url("./images/jingles-logo_big.png"); 
    background-repeat: no-repeat;
    background-size: contain;
    height: 12vw;
    width: 30vw;
    max-height: 190px;
    max-width: 486px;
  }
`

export const car = css`
  background-image: url("./images/truck_new.png"); 
  background-repeat: no-repeat;
  height: 179px;
  width: 300px;
  margin: 0 auto;
`
