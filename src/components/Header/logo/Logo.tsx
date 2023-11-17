import Image from "next/image"
import LogoLight from "../../../../public/imgs/logo-stark-branco-v1.2.svg"
import LogoDark from "../../../../public/imgs/logo-stark-preta-v1.2.svg"

export default function Logo() {
    return (<>
        <div className="flex items-center w-full h-full justify-between">
            <div className="flex items-center justify-center w-24 h-24 ">
                <Image src={LogoLight} alt="Logo StarkTeam" />
            </div>
        </div>
    </>)
}