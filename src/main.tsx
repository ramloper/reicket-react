import { createRoot } from 'react-dom/client'
import './index.css'
import './reset.css'
import Router from './routes/routes.tsx'
import "./assets/fonts/Font.css"
/**
 * dayjs 설정
 */
import dayjs from 'dayjs';
import isLeapYear from 'dayjs/plugin/isLeapYear'; // 윤년 판단 플러그인
import 'dayjs/locale/ko'; // 한국어 가져오기

dayjs.extend(isLeapYear); // 플러그인 등록
dayjs.locale('ko'); // 언어 등록


createRoot(document.getElementById('root')!).render(
    <Router />
)
