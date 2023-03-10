import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { KeyedValue, RouteFileConfig } from './AppTypes'
import { PrivateMenuLinks } from './store'
const publicRoutes = import.meta.glob('./pages/public/*.*', {eager: true})
const privateRoutes = import.meta.glob('./pages/private/*.*', {eager: true})
export default function AppRouting() {
    const setAppPrivateMenuLinks = useSetRecoilState(PrivateMenuLinks)
    const router = buildRoute(privateRoutes, true)
    useEffect(() => {
        if(privateRoutes) {
            setAppPrivateMenuLinks(buildMenuLinks(privateRoutes) as any)
        }
    }, [privateRoutes]) 
  return (
    <RouterProvider router={router} />
  )
}
interface RouteMap {
    Home: () => any;
    Index: () => any;
    [key: string]: any;
}
function buildRoute(routes: any, accessControlled: boolean = false) {
    const rcs = buildRoutes(Object.entries(routes).reduce(buildRouteConfig as any, {}), accessControlled)
    return createBrowserRouter([...rcs])
}

function buildRouteConfig(map: RouteMap, [path ,module]: [string, RouteFileConfig]): RouteMap {
    map = {...map, [module.default.name]: module.default}
    return map
}
function buildRoutes(rc: any, accessControlled: boolean): any[] {
    const { Home, Index, Error, ...rest } = rc
    return [
        {
            path: accessControlled ? 'admin' : '/',
            element: <Home />,
            errorElement: <Error />,
            children: [
                {index: true, element: <Index />},
                ...buildRouteElements(Object.entries(rest), Error)
            ]

        }
    ]
}
function buildRouteElements(rf: any[], ErrorElement: any) {
    return rf.map(([path, Element]) => (
        {
            path: path.toLowerCase(),
            element: <Element />, 
            errorElement: <ErrorElement />
        }
    ))
}
function buildMenuLinks(v: KeyedValue) {
    const exclude = ['Home', 'Index', 'Error']
    return Object.values(privateRoutes).map((c: any) => ({name: c.default.name})).filter(n => !(exclude.includes(n.name)))
}