import React from 'react'
import PropTypes from 'prop-types'

import { useSubscritionsContext } from '../'

const SubscriptionPlan = ({ id, annualPrice, monthlyPrice, name }) => {
    const {
        selectedPlanId,
        onSelectPlan,
        billingPeriod,
    } = useSubscritionsContext()

    const isSelected = selectedPlanId === id
    const price = billingPeriod === 'MONTH' ? monthlyPrice : annualPrice

    return (
        <div style={{ margin: '8px 0' }} onClick={() => onSelectPlan(id)}>
            <div
                style={{
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    border: '1px solid',
                    borderColor: isSelected ? 'blue' : 'grey',
                    borderRadius: '4px',
                    padding: '0 24px',
                }}
            >
                <h2>{name}</h2>
                <h2>{price === 0 ? 'Free' : `$ ${price}`}</h2>
            </div>
        </div>
    )
}

SubscriptionPlan.propTypes = {
    id: PropTypes.number.isRequired,
    annualPrice: PropTypes.number.isRequired,
    monthlyPrice: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
}

export default SubscriptionPlan
