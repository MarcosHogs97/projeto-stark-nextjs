import Image from "next/image"
import Logo from "../logo/Logo";
import FlyoutMenus from "../NavBar/FlyoutMenus";

export default function Navigation() {
    return (<>
        <div className="w-full h-20 p-2 flex items-center justify-start">
                <Logo />
                <FlyoutMenus />
        </div>       
    </>)
}