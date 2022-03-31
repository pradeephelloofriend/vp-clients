import React from 'react'
import NoticeComponent from '../../components/footer/Archive/NoticeComponent'
import  BreadcumbComponent from '../../components/breadcumb/BreadcumbComponent'
const notice = () => {
    return (
        <div>
             <BreadcumbComponent pageInfo={{ title: "Archive", desc: "Notices" }} />
            <NoticeComponent/>
        </div>
    )
}

export default notice
