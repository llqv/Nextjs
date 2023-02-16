import { LayoutAdmin } from '@/components/LayoutAdmin'
import AdminDashboard from '@/containers/admin/AdminDashboard'
import type { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'

const PageDashboard: NextPageWithLayout = () => {
    return (
        <>
            <AdminDashboard />
        </>
    )
}

PageDashboard.getLayout = function getLayout(page: ReactElement) {
    return (
        <LayoutAdmin>
            {page}
        </LayoutAdmin>
    )
}

export default PageDashboard