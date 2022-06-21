import React from 'react'
import { NavLink } from 'react-router-dom'
import { GiStarsStack } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";


const Navbar = () => {
  return (
    <nav>
      <div>
        <a href="https://github.com"><GoMarkGithub/></a>
      </div>
    <div>
    <NavLink to={'/'}>
        Popular Users
    </NavLink>

    <NavLink to={'/search'}>
        Explore Users
    </NavLink>
    </div>
</nav>
  )
}

export default Navbar