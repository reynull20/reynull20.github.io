import React from 'react'
import './ScrollDown.css'
import ArrowDown from '../../res/icon/arrow-down-thin.svg'
import ScrollIcon from './ScrollIcon'

const ScrollDown = () => {
  return (
    <div>
        <ScrollIcon fill="#000000" className='scroll-down-icon'/>
        {/* <img className='scroll-icon' src={ArrowDown} alt="" />
        <img className='scroll-icon' src={ArrowDown} alt="" /> */}
    </div>
  )
}

export default ScrollDown