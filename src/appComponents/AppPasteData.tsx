import { IconButton, TextField } from '@mui/material'
import React, { useRef, useState } from 'react'
import AppButton from '../shared/AppButton'
import { pasteFromClipbaord } from '../utils'
import AppBox from './AppBox'
import AppButtonGroup from './AppButtonGroup'


import Papa from 'papaparse'
import useOpenClose from '../hooks/useOpenClose'
import AppDialog from './AppDialog'
import AppMenu from './AppMenu'
import Icons from '../shared/Icons'
import AppValueEditor from './AppValueEditor'
import AppKeyEditor from './AppKeyEditor'
import AppTable from './AppTable'

export default function AppPastData(p: {
  cb: (p: any) => void
}) {
  const [value, setValue] = useState('')
  const dataTypes = useRef(['text', 'json', 'excel'])
  const [dataType, setDataType] = useState('text')
  const [headers, setHeaders] = useState<string[]>([])
  const [parsedData, setParsedData] = useState<any[]>([])
  const settings = useOpenClose()
  const parserSettings = useOpenClose()
  const headerSettings = useOpenClose()
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const onSave = () => {
    p.cb({ action: 'dataPasted', type: 'text', data: value })
  }

  const fromClipboard = async () => {
    const t = await pasteFromClipbaord()
    setValue(t)
  }
  const clear = () => {
    setValue('')
  }
  const parseData = () => {
    const d = Papa.parse(value, { header: true })
    if (d) {
      setHeaders(Object.keys(d.data[0] as string))
      setParsedData(d.data)
      setValue('')
    }
  }
  return (
    <AppBox stack cover>
      <AppBox spread sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <AppBox>
          <AppButton iconOnly icon="save" props={{ color: 'success', disabled: value === '' }} cb={onSave} />
          <AppButton tooltip='Paste from Clipboard' iconOnly icon="paste" props={{ color: 'primary' }} cb={fromClipboard} />
          <AppButton iconOnly icon="clear" props={{ color: 'error', disabled: value === '' }} cb={clear} />
          <AppButton iconOnly icon="start" props={{ color: 'success', disabled: value === '' }} cb={parseData} />
        </AppBox>
        <AppBox>
          <AppMenu
            open={settings.open}
            onClose={settings.onClose}
            menuButton={
              <IconButton><Icons type="build" /></IconButton>
            }
            items={[
              { label: 'Parser', cb: parserSettings.onOpen },
              { label: 'Headers', cb: headerSettings.onOpen }
            ]}
          />
        </AppBox>
      </AppBox>
      <AppBox>
        <TextField label="Paste Data" variant='filled' fullWidth value={value} onChange={onChange} />
      </AppBox>
      {value !== '' && (
        <AppBox>{value}</AppBox>
      )}
      {parsedData.length > 0 && (
        <AppBox cover>
          <AppTable data={parsedData} rowId="Opportunity Name" />
        </AppBox>
      )}
      <AppDialog title='Settings' open={settings.open} onClose={settings.onClose}>
        settings
      </AppDialog>
      <AppDialog title='Paser Settings' open={parserSettings.open} onClose={parserSettings.onClose}>
        Parser settings
      </AppDialog>
      <AppDialog title='Header Settings' open={headerSettings.open} onClose={headerSettings.onClose}>
        <AppKeyEditor data={headers} onChange={setHeaders} />
      </AppDialog>
    </AppBox>
  )
}
