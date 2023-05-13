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
    <div>
      <section className='home main-wrapper'>
        <div className='home content-wrapper'>
          <div className='intro'>
              <h1 className='home_name'>
                {HOME_STRING.FULLNAME_STRING}
              </h1>
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
        </div>
      </section>
      <ScrollIcon fill='#000000' className='scroll-down-icon' />
    </div>    
  )
}

export default Home