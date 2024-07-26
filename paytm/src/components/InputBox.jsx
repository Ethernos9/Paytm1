import React, { useState } from 'react'


const InputBox = ({name,label,placeholder,onChange,value}) => {
  
  
    return <div>
    <div className="text-sm font-medium text-left py-2">
      {label}
    </div>
    <input name= {name} onChange={onChange} type="text" placeholder={placeholder} value = {value} className='w-full px-2 py-1 border rounded border-slate-200' />
  
  </div>
}

export default InputBox