import { atom } from "recoil";
import { KeyedValue, NavigationLink } from "../AppTypes";

export const SidebarMode = atom<'full' | 'icon' | 'offscreen'>({
    key: 'SidebarOpen',
    default: 'full'
})
export const SidebarLinks = atom<NavigationLink[]>({
    key: 'SidebarLinks',
    default: [
        {name: 'Dashboard', to: '', icon: '',
            children: [
                {name: 'Database', to:'', icon: ''},
                {name: 'Store', to:'', icon: ''},
                {name: 'Users', to:'', icon: ''},
                {name: 'Orders', to:'', icon: ''},
            ]
        },
    ]
})
export const SidebarPinnedOpen = atom<Boolean>({
    key: 'Sidebar Pinned Open',
    default: false
})

export const ClientModel = atom<KeyedValue[]>({
    key: 'Client Model',
    default: [
        {name: 'Name'},
        {name: 'email', type: 'email'},
        {name: 'phone', type: 'tel'}
    ]
    
})
export const PrivateMenuLinks = atom<NavigationLink[]>({
    key: 'Private Menu Links',
    default: []
})