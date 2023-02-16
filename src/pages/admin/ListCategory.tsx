import { LayoutAdmin } from '@/components/LayoutAdmin'
import AdminCategory from '@/containers/admin/AdminCategory'
import React from 'react'
type Props = {}

const ListCategory = (props: Props) => {
    return (
        <div>
            <LayoutAdmin>
                <AdminCategory />
            </LayoutAdmin>
        </div>
    )
}

export default ListCategory