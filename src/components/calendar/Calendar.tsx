import { useState } from 'react'
import styles from './Calendar.module.css'
import CalendarHeaderButton from './CalendarHeaderButton'
import dayjs from 'dayjs'
import { random } from 'nanoid'

interface dayObject {
    day: number,
    courseStart: number,
    courseEnd: number,
    isOtherMonth: boolean,
}

const today = dayjs()
const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토']
const Calendar = () => {
    const [dayState, setDayState] = useState(dayjs())
    const firstDay = dayState.startOf('month');
    const lastDay = dayState.endOf('month');
    const startingDay = firstDay.day();
    const lastingDay = lastDay.day();
    const totalDays = lastDay.date();
    let lastMonthDays = firstDay.subtract(1, 'month').daysInMonth();
    let dayList: dayObject[] = Array.from({ length: totalDays }, (_, index) => {
        return {
            day: index + 1,
            courseStart: index + 1 === 4 || index + 1 === totalDays ? Number(random(1)) : 0,
            courseEnd: index + 1 === totalDays ? Number(random(1)) : 0,
            isOtherMonth: false,
        }
    })
    if (lastingDay < 7) {
        Array.from({ length: 7 - lastingDay - 1 }, (_, index) => {
            dayList.push({
                day: index + 1,
                courseStart: 0,
                courseEnd: 0,
                isOtherMonth: true,
            })
        })
    }
    if (startingDay !== 0) {
        Array.from({ length: startingDay }, (_, index) => {
            dayList.unshift({
                day: lastMonthDays,
                courseStart: 0,
                courseEnd: 0,
                isOtherMonth: true,
            })
            lastMonthDays -= 1
        })
    }
    let nextMonthDays = 1;
    const onChangeDay = (day: number) => {
        setDayState(dayState.add(day, 'month'))
    }
    return (
        <div className={styles.calendarContainer}>
            <div className={styles.calendarHeader}>
                <div className={styles.calendarHeaderTitle}>
                    캘린더
                </div>
                <div className={styles.calendarHeaderButton}>
                    <CalendarHeaderButton text='<' onClick={() => onChangeDay(-1)} />
                    <CalendarHeaderButton text='>' onClick={() => onChangeDay(1)} />
                </div>
            </div>
            <div className={styles.calendarBody}>
                <div className={styles.calendarHeaderDate}>
                    {dayState.format('YYYY년 MM월')}
                </div>
                <div className={styles.calendarTitle}>
                    <div className={styles.calendarTitleDot}>수강 시작일</div>
                    <div className={styles.calendarTitleDotEnd}>수강 종료일</div>
                </div>
                <div className={styles.calendarBodyContent}>
                    <div className={styles.calendarDays}>
                        {dayOfWeek.map((item, index) => {
                            return <div key={index} className={styles.calendarDaysItem}>{item}</div>
                        })}
                    </div>
                    <div className={styles.calendarDates}>
                        {dayList.map((item, index) => {
                            if (item.day > totalDays) {
                                item.day = nextMonthDays++
                            }
                            const isToday = dayState === today
                            return (
                                <div
                                    key={index}
                                    className={`${styles.calendarDateItem} ${item.isOtherMonth ? styles.otherMonth : ''} ${styles.calendarBox} ${isToday ? styles.nowDate : ''}`}>
                                    <div>{item.day}</div>
                                    <div className={`${item.courseStart !== 0 ? styles.calendarCourse : styles.none} ${styles.start}`}>{item.courseStart}건</div>
                                    <div className={`${item.courseEnd !== 0 ? styles.calendarCourse : styles.none} ${styles.end}`}>{item.courseEnd}건</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calendar
