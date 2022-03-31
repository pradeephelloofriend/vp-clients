import React from 'react'
import GalleryComponent from '../components/gallery/GalleryComponent'
import BreadcumbComponent from '../components/breadcumb/BreadcumbComponent'
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`${process.env.API_PATH}/gallery-area`)
    const data = await res.json()
    return { props: { data } }
}
const gallery = ({data}) => {
    return (
        <>
        <BreadcumbComponent pageInfo={{title:"Gallery",desc:"Photo And Video"}}/>
        <GalleryComponent data={data}/>
        </>
                            
    )
}

export default gallery
