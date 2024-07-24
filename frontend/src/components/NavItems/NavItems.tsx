import React from 'react'

type Props = {
  navigations : {name: string, href: string}[]
}

function NavItems({navigations}: Props) {
  return (
    <ul className="navbar-nav mr-auto">
      {navigations.map(({name, href}) => (
        <li className="nav-item" key={name}>
          <a className="nav-link" href={href}>{name}</a>
        </li>
      ))}
    </ul>
  )
}

export default NavItems