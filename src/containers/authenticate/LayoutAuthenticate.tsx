
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import AppBar from "./AppBar";
interface IProps {
  children: ReactNode;
}
export default function LayoutAuthenticate({ children }: IProps) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <AppBar/>
          <div className={"  h-screen "}>{children}</div>
        </SessionProvider>
      </body>
    </html>
  );
}