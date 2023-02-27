import { LayoutAdmin } from '@/components/LayoutAdmin'
import AdminProduct from '@/containers/admin/AdminProduct'
import AppBar from '@/containers/authenticate/AppBar'
import LayoutAuthenticate from '@/containers/authenticate/LayoutAuthenticate'
import type { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'

const PageAuthenticate: NextPageWithLayout = () => {
    return (
        <>
            <LoginPage />
        </>
    )
}

PageAuthenticate.getLayout = function getLayout(page: ReactElement) {
    return (
        <LayoutAuthenticate>
            {page}
        </LayoutAuthenticate>
    )
}

export default PageAuthenticate