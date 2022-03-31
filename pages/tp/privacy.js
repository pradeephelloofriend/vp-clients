import React from 'react'
import TermsPolicyComponent from '../../components/footer/TP/TermsPolicyComponent'
import  BreadcumbComponent from '../../components/breadcumb/BreadcumbComponent'
const privacy = () => {
    return (
        <div>
            <BreadcumbComponent pageInfo={{ title: "Terms And Policies", desc: "Privacy Policy" }} />
            <TermsPolicyComponent/>
        </div>
    )
}

export default privacy
