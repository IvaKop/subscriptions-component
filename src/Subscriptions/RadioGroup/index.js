import React from 'react'
import PropTypes from 'prop-types'

const RadioGroup = ({ value, onChange }) => (
    <div style={{ display: 'flex', margin: '24px 0' }}>
        <input
            type="radio"
            id="monthly"
            name="billingPeriod"
            value="MONTH"
            checked={value === 'MONTH'}
            onChange={e => onChange(e.target.value)}
        />
        <label htmlFor="monthly">Monthly</label>
        <input
            type="radio"
            id="annual"
            name="billingPeriod"
            value="ANNUAL"
            checked={value === 'ANNUAL'}
            onChange={e => onChange(e.target.value)}
        />
        <label htmlFor="annual">Annual</label>
    </div>
)

RadioGroup.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default RadioGroup
