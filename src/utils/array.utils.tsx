export const insertAt = (val: any, into: any[], at: number) => {
    return [...into.slice(0, at), val, ...into.slice(at)]
}
export const replaceAt = (val: any, into: any[], at: number) => {
    const removed = [...into.slice(0, at), ...into.slice(at + 1)]
    return insertAt(val, removed, at)
}

export const arrayDelete = (idx: number, arr: any[]) =>  {
    const update =  [...arr.slice(0, idx), ...arr.slice(idx + 1)]
    return update
}

export const ArrayProxy = (val: any[]) => new Proxy(val, {
    get: function(target, property) {
        debugger
    }
})

export function FnArray(v: any[])  {

}