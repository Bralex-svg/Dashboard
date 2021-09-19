import React from 'react'
import "./widgetsLarge.css"
import Alex from "./Alex.jpeg"
import Lady from "./Lady.jpg"
import Lex from "./Lex.jpeg"


function WidgetsLarge() {
    return (
        <div className = "widgetsLarge">
            <span className="widgetLgTitle">New Applicants</span>
         <ul className="widgetLgList">
             <li className = "widgetLgListItem">
                 <img src={ Lady } alt="" className = "widgetLgImg" />
                 <div className="widgetLgUser">
                     <span className="widgetLgUsername">Adam Alex</span>
                     <span className="widgetLgUserTitle">Software Engineer</span>
                 </div>
             </li>
             <li className = "widgetLgListItem">
                 <img src={Lex} alt="" className = "widgetLgImg" />
                 <div className="widgetLgUser">
                     <span className="widgetLgUsername">Adam Alex</span>
                     <span className="widgetLgUserTitle">Software Engineer</span>
                 </div>
             </li>
             <li className = "widgetLgListItem">
                 <img src={Lady} alt="" className = "widgetLgImg" />
                 <div className="widgetLgUser">
                     <span className="widgetLgUsername">Adam Alex</span>
                     <span className="widgetLgUserTitle">Software Engineer</span>
                 </div>
             </li>
             <li className = "widgetLgListItem">
                 <img src={Alex} alt="" className = "widgetLgImg" />
                 <div className="widgetLgUser">
                     <span className="widgetLgUsername">Adam Alex</span>
                     <span className="widgetLgUserTitle">Software Engineer</span>
                 </div>
             </li>
             <li className = "widgetLgListItem">
                 <img src={Alex} alt="" className = "widgetLgImg" />
                 <div className="widgetLgUser">
                     <span className="widgetLgUsername">Adam Alex</span>
                     <span className="widgetLgUserTitle">Software Engineer</span>
                 </div>
             </li>
         </ul>
        </div>
    )
}

export default WidgetsLarge
