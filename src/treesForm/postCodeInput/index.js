
import React from 'react'
import PropTypes from 'prop-types'
import * as styles from './styles'

export default class PostCodeInput extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      valid: true,
    }
  }

    handleChange = (event) => {
      const number = Number(event.target.value)
      const { onPostCodeChange } = this.props
      if (isNaN(number)) {
        return
      } 

      const valid = (number/1000 | 0) === 3
      onPostCodeChange(number, valid)
      this.setState({ 
        value: number,
        valid,
      })
    }
  
    render() {
      const { valid, value } = this.state
  
      return (
        <>
          <label className={styles.label}>Postcode</label>
          <input 
            className={styles.postcode}
            type="text" pattern="[0-9]{4}"
            maxLength={4} minLength={4}
            placeholder="3000"
            name="title" value={value} 
            onChange={this.handleChange.bind(this)}
            />
          {!valid && <p>Please enter a valid Victorian postcode.</p>}
        </>
      );
    }
  }
  
  PostCodeInput.propTypes = {
    onPostCodeChange: PropTypes.func.isRequired,
  }