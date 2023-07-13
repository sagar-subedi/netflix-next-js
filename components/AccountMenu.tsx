interface AccountMenuProps {
    visible?: boolean
}

import useCurrentUser from '@/hooks/useCurrentUser';
import { signOut } from 'next-auth/react';
import React from 'react'

const AccountMenu: React.FC<AccountMenuProps> = ({visible}) => {
    const {data: user} = useCurrentUser();
    if(!visible) {
        return null;
    }
  return (
    <div className='flex-col gap-2 rounded-md py-2 px-3 text-black bg-white absolute right-2 top-10'>
      <p>{user?.name}</p>
      <hr />
      <div onClick={()=> signOut()} className=' border-2 hover:bg-red-300'>
        Sign Out of Netflix
      </div>
    </div>
  )
}

export default AccountMenu
