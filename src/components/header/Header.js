import React from 'react';
import "./Header.css";
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import FlashOnSharpIcon from '@material-ui/icons/FlashOnSharp';
import LiveTvSharpIcon from '@material-ui/icons/LiveTvSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import PersonOutlineSharpIcon from '@material-ui/icons/PersonOutlineSharp';
import VideoLibrarySharpIcon from '@material-ui/icons/VideoLibrarySharp';

function Header() {
   return (
      <div className="header">
         <div className="header__icons">
            <div className="header__icon header__icon--active">
            <HomeSharpIcon/>
            <p>Home</p>
            </div>
            <div className="header__icon">
            <FlashOnSharpIcon/>
            <p>Trending</p>
            </div>
            <div className="header__icon">
            <LiveTvSharpIcon/>
            <p>Verified</p>
            </div>
            <div className="header__icon">
            <VideoLibrarySharpIcon/>
            <p>Collections</p>
            </div>
            <div className="header__icon">
            <SearchSharpIcon/>
            <p>Search</p>
            </div>
            <div className="header__icon">
            <PersonOutlineSharpIcon/>
            <p>Account</p>
            </div>


          
         
           
          
          
         
          
         </div>
         <img src="https://download.logo.wine/logo/Hulu/Hulu-Logo.wine.png" alt="hulu logo" />
      </div>
   )
}

export default Header
