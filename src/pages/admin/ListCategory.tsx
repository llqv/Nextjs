import { LayoutAdmin } from '@/components/LayoutAdmin'
import AdminCategory from '@/containers/admin/AdminCategory'
import type { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'

const PageCategory: NextPageWithLayout = () => {
    return (
        <>
            <AdminCategory />
        </>
    )
}

PageCategory.getLayout = function getLayout(page: ReactElement) {
    return (
        <LayoutAdmin>
            {page}
        </LayoutAdmin>
    )
}

export default PageCategory