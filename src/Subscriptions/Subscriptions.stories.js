import React from 'react'
import Subscriptions, { SubscriptionPlan } from './'

const subscriptionPlans = [
    { id: 1, monthlyPrice: 0, annualPrice: 0, name: 'Beginner' },
    { id: 2, monthlyPrice: 10, annualPrice: 100, name: 'Professional' },
    { id: 3, monthlyPrice: 50, annualPrice: 500, name: 'Enterprise' },
]

export const SubscriptionsBasic = () => (
    <Subscriptions
        onSelect={selectedPlan => alert(JSON.stringify(selectedPlan, null, 2))}
    >
        <SubscriptionPlan {...subscriptionPlans[0]} />
        <SubscriptionPlan {...subscriptionPlans[1]} />
        <SubscriptionPlan {...subscriptionPlans[2]} />
    </Subscriptions>
)

SubscriptionsBasic.storyName = 'Basic subscriptions'

export default {
    title: 'Subscription',
    component: Subscriptions,
}
