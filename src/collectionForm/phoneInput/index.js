
import React from 'react'
import PropTypes from 'prop-types'
import * as styles from './styles'


export default class PhoneInput extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      error: false,
    }
    this.handleChange = this.handleChange.bind(this)
  }

    handleChange = (event) => {
      const phone = event.target.value
      const { onCouponChange } = this.props

      if (isNaN(Number(phone))) {
        return
      } 
      
      onCouponChange(phone)

      this.setState({ 
        value: phone,
      })
    }
  
    render() {
      const { value, error } = this.state
  
      return (
        <>
          <label className={styles.label}>Phone</label>
          <input 
            className={styles.postcode}
            type="text" 
            placeholder="0412345678"
            name="phone" value={value} 
            onChange={this.handleChange.bind(this)}
          />
          <p className={styles.error}>
            Please provide the phone number you've used to order your tree and collection.
          </p>
          {!!error && (
            <p className={styles.error}>
              {`Please enter a valid phone number`}
            </p>
          )}
        </>
      )
    }
  }
  
  PhoneInput.propTypes = {
    onCouponChange: PropTypes.func.isRequired,
  }