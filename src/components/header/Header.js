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

           <HomeSharpIcon/>
           <FlashOnSharpIcon/>
           <LiveTvSharpIcon/>
           <SearchSharpIcon/>
           <VideoLibrarySharpIcon/>
           <SearchSharpIcon/>
           <PersonOutlineSharpIcon/>
          
         </div>
         <img src="https://allears.net/wp-content/uploads/2020/12/Hulu-Logo.png" alt="logo" />
      </div>
   )
}

export default Header
