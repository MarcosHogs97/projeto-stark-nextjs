import { ReactNode } from "react";
import Navegation from "./Navegation/navegation";

interface LayoutProps{
    children: ReactNode;
}

function Layout({children}:LayoutProps) {
    return (
        <div>
            <header className="flex row w-full h-1/6 backdrop-brightness-50">
                <Navegation />
            </header>
            {children}
        </div>
    )
};
export default Layout;