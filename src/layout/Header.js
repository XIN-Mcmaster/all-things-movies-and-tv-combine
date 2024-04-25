import React, { useState ,useEffect } from 'react'
import { Link } from "gatsby"
import MenuClose from '../components/svgs/menuclose'
import MenuOpen from '../components/svgs/menuopen'
import logo from '../../ontario-design-system/logos/ontario-logo--desktop.svg'


const Header=() =>{
  const [currentPath, setCurrentPath] = useState('/'); // Initialize with the default path

  useEffect(() => {
    // Update the current path when the component mounts
    setCurrentPath(window.location.pathname);
    
  }, []);
  const [click, setClick] = useState(false)
  
  const handleClick = () => {
    return setClick(!click)
  }

  return (
    <>
      <div className="documentation-only--application">
        <div className="ontario-header__container">
          <header className="ontario-header" id="ontario-header">
            <div className="ontario-row">
              <div className="ontario-header__logo-container ontario-columns ontario-small-6">
                <a href="https://www.ontario.ca/page/government-ontario">
                <img src={logo} className="ontario-show-for-medium" alt="Government of Ontario" />
                <img src={logo} className="ontario-show-for-small-only" alt="Government of Ontario"  style={{width:'100px'}}/>
                </a>
              </div>
              <div className="ontario-columns ontario-small-6 ontario-application-header__lang-toggle" >
                    <a href='#' className='ontario-header__language-toggler ontario-header-button ontario-header-button--without-outline'>
                        Français
                    </a>
                </div>
            </div>
          </header>
          <div className='ontario-application-subheader-menu__container'>
            <section className='ontario-application-subheader'>
              <div className='ontario-row'>
                <div className='ontario-columns ontario-small-12 ontario-application-subheader__container'>
                  <p className='ontario-application-subheader__heading'>
                   <Link to="/" onClick={() => setClick(false)}>All Things Movies And TV</Link>
                  </p>

                  <div className='ontario-application-subheader__menu-container'>
                    <ul className='ontario-application-subheader__menu ontario-hide-for-small'>
                      <li><Link to=""></Link></li>
                      <li><Link to=""></Link></li>
                      <li><Link to=""></Link></li>
                    </ul>
                    <button className='ontario-header__menu-toggler ontario-header-button ontario-header-button--with-outline ontario-show-for-small-only' 
                    id='ontario-header-menu-toggler' aria-controls='ontario-navigation' aria-label='Show navigation menu' type='button' onClick={handleClick}>
                      {click? <MenuClose fill={'white'}/>:<MenuOpen fill={'white'}/>}
                      <span>Menu</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <nav className="ontario-navigation" id="ontario-navigation">
              <div className="ontario-navigation__container">
                <ul>
                  <li><Link to=""></Link></li>
                  <li><Link to=""></Link></li>
                  <li><Link to=""></Link></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;