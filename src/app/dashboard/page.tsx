import Header from "@/components/Header";
import Intro from "@/components/Intro"
import AddingValue from "@/components/Adding";
import Invest from "@/components/Invest";
import Profilo from "@/components/Profilo";
import FounderCom from "@/components/FounderCom";
const Dashboard = () => {
    return (
        <div>
          <Header/>
          <Intro/>
          <AddingValue/>
          <Invest/>
          <Profilo/>
          <FounderCom/>
        </div>
    )
}

export default Dashboard;