
import React from 'react'
import PropTypes from 'prop-types'
import { DayPickerSingleDateController } from 'react-dates'
import moment from 'moment'
import * as styles from './styles'

export default class DatesField extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      date: null,
      focused: true,
      daySize: 35,
      availableDates: this.mapDates(),
    }

    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    const { daySize } = this.state
    let newSize = daySize
    if ( window.innerWidth <= 325 ) {
      newSize = 29
    } else if ( window.innerWidth < 400 ) {
      newSize = 35
    } else {
      newSize = 39
    }
    
    if (daySize === newSize) {
      return
    }
    this.setState({ daySize: newSize })
  }

  componentWillUnmount() {
      window.removeEventListener("resize", this.resize.bind(this));
  }

  componentDidUpdate(prevProps) {
    if (this.props.availableDays !== prevProps.availableDays) {

      this.setState({ 
        availableDates: this.mapDates(),
      })
    }
  }

  mapDates() {
    const { availableDays = [] } = this.props
    return availableDays.map(d => `2020-12-${d<10 ? '0': ''}${d}`)
  }

  onDateChange(date) {
    const { onDeliveryDateChange } = this.props
    onDeliveryDateChange(date);
    this.setState({ date });
  }

  onFocusChange() {
    // Force the focused states to always be truthy so that date is always selectable
    this.setState({ focused: true });
  }

  isBlocked = (availableDates, day) => {
    return !availableDates.some(date => day.isSame(date, 'day'))
  }

  // https://github.com/airbnb/react-dates/blob/master/stories/DayPickerSingleDateController.js

  render() {
    const { focused, date, daySize, availableDates } = this.state
    const isDayBlocked = (day) => this.isBlocked(availableDates, day)
    return (
      <div className={styles.calendar}>
        <label>Delivery Date</label>
        <DayPickerSingleDateController
          numberOfMonths={1} 
          focused={focused}
          date={date}
          daySize={daySize}
          initialVisibleMonth={() => moment('12 2020', 'MM YYYY')}
          isDayBlocked={isDayBlocked}
          noNavButtons={true}
          hideKeyboardShortcutsPanel={true}
          onDateChange={this.onDateChange}
          onFocusChange={this.onFocusChange}
        />
        
      </div>
    );
    }
  }
  
  DatesField.propTypes = {
    onDeliveryDateChange: PropTypes.func.isRequired,
    availableDays: PropTypes.array,
  }
  