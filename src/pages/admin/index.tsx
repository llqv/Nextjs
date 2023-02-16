import { LayoutAdmin } from '@/components/LayoutAdmin'
import AdminCategory from '@/containers/admin/AdminCategory'
import AdminDashboard from '@/containers/admin/AdminDashboard'
import AdminProduct from '@/containers/admin/AdminProduct'
import type { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'
import Dashboard from '.'

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