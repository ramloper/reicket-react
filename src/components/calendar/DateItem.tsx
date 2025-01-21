import { dayObject } from '../../types/Calendar'
import styles from './DateItem.module.css'
const DateItem = ({ day, courseStart, courseEnd, isOtherMonth, isToday }: dayObject) => {
    return (
        <div
            className={`${styles.calendarDateItem} ${isOtherMonth ? styles.otherMonth : ''} ${styles.calendarBox} ${isToday ? styles.nowDate : ''}`}>
            <div>{day}</div>
            <div className={`${courseStart !== 0 ? styles.calendarCourse : styles.none} ${styles.start}`}>{courseStart}건</div>
            <div className={`${courseEnd !== 0 ? styles.calendarCourse : styles.none} ${styles.end}`}>{courseEnd}건</div>
        </div>
    )
}

export default DateItem
