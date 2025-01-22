import styles from "./CenterCard.module.css"
import { CenterCardType } from "../../../types/centerCard"
import { FaStar, FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { TbMapPin } from "react-icons/tb";
const CenterCard = ({ centerCard }: { centerCard: CenterCardType }) => {
    return (
        <div className={styles.centerCard}>
            <div className={styles.centerCardHeader}>
                <div>{`${centerCard.address1} | ${centerCard.address2}`}</div>
                <div className={styles.ratingContainer}>
                    {centerCard.starRating.toFixed(1)}
                    <span className={styles.star}><FaStar /></span>
                </div>
                <div className={`${styles.wish} ${centerCard.isWish ? styles.isWish : styles.isNotWish}`}>
                    {centerCard.isWish ? <FaHeart /> : <CiHeart />}
                </div>
            </div>
            <div className={styles.centerCardName}>{centerCard.name}</div>
            <div className={styles.centerCardIntroduction}>{centerCard.simpleIntroduction}</div>
            <div className={styles.centerCardAddress}><TbMapPin /> {centerCard.fullAddress}</div>
        </div>
    )
}

export default CenterCard
