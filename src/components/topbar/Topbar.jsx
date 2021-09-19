import React from 'react';
import "./topbar.css";
import Alex from './Alex.jpeg'
import NotificationsIcon from '@mui/icons-material/Notifications';
function Topbar() {
    return (
        <div className = 'topbar'>
          <div className = 'topbarWrapper'>
              <div className='topLeft'>
                  <span className = 'logo'>Dashboard</span>
              </div>
              <div className='topRight'>
                  <div className="topbarIconContainer">
                <NotificationsIcon />
                <span className="topIconBadge">2</span>
                  </div>
                  <img src= {Alex}alt="" className="topAvatar" />
                  <div className="btn-side">
                      <button className = "btn3">Add</button>
                  </div>
              </div>

          </div>
          
        </div>
    )
}

export default Topbar
