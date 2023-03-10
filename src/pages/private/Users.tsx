import React, { useState } from 'react'
import AppAddData from '../../appComponents/AppAddData'
import AppBox from '../../appComponents/AppBox'
import AppBreadcrumbs from '../../appComponents/AppBreadcrumbs'
import AppDialog from '../../appComponents/AppDialog'
import AppNewData from '../../appComponents/AppNewData'
import AppNewRecord from '../../appComponents/AppNewRecord'
import AppObjectBuilder from '../../appComponents/AppObjectBuilder'
import AppParser from '../../appComponents/AppParser'
import AppParser2 from '../../appComponents/AppParser2'
import { ChangeAction, KeyedValue } from '../../AppTypes'
import useOpenClose from '../../hooks/useOpenClose'
import AppButton from '../../shared/AppButton'
import { lightBorder } from '../../styling'

export default function Users() {
  const newUser = useOpenClose()
  const [users, setUsers] = useState([])
  const addNewUser = (obj: ChangeAction) => {
    debugger
  }
  const onDataAdded = ({ action, type, value }: { action: string; type: string; value: any }) => {
    newUser.onClose()
  }
  return (
    <AppBox cover stack>
      <AppBox className='userContent' cover>
        <AppAddData onChange={addNewUser} />
      </AppBox>
      <AppDialog showActions={false} open={newUser.open} onClose={newUser.onClose} title="New User">
        {/* <AppNewData cb={onDataAdded}/> */}
      </AppDialog>
    </AppBox>
  )
}
