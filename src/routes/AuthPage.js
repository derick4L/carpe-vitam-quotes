import { useContext } from 'react'
import AuthForm from "../components/AuthForm"

import { DataContext } from '../App'


const AuthPage = () => {

    const { user } = useContext(DataContext)

    return (
        <>
            <AuthForm user={user} />
        </>
    )
}
export default AuthPage