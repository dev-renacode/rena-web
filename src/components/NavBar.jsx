import { FaBars } from "react-icons/fa"
import { useState } from 'react'

export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const classNamesLinks = {className: 'hover:text-[#ff5757] text-lg border-b-transparent hover:border-[#ff5757] border-b-2 transition-colors duration-200'}
    const navClassName = isMenuOpen
        ? 'flex flex-col justify-center items-center backdrop-blur-2xl bg-[#1E1E1E]/50 m-3 h-full rounded-lg py-6 gap-3'
        : 'hidden'

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return(
        <header className="fixed top-0 left-0 w-full z-50">
            <div className="identifier-header-hover
            flex items-center justify-between
            backdrop-blur-2xl bg-[#1E1E1E]/50
            h-20 px-5 
            lg:max-w-4xl lg:rounded-xl lg:mt-4 m-auto lg:h-14
            lg:hover:shadow-2xl lg:hover:shadow-red-600/20
            transition-shadow duration-200
            ">
                <strong className="text-[#ff9494] text-3xl">
                    <span className="text-[#ff5757]">Rena</span>Code{"</>"}
                </strong>

                <div className="lg:hidden">
                    <button title="Toggle menu" onClick={handleClick}>
                        <FaBars className="w-8 h-8"/>
                    </button>
                </div>

                <nav className="hidden lg:flex gap-5">
                    <a {...classNamesLinks} aria-label="Inicio de la página" href="#">Inicio</a>
                    <a {...classNamesLinks} aria-label="Mis conocimientos" href="#">Conocimientos</a>
                    <a {...classNamesLinks} aria-label="Sobre mi, mis estudios, etc..." href="#">Sobre mi</a>
                    <a {...classNamesLinks} aria-label="Mi ruta de aprendizaje" href="#">Ruta</a>
                </nav>
            </div>

            <nav className={navClassName}>
                <a {...classNamesLinks} aria-label="Inicio de la página" href="#">Inicio</a>
                <a {...classNamesLinks} aria-label="Mis conocimientos" href="#">Conocimientos</a>
                <a {...classNamesLinks} aria-label="Sobre mi, mis estudios, etc..." href="#">Sobre mi</a>
                <a {...classNamesLinks} aria-label="Mi ruta de aprendizaje" href="#">Ruta</a>
            </nav>
        </header>
    )
}