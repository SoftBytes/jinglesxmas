import { css } from 'emotion'
import { CTA, DARK_GREEN } from '../../colorConsts'

export const postcode = css`
  border: 1px solid ${CTA};
  
  font-size: 1.2em;
  line-height: 1.2em;
  padding: .4em 1.2em .3em .6em;
  width: 7em;
  max-width: 80%;
  box-sizing: border-box;
  margin: 1em auto .4em;
  border-radius: 6px;

`

export const label = css`
  color: ${CTA};
  font-family: 'IM Fell DW Pica SC', serif !important;
  box-sizing: border-box;
  margin: 1em;
  width: 6em;
  font-size: 1.4em;
  line-height: 2em;

`

export const error = css`
  color: ${DARK_GREEN};
  font-size: 1.2em;
  line-height: 1.6em;
  margin: 1em 0;

  @media (min-width: 768px) {
    font-size: 1.3em;
    margin: .5em 0;
  }

  a {
    font-size: 1.2em;
    line-height: 1.6em;
    font-weight: 600;

    @media (min-width: 768px) {
      font-weight: 500;
    }
  }
`


