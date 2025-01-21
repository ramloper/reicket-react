
import Calendar from "../../components/calendar/calendar"
import CenterBannerLayout from "../../components/home/CenterBannerLayout"
import CenterIconLayout from "../../components/home/CenterIconLayout"
import "./home.css"

const Home = () => {
    return (
        <div className="home-container">
            {/* <CenterBannerLayout /> */}
            <CenterIconLayout />
            <Calendar />
        </div>
    )
}

export default Home