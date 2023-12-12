import {FC, PropsWithChildren} from 'react'
 const Layout:FC<PropsWithChildren> = ({children}) => {
    return <div className="bg-gray-900 h-screen overflow-y-auto">
        {children}
    </div>
}
export default Layout;