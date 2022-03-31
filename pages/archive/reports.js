import React from 'react'
import ReportsComponent from'../../components/footer/Archive/ReportsComponent'
import  BreadcumbComponent from '../../components/breadcumb/BreadcumbComponent'
const reports = () => {
    return (
        <div>
             <BreadcumbComponent pageInfo={{ title: "Archive", desc: "Reports" }} />
            <ReportsComponent/>
        </div>
    )
}

export default reports
