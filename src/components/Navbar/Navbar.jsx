import React from 'react'
import { HashLink } from 'react-router-hash-link'
import logo from '../../assets/logo.svg'
import Button from '../shared/Buttons/Button'
import MobileNav from './MobileNav'
import './Navbar.css'

const Navbar = () => {
    const openMobileNav = (e) => {
        e?.preventDefault()
        if (
            document
                .getElementById('hamburger__mobile__toogle_me')
                .classList.contains('active')
        ) {
            document
                .getElementById('hamburger__mobile__toogle_me')
                .classList.remove('active')
            document
                .getElementById('menu__icons__mobile_navigation')
                .classList.remove('active')
            console.log('ARROW')
        } else {
            document
                .getElementById('hamburger__mobile__toogle_me')
                .classList.add('active')
            document
                .getElementById('menu__icons__mobile_navigation')
                .classList.add('active')
            console.log('ARROW CANCEL')
        }
    }

    const closeMobileNav = () => {
        if (
            document
                .getElementById('hamburger__mobile__toogle_me')
                .classList.contains('active')
        ) {
            document
                .getElementById('hamburger__mobile__toogle_me')
                .classList.remove('active')
            document
                .getElementById('menu__icons__mobile_navigation')
                .classList.remove('active')
            console.log('ARROW')
        }
    }

    return (
        <>
            <nav className='navbar w-full h-20 flex items-center justify-between px-5 py-3'>
                {/* left */}
                <div className='left'>
                    <img src={logo} alt='PWC' className='w-[80%] h-[45px]' />
                </div>
                {/* center */}
                <div className='center flex items-center gap-x-6 screen8:hidden'>
                    <TopLink title={'About'} link={'#ABOUT'} />
                    <TopLink title={'Events'} link={'events'} />
                    <TopLink title={'Schedule'} link={'#SCHEDULE'} />
                    <TopLink title={'Speakers'} link={'speakers'} />
                    <TopLink title={'Prizes'} link={'prizes'} />
                    <TopLink title={'Sponsors'} link={'#SPONSORS'} />
                    <TopLink title={'Team'} link={'team'} />
                    <TopLink title={'FAQs'} link={'#FAQ'} />
                </div>
                {/* right */}
                <div className='right screen8:hidden'>
                    <Button
                        data={{ hashLink: true, link: 'CONTACT' }}
                        text={'Contact'}
                        navbar
                    />
                </div>
                <div
                    id='hamburger__mobile__toogle_me'
                    className='hamburger toggle flex-col hidden screen8:flex cursor-pointer'
                    onClick={(e) => openMobileNav(e)}
                >
                    <span className='bar w-8 h-1 my-1 mx-auto bg-[#111111] rounded-sm transition ease-in-out delay-100'></span>
                    <span className='bar w-8 h-1 my-1 mx-auto bg-[#111111] rounded-sm transition ease-in-out delay-100'></span>
                    <span className='bar w-8 h-1 my-1 mx-auto bg-[#111111] rounded-sm transition ease-in-out delay-100'></span>
                </div>
            </nav>
            <MobileNav closeMobileNav={closeMobileNav} />
        </>
    )
}

export default Navbar

const TopLink = ({ title, link }) => {
    return (
        <HashLink
            to={`/${link}`}
            className='text-xl text-white font-medium cursor-pointer'
        >
            {title}
        </HashLink>
    )
}
