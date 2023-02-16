import { LayoutAdmin } from '@/components/LayoutAdmin'
import Login from '@/containers/authenticate/Login'
import React from 'react'

type Props = {}

const Register = (props: Props) => {
    return (
        <LayoutAdmin>
            <div style={{ marginTop: 70, marginBottom: 100 }}>
                <Login />
            </div>
        </LayoutAdmin>

    )
}

export default Register