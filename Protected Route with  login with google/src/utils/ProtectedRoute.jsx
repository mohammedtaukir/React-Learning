import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    let verify = {'token':false}
    return(
        verify.token ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes