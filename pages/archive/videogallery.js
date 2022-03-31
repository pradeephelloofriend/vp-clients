import React from 'react'
import VideoGalleryComponent from '../../components/footer/Archive/VideoGalleryComponent'
import  BreadcumbComponent from '../../components/breadcumb/BreadcumbComponent'
const videogallery = () => {
    return (
        <div>
              <BreadcumbComponent pageInfo={{ title: "Archive", desc: "Video Gallery" }} />
            <VideoGalleryComponent/>
        </div>
    )
}

export default videogallery
