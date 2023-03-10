import { Box, Divider, Snackbar } from '@mui/material';
import React, { useReducer, useState } from 'react'
import useOpenClose from '../hooks/useOpenClose';
import { lightBorder } from '../styling';
import { pasteFromClipbaord } from '../utils';
import AppBox from './AppBox';
import AppLabelButton from './AppLabelButton';
import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';
import AppScrollable from './AppScrollable';
import Papa from 'papaparse'
import AppDisplayData from './AppDisplayData';
import AppMenu from './AppMenu';
import AppValueEditor from './AppValueEditor';
import AppDialog from './AppDialog';
import AppKeysEditor from './AppKeysEditor';

export default function AppAddData(p: {
  onChange: (d: any) => void;
}) {
  const [data, setData] = useState('')
  const [parsedData, setParsedData] = useState([])
  const [headers, setHeaders] = useState([])
  const [rowId, setRowID] = useState('ID')

  const { enqueueSnackbar } = useSnackbar();
  const settingsMenu = useOpenClose()
  const rowIdSettings = useOpenClose()
  const headerSettings = useOpenClose()
  const feedBack = useOpenClose()
  const notify = (variant: VariantType = 'success') => (msg: string) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(msg, {
      variant,
      anchorOrigin: {
        horizontal: 'center',
        vertical: 'top'
      }
    });
  };
  const fromClipboard = async () => {
    const text = await pasteFromClipbaord()
    setData(text)
    notify()('Data Pasted')
  }
  const parseData = () => {
    const d = Papa.parse(data, { header: true })
    if (d) {
      const { data, meta: { fields } } = d as any
      setParsedData(data as any)
      setHeaders(fields)
      setData('')
    }
  }
  const clearData = () => {
    (data !== '' && setData(''));
    parsedData.length > 0 && setParsedData([])
  }
  const saveData = async () => {
    if (parsedData.length === 0) {

    }
    if (data !== '') {

    }
  }
  const updateHeaders = (updatedHeaders: any[]) => {
    headerSettings.onClose()
    debugger
    const headerUpdates = updatedHeaders.map((h, idx) => ({
      header: h,
      changed: h !== headers[idx],
      oldValue: headers[idx]
    }))
    const updatedData = parsedData.map((rec) => {
      const newRec = headerUpdates.reduce((map, h, index) => {
        if(h.changed) {
          map = {...map, [h.header]: rec[h.oldValue]}
        } else {
          map = {...map, [h.header]: rec[h.header]}
        }
        return map
      }, {} )
      return newRec
    })
    debugger
  }
  return (
    <AppBox stack cover>
      <AppBox flx sx={{ ...lightBorder('bottom') }}>
        <AppLabelButton icon="paste" label="Paste Data" onClick={fromClipboard} />
        <Divider orientation='vertical' flexItem />
        <AppLabelButton icon="clear" color="error" label="Delete Data" onClick={clearData} />
        <Divider orientation='vertical' flexItem />
        <AppLabelButton icon="start" color="success" label="Parse Data" disabled={data === ''} onClick={parseData} />
        <Divider orientation='vertical' flexItem />
        <AppBox grow />
        <Divider orientation='vertical' flexItem />
        <AppLabelButton icon="save" color="success" label="Save Data" disabled={parsedData.length === 0} onClick={saveData} />
        <Divider orientation='vertical' flexItem />
        <AppMenu
          open={settingsMenu.open}
          onClose={settingsMenu.onClose}
          menuButton={<AppLabelButton icon="settings" color="success" label="Settings" />}
          items={[
            { label: 'Set Row Id', icon: 'id', cb: rowIdSettings.onOpen },
            { label: 'Set Headers', icon: 'build', cb: headerSettings.onOpen },
            { label: 'Set Parser', icon: 'build', cb: () => { } },
          ]} />

      </AppBox>
      <AppBox coverY p={10}>
        <AppDialog title='Record Id Field' open={rowIdSettings.open} onClose={rowIdSettings.onClose}>
          <AppValueEditor value={rowId} name="Row ID" onChange={setRowID} onSave={rowIdSettings.onClose} />
        </AppDialog>
        <AppDialog title='Update Headers' open={headerSettings.open} onClose={headerSettings.onClose}>
          <AppBox sx={{width: '300px'}}>
            <AppKeysEditor keys={headers} onSave={updateHeaders} />
          </AppBox>
        </AppDialog>
        {data.length > 0 && (
          <AppScrollable>{data}</AppScrollable>
        )}
        {parsedData.length > 0 && (
          <AppScrollable>
            <AppDisplayData data={parsedData} headers={headers} rowId={rowId} />
          </AppScrollable>
        )}

      </AppBox>
    </AppBox>
  )
}

function reducer(state: any, action: any) {
  return state
}