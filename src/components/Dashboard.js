import React from 'react'

import Conatain from './Conatain'
import Sidenav from './Sidenav'

const Dashboard = () => {
    return(
        <div className="flex">
            <div style={{width:"200px"}}>
                <Sidenav/>
            </div>
            <div>
                <Conatain/>
            </div>
        </div>
    )
}
export default Dashboard