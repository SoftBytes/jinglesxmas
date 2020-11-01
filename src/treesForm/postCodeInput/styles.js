import { css } from 'emotion'
import { CTA } from '../../colorConsts'

export const postcode = css`
  border: 1px solid ${CTA};
  
  line-height: 1.3em;
  padding: .6em 1.4em .5em .8em;
  width: 8em;
  max-width: 80%;
  box-sizing: border-box;
  margin: 1em auto 0;
  border-radius: 6px;

`

export const label = css`
  color: ${CTA};
  box-sizing: border-box;
  margin: 1em;
  width: 6em;
  font-size: 1.2em;
  line-height: 2em;

`

export const error = css`
  font-size: 0.9em;
  line-height: 1.6em;
  margin-top: .5em;

  a {
    font-size: 0.9em;
    line-height: 1.6em;
  }
`


