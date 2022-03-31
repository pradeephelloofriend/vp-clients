import React from 'react'
import FeedBackComponent from '../../components/footer/Help/FeedBackComponent'
import BreadcumbComponent from '../../components/breadcumb/BreadcumbComponent'
const feedback = () => {
    return (
        <div>
            <BreadcumbComponent pageInfo={{title:"May I Help You",desc:"Feedback"}}/>
            <FeedBackComponent/>
        </div>
    )
}

export default feedback
