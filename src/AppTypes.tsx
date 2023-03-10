export interface RouteFileConfig {
    default: (p?: any) => any
}
export interface KeyedValue {
    [key: string]: any
}

export interface NavigationLink {
    name: string;
    to: string;
    icon?: string;
    children?: NavigationLink[]
}
export interface SidebarLink extends NavigationLink {

}

export interface AppInputConfig {
    name: string;
    label?: string;
    type?: string;
    value?: any;
}
export interface OnChangeHandler {
    (val: any): void
}
export interface AppParserConfig {
    parser: RegExp | null;
    backups: string[]
}
export interface ChangeAction {
    action: string;
    type?: string;
    value: string;
}