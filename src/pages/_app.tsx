import { LayoutAdmin } from "@/components/LayoutAdmin";
import React from "react";

const App = ({ Component, pageProps }: any) => {
    return (
        <div>
            <Component {...pageProps} />
        </div>
    )
};
export default App
