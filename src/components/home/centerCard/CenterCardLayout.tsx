import { useEffect, useState } from "react"
import CenterCard from "./CenterCard"
import styles from "./CenterCardLayout.module.css"
import { CenterCardType } from "../../../types/centerCard"
import { publicApi } from "../../../lib/sendApi"
const CenterCardLayout = () => {
    const [centerCardData, setCenterCardData] = useState<CenterCardType[]>([]);
    useEffect(() => {
        publicApi.get("/center/card/info/list")
            .then((res) => {
                setCenterCardData(res.data.data)
            })
    }, [])
    return (
        <div className={styles.centerCardLayout}>
            {centerCardData.map((centerCard) => (
                <CenterCard key={centerCard.centerId} centerCard={centerCard} />
            ))}
        </div>
    )
}

export default CenterCardLayout
