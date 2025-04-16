import React from 'react'
import './Header.css'
import searchicon from '../.././assets/images/searchicon.png'
import homeicon from '../.././assets/images/homeicon.png'
import friendsicon from '../.././assets/images/friendsicon.png'
import groupicon from '../.././assets/images/groupicon.png'
import menuicon from '../.././assets/images/menuicon.png'
import messengericon from '../.././assets/images/messengericon.png'
import bellicon from '../.././assets/images/bellicon.png'
export default function Header() {
    return (
        <div className='homepage'>
            <div className='header'>
                <div className='firstheader'>
                    <img src='https://www.facebook.com/images/fb_icon_325x325.png' alt='Facebook Logo' className='logo' style={{ width: '35px' }} />
                    <div className='search'>
                        <img src={searchicon} alt='searchicon' style={{ width: '20px' }} />
                        <input type='search' placeholder='Search Facebook' />
                    </div>
                </div>
                <div className='middleheader'>
                    <div className='pageimg'>    <img src={homeicon} alt='homeicon' /></div>
                    <div className='pageimg'>    <img src={friendsicon} alt='friendsicon' /></div>
                    <div className='pageimg'>  <img src={groupicon} alt='groupicon' /></div>
                </div>
                <div className='thirdheader'>
                    <h6 className='friends'>Find friends</h6>
                    <img src={menuicon} alt='menuicon' />
                    <img src={messengericon} alt='messengericon' />
                    <img src={bellicon} alt='bellicon' />
                </div>
            </div>
        </div>
    )
}
