import React from 'react'
import DisclaimerComponent from '../../components/footer/TP/DisclaimerComponent'
import  BreadcumbComponent from '../../components/breadcumb/BreadcumbComponent'
const disclaimer = () => {
    return (
        <div>
            <BreadcumbComponent pageInfo={{ title: "Terms And Policies", desc: "Disclaimer" }} />
            <DisclaimerComponent/>
        </div>
    )
}

export default disclaimer
