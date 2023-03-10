import React, { useState } from 'react'

export default function useInput({data}: {data: any}) {
    const [value, setValue] = useState(data)
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
  return {
    value,
    onChange
  }
}
