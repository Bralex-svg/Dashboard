import React from 'react'
import './sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TodayIcon from '@mui/icons-material/Today';
import FolderIcon from '@mui/icons-material/Folder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ChatIcon from '@mui/icons-material/Chat';
import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext';

function Sidebar() {
    return (
        <div className="sidebar ">
       
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    {/* <h3 className="sidebarTitle"></h3> */}
                    <div className="sidebarList">
                        <div className="sidebarListItem active">
                            <HomeIcon    />
                        </div>
                        <div className="sidebarListItem">
                            <AssessmentIcon />
                        </div>
                        <div className="sidebarListItem">
                            < TodayIcon  />
                        </div>
                        <div className="sidebarListItem">
                            < FolderIcon  />
                        </div>
                        <div className="sidebarListItem">
                            < PersonOutlineIcon  />
                        </div>
                        <div className="sidebarListItem">
                            <  ChatIcon  />
                        </div>
                        <div className="sidebarListItem">
                            <  QueuePlayNextIcon  />
                        </div>
                    </div>
                </div>
            </div>
            <div className="v1"></div>
        </div>
        
    )
}

export default Sidebar
