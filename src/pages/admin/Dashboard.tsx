import { LayoutAdmin } from '@/components/LayoutAdmin'
import AdminDashboard from '@/containers/admin/AdminDashboard'
import React from 'react'

type Props = {}

const Dashboard = (props: Props) => {
    return (
        <div>
            <LayoutAdmin>
                <AdminDashboard />
            </LayoutAdmin>
        </div>
    )
}

export default Dashboard