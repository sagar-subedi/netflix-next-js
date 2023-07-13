import React from 'react'

interface NavbarItemProps {
    label: String,
}

const NavbarItem : React.FC<NavbarItemProps> = ({label}) => {
  return (
    <div className='text-white'>
      {label}
    </div>
  )
}

export default NavbarItem
