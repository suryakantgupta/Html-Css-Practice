import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getNews} from '../redux/reduxsaga/action'

function ReduxSagaTest() {

    const dispatch = useDispatch()
    const news = useSelector(state => state.news)
console.log(news)

    return (
        <div>
            <button onClick={()=>dispatch(getNews())} >Click</button>
        </div>
    )
}

export default ReduxSagaTest
