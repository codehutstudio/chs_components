import { atom } from "recoil"
import { KeyedValue } from "../AppTypes"

 const SiteStore = atom<KeyedValue>({
    key: 'SiteStore',
    default: {}
 })

 export default SiteStore