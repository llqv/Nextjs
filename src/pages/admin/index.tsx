import { LayoutAdmin } from '@/components/LayoutAdmin'
import AdminProduct from '@/containers/admin/AdminProduct'
import type { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'

const PageProduct: NextPageWithLayout = () => {
    return (
        <>
            <AdminProduct />
        </>
    )
}

PageProduct.getLayout = function getLayout(page: ReactElement) {
    return (
        <LayoutAdmin>
            {page}
        </LayoutAdmin>
    )
}

export default PageProduct