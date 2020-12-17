import React from 'react'
import DatesField from './datesField'
import PostCodeInput from './postCodeInput'
import PhoneInput from './phoneInput'
import { fetchPostCodesFromJson } from './zones'

import * as styles from './styles'

class CollectionForm extends React.Component {

  constructor(props) {
    super(props)

    const postcodes = fetchPostCodesFromJson()

    this.state = {
      postcodes,
      postCode: null,
      deliveryDate: null,
      isFormValid: true,
      discount: {},
      formErrorMessage: "Please enter valid PostCode and Phone and select a delivery date",
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onDeliveryDateChange = this.onDeliveryDateChange.bind(this)
    this.onPostCodeChange = this.onPostCodeChange.bind(this)
    this.onCouponChange = this.onCouponChange.bind(this)
    this.isFormValid = this.isFormValid.bind(this)
  }

  onDeliveryDateChange(deliveryDate) { 
    const { postCode } = this.state

    this.setState((state) => ({ 
      ...state,
      deliveryDate,
      isFormValid: this.isFormValid({ deliveryDate, postCode }),
    }))
  }

  onPostCodeChange(postCode, valid) { 
    const { 
      deliveryDate, 
      postcodes, 
     } = this.state

    if (!valid) { 
      this.setState((state) => ({ 
        ...state,
        postCode: null,
        isFormValid: false,
      }))
      return
    }
    const postCodeEnum = postcodes.find(c => c.code === postCode)
    const availableDates = postCodeEnum ? postCodeEnum.zone.availableDates : []

    let newDeliveryDate = deliveryDate

    // if deliveryDate is selected, but not in avaiable dates, set to null
    if (deliveryDate && !availableDates.find(d => d === deliveryDate.date())){
      newDeliveryDate = null
    }

    this.setState((state) => ({ 
      ...state,
      postCode,
      availableDates,
      isFormValid: this.isFormValid({ deliveryDate: newDeliveryDate, postCode }),
      deliveryDate: newDeliveryDate,
    }))
  }

  onCouponChange(phone) {
    this.setState((state) => ({ 
      ...state,
      phone, 
      isFormValid: this.isFormValid({ 
        deliveryDate: state.deliveryDate, 
        postCode: state.postCode,
        phone: phone
      }),
    }))
  }
 
  isFormValid ({ 
    deliveryDate, 
    postCode,
    phone = this.state.phone,
  }) {
    return !!postCode && !!deliveryDate && 
           !!phone && phone.startsWith('04') && phone.length === 10
  }

  formatDate(date) {
    return date ? date.format('YYYY-MM-DD') : ''
  }

  onSubmit(e) {
    if(!this.isFormValid(this.state)){
      e.preventDefault()
      this.setState((state) => ({ 
        ...state,
        isFormValid: false,
      }))
      return 
    }

    console.log('phone', e.target.phone.value)
    console.log('date', e.target.date.value)

    debugger
  }

  render() {
    const { 
      availableDates,
      deliveryDate,
      isFormValid,
      formErrorMessage,
      postcodes,
    } = this.state


    return (
      <form 
        className={styles.boxWpap} 
        name="trees"  
        method="post"  
        action="/collect" 
        onSubmit={this.onSubmit}
      >
        <input name="date" value={this.formatDate(deliveryDate)} type="hidden"/>

        <h2 className={styles.h2}>Tree collection</h2>
        <hr className={styles.hr}/>
        <div className={styles.subTextGreen}>
          Collection starts in January. Please note: available only for eligible customers.
        </div>
        <PostCodeInput 
          postcodes={postcodes}
          onPostCodeChange={this.onPostCodeChange}/>
        <DatesField 
          onDeliveryDateChange={this.onDeliveryDateChange}
          availableDays={availableDates}
          deliveryDate={deliveryDate}
        />
        <PhoneInput 
          onCouponChange={this.onCouponChange}
        />
        <hr className={styles.hr}/>
        <button 
          type="submit"
          className={styles.cta} 
          disabled={!isFormValid}
        >
            {`Done`}
        </button>
        {!isFormValid && (
          <p className={styles.surchargeMessage}>{formErrorMessage}</p>
        )}
      </form>
    )
  }
}



export default CollectionForm

CollectionForm.propTypes = {

}
