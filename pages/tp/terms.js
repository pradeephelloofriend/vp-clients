import React from 'react'
import TermsOfUseComponent from '../../components/footer/TP/TermsOfUseComponent'
import  BreadcumbComponent from '../../components/breadcumb/BreadcumbComponent'
const terms = () => {
    return (
        <div>
            <BreadcumbComponent pageInfo={{ title: "Terms And Policies", desc: "Terms Of Use" }} />
            <TermsOfUseComponent/>
        </div>
    )
}

export default terms
