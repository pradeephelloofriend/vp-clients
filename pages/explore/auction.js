import React from 'react'
import PublicNoticeComponent from '../../components/footer/explore/PublicNoticeComponent'
import BreadcumbComponent from '../../components/breadcumb/BreadcumbComponent'
const auction = () => {
    return (
        <div>
             <BreadcumbComponent pageInfo={{title:"Explore",desc:"Public Notices/Auctions"}}/>
            <PublicNoticeComponent/>
        </div>
    )
}

export default auction
