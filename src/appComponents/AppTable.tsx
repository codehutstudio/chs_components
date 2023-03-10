import React, { useState } from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { KeyedValue } from '../AppTypes'
import { lightBorder } from '../styling';
import AppBox from './AppBox';
import { camelCase } from 'change-case';
import useParentSize from '../hooks/useParentSize';
import { Box } from '@mui/material';
export default function AppTable(p: {
    data: KeyedValue[];
    headers?: any[];
    pageSize?: number;
    rowId?: string;
    height?: number;
}) {
    const { height, ref } = useParentSize()
    const [rows, setRows] = useState(p.data)
    const [columns, setColumns] = useState(buildHeaders(p.headers || p.data[0]))
    const [pageSize, setPageSize] = useState(p.pageSize ? p.pageSize : 5)
    return (
        // <Box   sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box ref={ref} sx={{ width: '100%', height: p.height, flexGrow: 1 }}>
                {ref && <DataGrid
                    getRowId={(row => p.rowId ? row[p.rowId] : row.name)}
                    rows={rows}
                    columns={columns}
                    // pageSize={pageSize}
                    // rowsPerPageOptions={[pageSize]}
                    checkboxSelection
                />}</Box>

        // </Box>
    )
}
function buildHeaders(val: string[] | KeyedValue) {
    let config: GridColDef[] = []
    if (Array.isArray(val)) {
        config = val.map(buildColDef)
    } else {
        config = Object.keys(val).map(buildColDef)
    }
    return config
}

function buildColDef(val: string): GridColDef {
    const id = camelCase(val)
    let def = {
        field: val,
        headerName: val,
        width: 130,
        id
    }
    return def
}