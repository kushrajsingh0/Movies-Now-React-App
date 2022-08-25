import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';
import bars from '../../resources/bars.png';
import close from '../../resources/close.png';
import { useEffect, useRef, useState } from 'react';
function NavBar(){
  const [isLoggedIn, setIsLoggedIn] = useState(false);
   function logoutHandler(){
    localStorage.clear();
     setIsLoggedIn(false);
     alert("logged out successfully")
     window.location.href = ".";
   }
    
    
      useEffect(()=>{
        if(localStorage.getItem("isLoggedIn")==="1")
        setIsLoggedIn(true);
      },[]);
    const navHidden = useRef(null);
    const [isNavVisible, setNavIsVisible] = useState(false);
    function navBarOpener(){
      if(navHidden.current.style.display === "" || navHidden.current.style.display === "none")
        navHidden.current.style.display = "block";
      else
        navHidden.current.style.display = "none";
      setNavIsVisible(!isNavVisible);
    }
    return (
        <header className={classes.header}>
          <div className={classes.logo}>
            <Link to='/'>MoviesNow</Link>
            <img src={isNavVisible?close:bars} alt="bars" onClick={navBarOpener}/>
          </div>
          <nav className={classes.nav} ref={navHidden}>
              <ul>
                  <li>
                    <Link to='/'>Movies</Link>
                  </li>
                  <li>
                      <Link to='/tv-shows'>TV Shows</Link>
                  </li>
                  {isLoggedIn && (
                  <li>
                    <Link to='/playlist'>Playlist</Link>
                  </li>
                  ) }
                  {
                    !isLoggedIn && (<li>
                         <Link to='/signup'>Signup</Link>
                       </li>)
                  }
                  {
                    !isLoggedIn && (<li>
                         <Link to='/login'>Login</Link>
                       </li>)
                  }
                  {
                    isLoggedIn && (<li><button onClick={logoutHandler} className={classes.logoutBtn}>Logout</button></li>)
                  }
                    
                  
              </ul>
          </nav>
        </header>
      );
}

export default NavBar;