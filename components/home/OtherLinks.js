import React from 'react'
import Marquee from "react-fast-marquee";
const OtherLinks = ({ noticeData }) => {
    //console.log('noticedata',noticeData)
    return (
        <section className="wrapper bg-gray ">
            <div className="container-fluid ">

                <div className="row text-center mt-2 ">
                    <div className="col-lg-1">
                        <h6 className="allheadcolor">What's New</h6>
                    </div>
                    <div className="col-lg-11">
                        <Marquee
                            gradient={false}
                            speed={50}
                        >
                            {noticeData.content.filter(d => d.__component == "notice-area.notice-item").map((data, index) =>
                                <a key={index} className="text-danger ms-9">{data.title}</a>
                            )}
                        </Marquee>
                    </div>
                </div>
            </div>
        </section>
    )
}
    
export default OtherLinks
