export const flex  = { display: 'flex'}
export const centerAll = { alignItems: 'center', justifyContent: 'center'}
export const flexCenterY = {...flex, alignItems: 'center'}
export const stack = { flexDirection: 'column'}
export const flexStack = {...flex, ...stack}
export const coverX = { width: '100%'}
export const coverY = { height: '100%'}
export const cover = {...coverY, ...coverX}
export const coverFlex = { ...flex, ...coverX, ...coverY}
export const coverFlexStack = { ...flex, ...coverX, ...coverY, ...stack}


const grayBorderColor = 'rgba(0,0,0,0.12)'
export const lightBorder = (type: 'full' | 'left' | 'right' | 'bottom' | 'top' | string[] = 'full' ) => ({
    ...( (type === 'full' || type.includes('full')) && {border: `1px solid ${grayBorderColor}`}),
    ...( (type === 'left' || type.includes('left')) && {borderLeft: `1px solid ${grayBorderColor}`}),
    ...( (type === 'right' || type.includes('right')) && {borderRight: `1px solid ${grayBorderColor}`}),
    ...( (type === 'bottom' || type.includes('bottom')) && {borderBottom: `1px solid ${grayBorderColor}`}),
    ...( (type === 'top' || type.includes('top')) && {borderTop: `1px solid ${grayBorderColor}`}),
})
export const childrenSpace = (margin: string) => (({ '& *': { paddingL: margin}}))