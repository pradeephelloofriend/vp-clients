import React from 'react'
import RegisteredOfficeComponent from '../../components/about/RegisteredOfficeComponent';
import BreadcumbComponent from '../../components/breadcumb/BreadcumbComponent'
const office = ({data}) => {
    return (
        <>
        <BreadcumbComponent pageInfo={{ title: "About Us", desc: "Registered Office" }} />
        <RegisteredOfficeComponent data={data} />
        </>
    )
}

export default office
