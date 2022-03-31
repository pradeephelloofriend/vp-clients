import React from 'react'
import { Layout } from 'antd';
const MainLayout = ({children}) => {
    return (
        <>
        <Layout className="content-wrapper">

            {children}
        </Layout>
        </>
    )
}
export default  MainLayout