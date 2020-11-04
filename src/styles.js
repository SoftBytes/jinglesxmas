import { css } from 'emotion'
import { RED, DARK_GREEN, YELLOW } from './colorConsts'

export const pageWpap = css`
  &&& {
    @media (min-width: 768px) {
      font-size: 20px;
      line-height: 26px;
    }
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
  width: 90%;
  margin: 2vw auto 0;
  padding: 0.4em 0.4em 0.4em 4em;
  font-size: 0.8em;
  line-height: 1.2em;
  border: 1px solid #fff;
  position: relative;

  span {
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
    font-size: 1.6vw;
    line-height: 2vw;
    padding: 0.5em 0.5em 0.5em 3.6em;

    span {
      font-size: 0.75em;
    }
  }
`

export const subTextRed = css`
  color: ${RED};
  width: 100%;
  margin: 11em auto 1em;
  font-size: 0.9em;

  @media (min-width: 360px) {
    margin: 10em auto 1em;
  }

  @media (min-width: 400px) {
    margin: 12em auto 1em;
  }

  @media (min-width: 480px) {
    margin: 0 auto 9em;
    font-size: 1.1em;
    width: 28em;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: 50vw;
    font-size: 1.7vw;
    line-height: 2.2vw;
    margin: 0 auto 22vw;
  }
`

export const subTextGreen = css`
  color: ${DARK_GREEN};
  width: 100%;
  margin: 1em auto 0;
  font-size: 0.9em;

  @media (min-width: 500px) {
    width: 32em;
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
