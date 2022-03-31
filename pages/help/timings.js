import React from 'react'
import BranchTiming from '../../components/footer/Help/BranchTiming'
import BreadcumbComponent from '../../components/breadcumb/BreadcumbComponent'
const timings = () => {
    return (
        <div>
             <BreadcumbComponent pageInfo={{title:"May I Help You",desc:"Branch Timings"}}/>
            <BranchTiming/>
        </div>
    )
}

export default timings
