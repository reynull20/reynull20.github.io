import React from 'react'
import './SideBar.css'

// ========= Img =========
import AboutIcon from '../../res/icon/about.svg'
import HomeIcon from '../../res/icon/home.svg'
import ContactIcon from '../../res/icon/contact.svg'
import Logo from '../../res/img/space-force-logo.webp'

const SideBar = () => {
  return (
    // <aside className='aside'>
    <div className='aside'>
        {/* <a href="#home" className="nav_logo">
            <img src={Logo} alt="" />    
        </a> */}

        <nav className="flex-column nav">
            <div className="nav_menu">
                <ul className="nav_list">
                    <li className="nav_item">
                        <a href="#home" className="nav_link">
                            <img src={HomeIcon} alt="" className="home-icon" />
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#about" className="nav_link">
                            <img src={AboutIcon} alt="" className="about-cion" />
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#contact" className="nav_link">
                            <img src={ContactIcon} alt="" className="contact-icon" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav> 

        {/* <div className="nav_footer">
            <span className="copyright">&copy; 2023 - 2024</span>
        </div> */}
    </div>
    // </aside>
  )
}

export default SideBar