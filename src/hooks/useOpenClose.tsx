import { useState } from "react";

export default function useOpenClose() {
    const [open, setOpen] = useState(false)
    const onOpen = () => { setOpen(true) }
    const onClose = () => { setOpen(false) }
    const toggle = () => { setOpen(!open) }
    return {
        open, onClose, onOpen, toggle
    }
}