export const handleEvent = (cb: (d: any) => void) => (e: any) => {
     cb(e.target.value)
}