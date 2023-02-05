import React from 'react';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-scroll';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  return (
    <>
      <IconContext.Provider value={{ color: "red" }}>
        <nav className='navbar'>
          <ul className='list'>
            <Link id='item' to="Home" spy={true} smooth={true} offset={50} duration={500}>
              <AiIcons.AiOutlineHome />
              <span>Home</span>
            </Link>

            <Link id='item' to="Project" spy={true} smooth={true} offset={50} duration={500}>
              <AiIcons.AiTwotoneProject />
              <span>Project</span>
            </Link>

            <Link id='item' to="About" spy={true} smooth={true} offset={50} duration={500}>
              <AiIcons.AiOutlineSolution />
              <span>About</span>
            </Link>

            <Link id='item' to="Personal" spy={true} smooth={true} offset={50} duration={500}>
              <AiIcons.AiOutlineUser />
              <span>Personal</span>
            </Link>

            <Link id='item' to="Contact" spy={true} smooth={true} offset={50} duration={500}>
              <AiIcons.AiOutlineContacts />
              <span>Contact</span>
            </Link>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;