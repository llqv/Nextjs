import { LayoutAdmin } from "@/components/LayoutAdmin";
import React from "react";

const App = ({ Component, pageProps }: any) => {
    return (
        <div>
            <LayoutAdmin>
                <Component {...pageProps} />
            </LayoutAdmin>
        </div>
    )
};
export default App
