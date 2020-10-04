import React, { useState, createContext, useContext } from 'react'
import PropTypes from 'prop-types'

import SubscriptionPlan from './SubscriptionPlan'
import RadioGroup from './RadioGroup'

const SubscriptionsContext = createContext({})

const useSubscritionsContext = () => useContext(SubscriptionsContext)

const Subscriptions = ({ onSelect, children }) => {
    const [selectedPlanId, setSelectedPlanId] = useState()
    const [billingPeriod, setBillingPeriod] = useState('MONTH')

    return (
        <div style={{ width: '90%', margin: 'auto' }}>
            <RadioGroup
                value={billingPeriod}
                onChange={value => {
                    setBillingPeriod(value)
                }}
            />
            <SubscriptionsContext.Provider
                value={{
                    selectedPlanId: selectedPlanId,
                    billingPeriod,
                    onSelectPlan: id => {
                        setSelectedPlanId(id)
                    },
                }}
            >
                {children}
            </SubscriptionsContext.Provider>
            <button
                disabled={!selectedPlanId}
                onClick={() => onSelect({ id: selectedPlanId, billingPeriod })}
                style={{
                    margin: '12px 0',
                    padding: '12px 32px',
                }}
            >
                Select
            </button>
        </div>
    )
}

export { SubscriptionPlan, useSubscritionsContext }

Subscriptions.propTypes = {
    onSelect: PropTypes.func.isRequired,
}

export default Subscriptions
