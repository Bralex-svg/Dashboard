import './featuredinfo.css'
import CallMadeIcon from '@mui/icons-material/CallMade';
// import { Call } from '@material-ui/icons';
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
import {
    CircularProgressbar,
  
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  
const percentage3 = 70;
const percentage1 = 60;
const percentage2 = 40;
// const percentage = 60;


function Featuredinfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Total Applications</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">7956</span>
                    <span className="featuredMoneyRate">< CallMadeIcon  style={{color: '#FE5260 '}} />  +3.59</span>
                </div>
                <div style={{ width: 50, height: 50,
                 position: 'relative',
                  top: '-80px', left: '80%'}}>
            <CircularProgressbar 
            value={percentage3}
             text={`${ percentage3}%`}
             styles={buildStyles({
                textColor: "#6742B4",
                pathColor: "#6742B4",
                trailColor: "#707070"
              })}
             />

            </div>
            </div>
            <div className="featuredItem blue">
          

              
                <span className="featuredTitle blue">Shortlisted Candidates</span>
                <div className="featuredMoneyContainer blue">
                    <span className="featuredMoney blue ">4658</span>
                    <span className="featuredMoneyRate blue">< CallMadeIcon  
                     style={{backgroundColor: '#2E9CFD '}} />  +06</span>
                </div>
                <div style={{ width: 50, height: 50, backgroundColor: '#2E9CFD',
                 position: 'relative',
                  top: '-80px', left: '80%' }}>
            <CircularProgressbar className = 'blue' 
            value={percentage1}
             text={`${ percentage1}%`}
             styles={buildStyles({
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "#707070",
                backgroundColor: ' #2E9CFD',
              })}
             />

            </div>
            </div>
          
            <div className="featuredItem">
          

               
                <span className="featuredTitle">Total Applications</span>
                <div className="featuredMoneyContainer">
                   
                    <span className="featuredMoney">1501</span>
                        
                    <span className="featuredMoneyRate">< CallMadeIcon   />  +06</span>
                  
                </div>
                
                
            <div style={{ width: 50, height: 50,
                 position: 'relative',
                  top: '-80px', left: '80%'}}>
            <CircularProgressbar 
            value={percentage2}
             text={`${ percentage2}%`}
             styles={buildStyles({
                textColor: "#FE5260",
                pathColor: "#FE5260",
                trailColor: "#707070"
              })}
             />

            </div>
            </div>
          
        </div>
    )
}

export default Featuredinfo
