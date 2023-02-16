import Login from '@/containers/authenticate/Login'
import React from 'react'

type Props = {}

const Register = (props: Props) => {
    return (
        <>
            <div style={{ marginTop: 100, marginBottom: 320 }}>
                <Login />
            </div>
        </>
    )
}

export default Register