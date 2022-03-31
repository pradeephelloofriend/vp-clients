import React from 'react'

const TopHeaderAreaComponent = () => {
    return (
        <>
            <div className="top-header-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="header-content-left">
                                <a>Welcome To Camorlim Panchayat!</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="header-content-right">
                                
                                    <a href="tel:+822456974" className="me-xl-8 text-c-blue">
                                    <i className="fa fa-mobile me-xl-1"></i>
                                        Call Us For Inquiry: +0832-2777019
                                    </a>
                                    <a href="mailto:hello@surety.com" className="text-c-blue">
                                    <i className="fa fa-envelope-o me-xl-1"></i>
                                        Email: sarpanch@vpcamorlimsalcete.com
                                    </a>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopHeaderAreaComponent
