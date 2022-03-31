import React from 'react'
import NewsAnoucComponent from '../../components/footer/Archive/NewsAnoucComponent'
import BreadcumbComponent from '../../components/breadcumb/BreadcumbComponent'
const news = () => {
    return (
        <div>
            <BreadcumbComponent pageInfo={{ title: "Archive", desc: "News and Announcement" }} />
            <NewsAnoucComponent/>
        </div>
    )
}

export default news
