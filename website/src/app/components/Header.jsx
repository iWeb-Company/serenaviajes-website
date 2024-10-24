import Logo from "./ui/icons/Logo";
import Instagram from "./ui/icons/instagram";

export default function Header() {
    return <header className="flex w-full flex-col bg-orangeBold">
        <div className="flex w-full justify-between px-10 py-5">
            <div className="flex items-center gap-x-4">
                <Logo w="190px" h="184px" />
                <img className="w-80 h-32" src="/serena-nombre.png" alt="Nombre Logo" />
                <span>LEGAJO 11999</span>
            </div>
            <div className="flex items-center">
                <ul>
                    <li className="flex gap-x-2">
                        <p>11 5405-3025 / 116375-9997</p>
                         <Instagram />
                    </li>
                    <li className="flex justify-end gap-x-2">
                        <p>serenaviajes</p>
                         <Instagram />
                    </li>
                </ul>
            </div>
        </div>

        <div className="flex bg-orangeBold h-16">
            <ul className="flex justify-around w-full font-semibold items-center [font-size:35px] text-white">
                <li>Inicio</li>
                <li>Paquetes Turisticos</li>
                <li>Pasajes</li>
                <li>¿Quienes Somos?</li>
                <li>Contacto</li>
            </ul>
        </div>
    </header>
}
