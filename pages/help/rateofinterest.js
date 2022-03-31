import React from 'react'
import RateOfInterestComponent from '../../components/footer/Help/RateOfInterestComponent'
import BreadcumbComponent from '../../components/breadcumb/BreadcumbComponent'
const rateofinterest = () => {
    return (
        <div>
            <BreadcumbComponent pageInfo={{title:"May I Help You",desc:"Rate Of Interest"}}/>
            <RateOfInterestComponent/>
        </div>
    )
}

export default rateofinterest
