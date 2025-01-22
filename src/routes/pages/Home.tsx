import CenterBannerLayout from "../../components/home/centerBanner/CenterBannerLayout"
import CenterCardLayout from "../../components/home/centerCard/CenterCardLayout"
import styles from "./Home.module.css"

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <CenterBannerLayout />
            <CenterCardLayout />
        </div>
    )
}

export default Home