export const pasteFromClipbaord = async () => {
    const text = await navigator.clipboard.readText()
    return text
}