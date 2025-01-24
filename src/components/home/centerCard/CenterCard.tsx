import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart, FaStar } from "react-icons/fa";
import { TbMapPin } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { handleWish } from "../../../lib/wish";
import { CenterCardType } from "../../../types/centerCard";
import styles from "./CenterCard.module.css";
const CenterCard = ({ centerCard }: { centerCard: CenterCardType }) => {
    const [centerCardInfo, setCenterCardInfo] = useState<CenterCardType>(centerCard)
    useEffect(() => {
    }, [centerCardInfo])

    const nav = useNavigate();
    const onClick = (type: string) => {
        if (type === "wish") {
            handleWish(centerCardInfo, setCenterCardInfo)
        } else if (type === "detail") {
            nav(`/center/${centerCardInfo.centerId}`)
        }
    }
    return (
        <div className={styles.centerCard}>
            <div className={styles.centerCardHeader}>
                <div>{`${centerCardInfo.address1} | ${centerCardInfo.address2}`}</div>
                <div className={styles.ratingContainer}>
                    {centerCardInfo.starRating.toFixed(1)}
                    <span className={styles.star}><FaStar /></span>
                </div>
                <div className={`${styles.wish} ${centerCardInfo.isWish ? styles.isWish : styles.isNotWish}`} onClick={() => {
                    onClick("wish")
                }}>
                    {centerCardInfo.isWish ? <FaHeart /> : <CiHeart />}
                </div>
            </div>
            <div className={styles.centerCardName} onClick={() => {
                onClick("detail")
            }}>{centerCardInfo.name}</div>
            <div className={styles.centerCardIntroduction}>{centerCardInfo.simpleIntroduction}</div>
            <div className={styles.centerCardAddress}><TbMapPin /> {centerCardInfo.fullAddress}</div>
        </div>
    )
}

export default CenterCard
