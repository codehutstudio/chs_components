export const rowGenerator = () => {}
export const getDataType = (v: any) => {
    if(typeof v === 'string') return 'string'
    if(Array.isArray(v)) return 'array'
    if(typeof v === 'object') return 'object'
}