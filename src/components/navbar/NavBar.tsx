import React, { useEffect } from 'react'
import { useState } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import './NavBar.css'
import { log } from 'console'

// Asset Import
import Logo from '../../res/img/space-force-logo.webp'
import GithubIcon from '../../res/img/icon/github-142-svgrepo-com.svg'
import DiscordIcon from '../../res/img/icon/discord-svgrepo-com.svg'
import EmailIcon from '../../res/img/icon/email-1572-svgrepo-com.svg'

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (val:string) => {
        setActiveLink(val);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
            <Navbar.Brand href="#home">
                <img src={Logo} className='logo' alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" >
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                <a href="#"><img src={GithubIcon} width={25} alt="" /></a>
                <a href="#"><img src={DiscordIcon} width={25} alt="" /></a>
                <a href="#"><img src={EmailIcon} width={25} alt="" /></a>
                </div>
                <button className="vvd" onClick={() => console.log('connect')}>
                    <span>Let's Connect</span>
                </button>
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavBar