import React from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'
import { Button } from 'antd';
import { MobileOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { selectMenuData } from '../../redux/menu/menuSelector';
import { createStructuredSelector } from 'reselect'
import { useRouter } from 'next/router'

const MenuItemComponent = ({ menuData }) => {
    //console.log('menuData2', menuData)

    const router = useRouter()
    function goToPage(pathId, catCode, desc) {
        //alert(catCode)
        if (catCode == 'AC') {
            router.push({
                pathname: `/business/accounts/`,
                query: { catCode: catCode, desc: desc }
            })
        } else if (catCode == 'INT') {
            router.push({
                pathname: `/business/interest`,
                query: { catCode: catCode, desc: desc }
            })
        } else {
            router.push({
                pathname: `/${pathId}/`,
                query: { catCode: catCode, desc: desc }
            })
        }


    }
    return (
        <>

            <Nav className=" nav-menu" activeKey="/home">
                {menuData ? menuData.map((i, index) =>

                    i.taskSubTask == false ?
                        <Nav.Item>
                            <Nav.Link onClick={() => goToPage(i.taskLink)} >{i.taskName}</Nav.Link>
                        </Nav.Item>
                        :
                        <NavDropdown key={index} title={i.taskName} id="nav-dropdown" renderMenuOnMount={true}>
                            {menuData ? i.subtasks.filter(d => d.id !== 8).map((d, ind) =>

                                <NavDropdown.Item key={ind} eventKey={`${index}.${ind}`} onClick={() => goToPage(d.subTaskLink, d.subTaskCategory, i.taskName)} >{d.subTaskName} </NavDropdown.Item>
                            ) : []}



                        </NavDropdown>
                ) : []}

                        <Nav.Item>
                            <Nav.Link onClick={()=>router.push('/dashboard/')}>Dashboard</Nav.Link>
                        </Nav.Item>

                        
            </Nav>

        </>
    )
}

const mapStateToProps = createStructuredSelector({
    menuData: selectMenuData
})
export default connect(mapStateToProps)(MenuItemComponent)
