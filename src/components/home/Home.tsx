import React from 'react'
import './Home.css'
import ScrollDown from './ScrollDown'
import ScrollIcon from './ScrollIcon'

// Asset import
// import BackgroundVid from '../../res/video/nebula-v1.mp4''
import AvatarIcon from '../../res/icon/avatar.svg'
import HOME_STRING from '../../res/string/home'
// import Phone_3D from '../../res/img/Vectary texture.png'
import Phone_3D from '../../res/img/Vectary texture - Alt.png'

const Home = () => {
  return (
    <div className='home-container'>
        <div className='header-container'>
          <div className='profile-image-container'>
            <img src={AvatarIcon} alt="Profile Icon" className="home_avatar" />
          </div>
        </div>
        <section className="tab home container" id="home">
            <div className="intro section-item">
                <h1 className="home_name">{HOME_STRING.FULLNAME_STRING}</h1>
                <h5 className='home_subtext'>
                  <span>
                  Front-End Developer & Game Programmer
                  </span>
                </h5>
                <span className="home_bio">
                    {HOME_STRING.BIO_STRING}
                </span>
            </div>
            <div className='intro-image section-item'>
              <img src={Phone_3D} alt="3D Phone" />
            </div>
        </section>
        {/* <ScrollDown/> */}
        <ScrollIcon fill='#000000' className='scroll-down-icon' />
    </div>
  )
}

export default Home