import { LayoutAdmin } from '@/components/LayoutAdmin'
import AdminProduct from '@/containers/admin/AdminProduct'
import React from 'react'

type Props = {}

const ListProduct = (props: Props) => {
    return (
        <div>
            <LayoutAdmin>
                <AdminProduct />
            </LayoutAdmin>
        </div>
    )
}

export default ListProduct