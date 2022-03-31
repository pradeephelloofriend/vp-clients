import React from 'react'
import PhotoGalleryComponent from '../../components/footer/Archive/PhotoGalleryComponent'
import  BreadcumbComponent from '../../components/breadcumb/BreadcumbComponent'
const photogallery = () => {
    return (
        <div>
             <BreadcumbComponent pageInfo={{ title: "Archive", desc: "Photo Gallery" }} />
            <PhotoGalleryComponent/>
        </div>
    )
}

export default photogallery
