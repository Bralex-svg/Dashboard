import Chart from '../../components/charts/Chart'
import Featuredinfo from '../../components/featuredinfo/Featuredinfo'
import Progress from '../../components/progress/Progress'
import WidgetsLarge from '../../components/widgetsLarge/WidgetsLarge'
import WidgetsSmall from '../../components/widgetsSmall/WidgetsSmall'

import './home.css'
// import {UserData} from "../../dummyData"

function Home() {
    return (
        <div className="home">
            <Featuredinfo />
            <Chart />
            <Progress />
            <div className="homeWidgets">
            <WidgetsSmall />
                <WidgetsLarge />
            
             
            </div>
        </div>
    )
}

export default Home
