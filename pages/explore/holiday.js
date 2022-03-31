import React from 'react'
import BankHoliday from '../../components/footer/explore/BankHoliday'
import BreadcumbComponent from '../../components/breadcumb/BreadcumbComponent'
const holiday = () => {
    return (
        <>
        <BreadcumbComponent pageInfo={{ title: "Explore", desc: "Bank Holidays" }} />
        <BankHoliday />
        </>
    )
}

export default holiday
