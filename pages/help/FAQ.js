import React from 'react'
import FAQComponent from '../../components/footer/Help/FAQComponent'
import BreadcumbComponent from '../../components/breadcumb/BreadcumbComponent'
const FAQ = () => {
    return (
        <div>
            <BreadcumbComponent pageInfo={{title:"May I Help You",desc:"FAQs"}}/>
            <FAQComponent/>
        </div>
    )
}

export default FAQ
