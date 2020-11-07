
import React from 'react'
import PropTypes from 'prop-types'
import { discounts } from '../trees'
import * as styles from './styles'


export default class CouponInput extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      discount: {},
    }
    this.handleChange = this.handleChange.bind(this)
  }

    handleChange = (event) => {
      const coupon = event.target.value
      const { onCouponChange } = this.props

      const discount = discounts.find(d => d.code === coupon)
      onCouponChange(discount)

      this.setState({ 
        value: coupon,
        discount,
      })
    }
  
    render() {
      const { value, discount } = this.state
  
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
          {!!(discount && discount.value) && (
            <p className={styles.error}>
              {`Discount of $${discount.value} has been applied.`}
            </p>
          )}
        </>
      )
    }
  }
  
  CouponInput.propTypes = {
    onCouponChange: PropTypes.func.isRequired,
  }