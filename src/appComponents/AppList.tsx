import { Reorder } from "framer-motion"
import { createElement, useEffect, useState } from "react"
import { KeyedValue } from "../AppTypes"

export default function AppList(p: { data: any[], render?: (...p: any) => any, renderProps?: KeyedValue }) {
    const [items, setItems] = useState([...p.data])
    useEffect(() => {
        if (p.data.length !== items.length) {
            setItems([...p.data])
        }
    }, [p.data])

    return (
        <Reorder.Group values={items} onReorder={setItems}>
            {items.map((item, index) => (
                <Reorder.Item key={item} value={item}>
                    {p.render ? createElement(p.render, { data: item, index, ...p.renderProps }) : item}
                </Reorder.Item>
            ))}
        </Reorder.Group>
    )
}