
import React from 'react'
import PropTypes from 'prop-types'
import * as styles from './styles'

export const DISCOUNT_CODE = 'JINGLES2020'

export default class CouponInput extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      isDiscount: false, 
    }
    this.handleChange = this.handleChange.bind(this)
  }

    handleChange = (event) => {
      const coupon = event.target.value
      const { onCouponChange } = this.props

      const isDiscount = coupon === DISCOUNT_CODE
      onCouponChange(isDiscount)

      this.setState({ 
        value: coupon,
        isDiscount,
      })
    }
  
    render() {
      const { value, isDiscount } = this.state
  
      return (
        <>
          <label className={styles.label}>Coupon</label>
          <input 
            className={styles.postcode}
            type="text" 
            placeholder="coupon"
            name="coupon" value={value} 
            onChange={this.handleChange.bind(this)}
          />
          {isDiscount && (
            <p className={styles.error}>
              Discount of $20 has been applied
            </p>
          )}

          </>
      );
    }
  }
  
  CouponInput.propTypes = {
    onCouponChange: PropTypes.func.isRequired,
  }