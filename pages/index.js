import React from 'react'
import Banner from '../components/home/Banner';
import ProductComponent from '../components/home/ProductComponent'
import OtherLinks from '../components/home/OtherLinks'
import AddBlock from '../components/home/AddBlock';
import Scheme from '../components/home/Scheme';
import UperEndComponent from '../components/home/UperEndComponent'
import AllProductComponent from '../components/home/AllProductComponent'
import TestimonialComponent from '../components/home/TestimonialComponent'
import AddArea from '../components/home/AddArea'
import SliderComponent from '../components/home/SliderComponent'
import EventsComponent from '../components/home/EventsComponent'
import ContactComponent from '../components/home/ContactComponent'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {setServiceAreaData,setSchemeAreaData} from '../redux/services/serviceAction'
import { selectUdcData } from '../redux/udc/udcSelector';
import { selectServiceData} from '../redux/services/serviceSelector';
import MapComponent from '../components/home/MapComponent';
import SmallAreaComponent from '../components/home/SmallAreaComponent';

//get initial ServerSideProps
export async function getServerSideProps() {
    //-------------------------------
    const event = await fetch(`${process.env.API_PATH}/gallery-area`)
    const eventdata = await event.json()
    //-------------------------------------------------------
    const searchAreaData = await fetch(`${process.env.API_PATH}/search-area`)
    const searchData = await searchAreaData.json()
    //-----------------------------------------------
    const addAreaData = await fetch(`${process.env.API_PATH}/add-area`)
    const addData = await addAreaData.json()
    //---------------------------------------------------
    const noticeAreaData = await fetch(`${process.env.API_PATH}/notice-area`)
    const noticeData = await noticeAreaData.json()
    //------------------------------------------------
    const sliderAreaData = await fetch(`${process.env.API_PATH}/slider-area`)
    const sliderData = await sliderAreaData.json()
    //---------------------------------------------
    const aboutAreaData = await fetch(`${process.env.API_PATH}/about-area`)
    const aboutData = await aboutAreaData.json()
    //------------------------------------------
    const testiAreaData = await fetch(`${process.env.API_PATH}/testi-area`)
    const testiData = await testiAreaData.json()
    //--------------------------------------
    const processData = await fetch(`${process.env.API_PATH}/process-area`)
    const stepData = await processData.json()
    //--------------------------------
    const res1 = await fetch(`${process.env.API_PATH}/scheme-area`)
    const data1 = await res1.json()
    // Fetch data from external API
    const res = await fetch(`${process.env.API_PATH}/produt-tab-area`)
    const data = await res.json()
    //-----------------------------------
    //BIND RETURN DATA THROUGH PROPS
    //-----------------------------------
    return { props: {eventdata, data,data1,stepData,testiData,aboutData, sliderData, noticeData , addData,searchData,  } }
}
const Index = ({ udcData, serviceAllData,setServiceAreaData,eventdata,data,setSchemeAreaData,data1,stepData,testiData,aboutData,sliderData,noticeData,addData,searchData ,}) => {
    //console.log('pdata=',data1)
    React.useEffect(() => {
        setServiceAreaData(data) ,
        setSchemeAreaData(data1) 
    }, [data])
    
    return (
        <>
            
            <Banner sliderData={sliderData} />
            <OtherLinks noticeData={noticeData} />
            <SliderComponent />
            <AddBlock stepData={stepData} />
            <Scheme schemeData={data1} />
            <EventsComponent eventdata={eventdata}/>
            <ProductComponent aboutData={aboutData} />  {/* ABOUT AREA*/}
            <MapComponent/>
            <ContactComponent/>
            {/*<SmallAreaComponent/>*/}
            {/*<ContactComponent/>*/}

        </>
    )
}
const mapStateToProps=createStructuredSelector({
    udcData:selectUdcData,
    serviceAllData: selectServiceData
})
const mapDispatchToProps=(dispatch)=>({
setServiceAreaData:(data)=>dispatch(setServiceAreaData(data)),
setSchemeAreaData:(data)=>dispatch(setSchemeAreaData(data))
})
export default connect(mapStateToProps,mapDispatchToProps) (Index)