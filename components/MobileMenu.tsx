import React from 'react'

interface MobileMenuProps  {
    visible?: boolean;

}

const MobileMenu: React.FC<MobileMenuProps> = ({visible}) => {
  return (
    <div className={`${!visible?"hidden ":" "}bg-white
     relative
      top-10 right-10
        px-2 py-2
        text-center
         rounded-md
         `}>
      <p>Home</p>
      <p>Series</p>
      <p>Films</p>
      <p>New and Popular</p>
      <p>My List</p>
      <p>Browse by Language</p>
    </div>
  )
}

export default MobileMenu
