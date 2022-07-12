import { Avatar, Dropdown, Navbar, Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar
      fluid={true}
      rounded={true}
    >
      <Link to='/'>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite
        </span>
      </Link>
      <div className="flex md:order-2">
        <Link to='/cart'>
          <Button className='relative'>Cart <span className='absolute text-rose-600 ml-[35px] mb-[20px] font-bold'>3</span></Button>

        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          href="/navbars"
          active={true}
        >
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          About
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          Services
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          Pricing
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;