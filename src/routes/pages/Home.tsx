import { useEffect, useState } from 'react'
import MyButton from '../../components/common/button/MyButton'
import { getApi } from '../../lib/test'
import "./home.css"
const Home = () => {
    const [test, setTest] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const getTest = async () => {
        const test = await getApi();
        console.log("test : ", test)
        setTest(true)
        setIsLoading(true)
    }

    const isFlag = () => {
        setTest((pre) => !pre)
    }
    useEffect(() => {
        setIsLoading(false)
        getTest();
    }, [test])
    return (
        <div className='home'>
            <button onClick={isFlag}>asdfasdf</button>
            {isLoading ?? <div>로딩중입니다................</div>}
            {test && <MyButton text='토큰 검증' onSubmit={() => { }} />}
        </div>
    )
}

export default Home