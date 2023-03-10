import React from 'react'
import { ChangeAction } from '../../AppTypes';
import AppBox from '../AppBox';
import AppPasteData from '../AppPasteData';
import AppTabs from '../AppTabs';

export default function AppNewRecord(p: {
    cb: (p: ChangeAction) => void;
}) {
  return (
    <AppBox stack>
        <AppTabs
            tabs={[{ label: 'Paste Data', icon: 'paste'}, {label: 'Build Data', icon: 'build'}]}>
            <AppBox>
                <AppPasteData cb={p.cb}/>
            </AppBox>
            <AppBox>
                Build Data
            </AppBox>
        </AppTabs>
    </AppBox>
  )
}
