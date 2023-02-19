import React from 'react'
import useSWR from 'swr'
import { IProduct } from '@/models/Product'
type Props = {}
const data = {
    name: "vu"
}
export function demo(props: Props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: product = [], error, isLoading } = useSWR(`http://localhost:3100/products`, fetch)
    return (
        <div>
            hello{data.name}
        </div>
    )
}

export default demo