import { LayoutAdmin } from '@/components/LayoutAdmin'
import React from 'react'

type Props = {}

const MyApp = ({ Component, pageProps }: any) => {
    return (
        <>
            <LayoutAdmin>
                <Component  {...pageProps} />
            </LayoutAdmin>
        </>
    )
}

export default MyApp
