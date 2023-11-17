import Navigation from "./NavBar/Navigation";

export default function Header() {
    return (<>
        <header className="w-full h-24">
            <nav className="w-full bg-gray-800  h-24 p-2 flex justify-start ">
            <Navigation/>
            </nav>
        </header>
    </>)
}