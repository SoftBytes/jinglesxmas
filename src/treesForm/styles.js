import { css } from 'emotion'
import { RED, PALE_GREEN, CTA } from '../colorConsts'

export const tilesWpap = css`
  padding: 8px 0;
  display: flex;
  justify-content: center;
  margin: 0 auto;

  @media (min-width: 768px) {

  }
`

export const checkboxesWpap = css`
  margin: 0 auto 1em;
  text-align: left;
  width: 11em;

  @media (min-width: 420px) {
    width: 9em;
  }
`

export const checkboxLabel = css`
  color: ${RED};
  overflow: visible;
  white-space: nowrap;
  font-size: 1.2em;
  line-height: 1.8em;

  span {
    color: #666;
  }

`

export const hr = css`
  border: 0;
  height: 0;
  border-top: 1px solid ${CTA};
  border-bottom: 1px solid ${CTA};
`


export const h2 = css`
  color: ${CTA};
  text-transform: none;
  line-height: 2em;
  margin: 0;
  font-weight: 500;

`

export const boxWpap = css`
  padding: 1em;
  text-align: center;
  border: 1px solid green;
  background-color: ${PALE_GREEN};
  margin: 1em auto 0;

  @media (min-width: 768px) {
    width: 500px;
  }
  
`

export const cta = css`
  width: 100%;
  margin: 0.4em auto 0;
  background-color: ${CTA};
  font-size: 1em;

  :active, :hover, :visited, :focus{
    background-color: ${CTA};
  }

  @media (min-width: 768px) {
    width: 12em;
    margin: 1em auto 0;
  }
`
