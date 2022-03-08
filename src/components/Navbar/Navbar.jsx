import React, {useState} from 'react'

import{GiHamburgerMenu} from 'react-icons/gi';
import{ImCross} from 'react-icons/im';
import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo1} alt='app logo'/>
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href='#home'>Home</a></li>
        <li className='p__opensans'><a href='#fitur'>Fitur</a></li>
        <li className='p__opensans'><a href='#harga'>Harga</a></li>
        <li className='p__opensans'><a href='#desain'>Desain</a></li>
      </ul>
      <div className='app__navbar-burger'>
        <GiHamburgerMenu color='#adc5b7' fontSize={27} onClick={() => setToggleMenu(true)}/>
        
        {toggleMenu&&(
        <div className='app__navbar-burger_overlay flex__center slide-bottom'>
          <ImCross color='#adc5b7' fontSize={24} className='overlay__close' onClick={() => setToggleMenu(false)} />
          <ul className='app__navbar-burger_links'>
            <li className='p__opensans'><a href='#home'>Home</a></li>
            <li className='p__opensans'><a href='#fitur'>Fitur</a></li>
            <li className='p__opensans'><a href='#harga'>Harga</a></li>
            <li className='p__opensans'><a href='#desain'>Desain</a></li>
          </ul>
        </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar

