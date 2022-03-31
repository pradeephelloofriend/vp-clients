import React from 'react'
import {Button,Typography } from 'antd';
const {Title,Text}=Typography
const BreadcumbComponent = ({pageInfo}) => {
    return (
        <>
             <section className="wrapper bg-c-navBlue">
                <div className="container pt-10 pb-12 pt-md-14 pb-md-12  text-center">
                    <div className="row">
                        <div className="col-md-9 col-lg-7 col-xl-6 mx-auto">
                            <Text  className="text-l-blue">{pageInfo.title}</Text >
                            <Title level={4} className="text-white no-margin">{pageInfo.desc}</Title>
                            
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default BreadcumbComponent
