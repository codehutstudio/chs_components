import React, { useEffect, useRef, useState } from 'react'

export default function useParentSize() {
  const [height, setHeight] = useState<null | string>(null)
  const ref = useRef()
  useEffect(() => {
    if(ref && ref.current) {
      const val = `${(ref.current as any).clientHeight}px`
        setHeight(val)
    }
  }, [ref])
  return {
    ref,
    height
  }
}
