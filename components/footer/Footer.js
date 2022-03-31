import React from 'react'
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

import { useRouter } from 'next/router'
import {createStructuredSelector} from 'reselect';
import {selectFootData} from '../../redux/footer/footSelector';

  
  const Footer = ({footdata}) => {  
   //console.log('footerdata',footdata)

   const router = useRouter()
   function goToPage(pathId,catCode) {
       router.push({
           pathname: `/${pathId}/`,
           query:{catCode:catCode}
       })

   }
     return (
        <>
             <footer className=" wrapper image-wrapper bg-image bg-overlay text-white kam-footer">
                 <div className="container py-1 py-md-1 ">
                     <div className="row gy-6 gy-lg-0 py-10">
                         <div className="col-lg-2 mt-6">
                             <h6 className="text-white mt-n12 mb-5 fotterbrandname">PUCCS</h6>
                             <h2 className="text-white mt-4">Address</h2>
                             <p className=" address "><a className="text-white" href="https://goo.gl/maps/onU92fzsFmj3fQDHA"> <i className="fa fa-map-marker text-white " aria-hidden="true"></i> Talapwada,<br></br>Pirna, <br></br>Bardez-Goa,403 513</a><br></br></p>
                         </div>
                         <div className="col-lg-10">
                             <div className="row row gy-6 gy-lg-0">
                                 {footdata.map((i, index) =>
                                     <div key={index} className="col-md-4 col-lg-3">
                                         <h2 className="widget-title text-white taskheader">{i.taskName}<br /></h2>
                                         <ul className="list-unstyled  mb-0">
                                             {i.subTasks.map((c, index) =>
                                                 <li key={index}><a onClick={() => goToPage(c.link, c.catCode)}> {c.subTaskName}</a></li>
                                             )}
                                         </ul>
                                     </div>
                                 )}
                             </div>
                         </div>
                     </div>
                 </div>
             </footer>

        </>
    )
}
const mapStateToProps=createStructuredSelector({
    footdata:selectFootData
})


export default connect(mapStateToProps) (Footer)


