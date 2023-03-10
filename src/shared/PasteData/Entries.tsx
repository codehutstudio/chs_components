import { Box, Divider, IconButton, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import { KeyedValue } from '../../AppTypes'
import useOpenClose from '../../hooks/useOpenClose'
import { centerAll, flex, flexStack, lightBorder } from '../../styling'
import AppButton from '../AppButton'
import AppModal from '../AppModal'
import Icons from '../Icons'
import KeyValueEditor from '../KeyValueEditor'
import ObjectEditor from '../ObjectEditor'

export default function Entries({ data, clear }: { data: KeyedValue[]; clear: () => void }) {
    return (
        <Box sx={{ ...flexStack, overFlow: 'scroll', }}>
            <Box sx={{ display: 'flex', ...lightBorder(), px:1 }}>
                <Box sx={{flexGrow: 1, display: 'flex', alignItems: 'center'}}>

                <Typography variant='subtitle2' sx={{ mr: 1 }}>Entries:</Typography>
                <Typography>{data.length}</Typography>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Divider orientation='vertical' flexItem />
                    <IconButton color="success" size="small">
                        <Icons type="save"/>
                    </IconButton>
                    <Divider orientation='vertical' flexItem />
                    <IconButton onClick={clear} color="error" size="small">
                        <Icons type="delete"/>
                    </IconButton>
                </Box>
            </Box>
            {data.map((entry, idx) => <Entry key={idx} data={entry} />)}
        </Box>
    )
}
function Entry({ data }: { data: KeyedValue }) {
    const [obj, setObj] = useState(data)
    const [edit, setEdit] = useState(false)
    const [editObj, setEditObj] = useState<{ objKey: string; value: any }>({objKey: '', value: ''})
    const editModalCtrl = useOpenClose()
    const editKey = (key: string) => {
        const { [key]: selectedValue, ...rest } = obj
        setEditObj({ objKey: key, value: selectedValue })
        editModalCtrl.onOpen()
    }
    const editObject = (key: string, value: any) => {
        setEditObj({ objKey: key, value})
        editModalCtrl.onOpen()

    }
    const onObjEdit = (p: any) => {
        const {[editObj.objKey]: selectedData, ...rest } = obj
        setObj({...rest, ...p})
        editModalCtrl.onClose()
    }

    const remove = (key:string) => () => {
        const {[key]: removed, ...rest} = obj
        setObj(rest)
    }
    return (
        <Box sx={{ ...flexStack, ...lightBorder(['left', 'right', 'bottom']), mb: 2, p: 2 }}>
            {Object.entries(obj).map(([key, value], idx) => (
                <Box sx={{ ...lightBorder('bottom'), ...flex }}>
                    <Box sx={{ flexGrow: 1, ...flex, alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', }}>
                            <Box sx={{ flexGrow: 1, ...flex, alignItems: 'center' }}>
                                <Typography variant='subtitle2' sx={{ mr: 2 }}>Key:</Typography>
                                <Typography variant='body2' sx={{ mr: 2 }}>{key}</Typography>
                                <IconButton onClick={() => editKey(key)}><Icons sx={{ fontSize: '1rem' }} type="edit" /></IconButton>
                                <Divider orientation='vertical' flexItem sx={{ mr: 2 }} />
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <Box sx={{ flexGrow: 1, ...flex, alignItems: 'center' }}>
                                <Typography variant='subtitle2' sx={{ mr: 2 }}>Value:</Typography>
                                <Typography variant='body2'>{value}</Typography>
                                <IconButton><Icons sx={{ fontSize: '1rem' }} type="edit" /></IconButton>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ height: '100%', ...flex, ...centerAll }}>
                        <Divider orientation='vertical' flexItem sx={{ mx: 2 }} />
                        <IconButton onClick={() => editObject(key, value)}><Icons color="primary" sx={{ fontSize: '1rem' }} type="edit" /></IconButton>
                        <Divider orientation='vertical' flexItem sx={{ mx: 2 }} />
                        <IconButton onClick={remove(key)}><Icons color="error" sx={{ fontSize: '1rem' }} type="delete" /></IconButton>
                    </Box>
                </Box>
            ))}
            <AppModal open={editModalCtrl.open} onClose={editModalCtrl.onClose}>
                <KeyValueEditor {...{...editObj, cb: onObjEdit, cancel: editModalCtrl}} />
            </AppModal>
        </Box>
    )
}