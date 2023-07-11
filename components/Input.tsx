import React from 'react'

interface InputProps {
    id: string;
    onChange: any; 
    value: string;
    label: string;
    type?: string; 
}

const Input: React.FC<InputProps> = ({
  id,
  onChange,
  value,
  label,
  type
}
) => {
  return (
    <div className=' bg-red-600 mt-2'>
      <input
       placeholder=" " onChange={onChange} value={value}  id={id} type={type} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default Input
