import React from 'react'
import {Button,Typography,Space } from 'antd';
import Image from 'next/image'
import img1 from '../../public/img/photos/add/bg12.jpg'
import q1 from '../../public/img/icons/light-bulb.svg'
import Zoom from 'react-reveal/Zoom';
const {Title,Text}=Typography
const AddArea = ({addData}) => {
    //console.log('addarea',addData)
    return (
        <section className="wrapper bg-light pb-8 add-area">
            <div className="container no-padding">
                <div className="row">
                    <div className="col-md-6 g-xxl-0">
                        <div className="add-img ">
                           
                            <Image
                                className="image-wrapper"
                                height={400}
                                width={800}
                                src={addData.leftContent.image[0].url}
                                alt=""
                            />
                           
                        </div>
                    </div>
                    <div className="col-md-6 g-xxl-0">
                        <div className="card  bg-c-blue">
                            <div className='card-body'>
                                <Title level={3} className="text-white mb-5">{addData.rightContent.title}</Title>
                                
                                    <div className="d-flex flex-row add-content">
                                    <Button type="primary" className="me-xl-15" size="large">{addData.rightContent.buttonText}</Button>
                                        <div className=" mb-0">
                                        <Image
                                className="svg-inject icon-svg icon-svg-sm"
                                height={70}
                                width={50}
                                src={q1}
                                alt=""
                            />
                                            
                                        </div>
                                        <div>
                                            <h4 className="mb-1 text-white">Call Us Today:</h4>
                                            <p className="text-white mb-0"> +82546-564-234</p>
                                        </div>
                                    </div>    
                                    
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AddArea
