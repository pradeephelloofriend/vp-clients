import React from 'react'
import ComplainComponent from '../../components/footer/Help/ComplainComponent'
import BreadcumbComponent from '../../components/breadcumb/BreadcumbComponent'
const complaint = () => {
    return (
        <div>
             <BreadcumbComponent pageInfo={{title:"May I Help You",desc:"Complaint Or Public Grivenance"}}/>
            <ComplainComponent/>
        </div>
    )
}

export default complaint
