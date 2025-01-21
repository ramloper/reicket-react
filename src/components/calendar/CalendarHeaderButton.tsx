import styles from './CalendarHeaderButton.module.css'

const CalendarHeaderButton = ({ text, onClick }: { text: string, onClick: () => void }) => {
    return (
        <button className={styles.btn} onClick={onClick}>{text}</button>
    )
}

export default CalendarHeaderButton
