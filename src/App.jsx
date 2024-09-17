//import React from 'react'
import { Button } from "flowbite-react";
import { FaGithub } from "react-icons/fa";
import { IoLogoCss3,IoLogoHtml5, IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAstro } from "react-icons/si";

import ProfileCard from "./components/ProfileCard";
import TechCard from "./components/TechCard";


function App() { //TODO: Arreglar variable text para pasarla.
    // eslint-disable-next-line react/prop-types
    const BoldText = ({text}) =>{
        return <span className="font-medium text-white">{text}</span>
    }

  return (
    <section className='px-5 lg:max-w-4xl lg:px-0 m-auto'>
        <section className="py-36 max-w-2xl ">
            <h1 className="text-3xl lg:text-5xl font-bold pb-3 text-white">¡Hola!, soy <strong className="text-[#ff5757]">Renato Herrera</strong></h1>
            <h2 className="text-2xl pb-2 ">Explora mi mundo de <strong className="text-sky-300">Programación</strong> y <strong className="text-purple-400">Diseño</strong>.</h2>
            <p className="text-xl [&>strong]:text-red-400 [&>strong]:font-semibold">Soy un <strong>desarrollador</strong> y <strong>diseñador</strong> apasionado, siempre buscando nuevas oportunidades y desafíos para crecer.</p>

            <div className="flex mt-5 gap-3">
                <Button color="gray" pill href="https://github.com/dev-renacode" target="_blank">
                    <FaGithub className="w-5 h-5 mr-2"/> See my GitHub
                </Button>
            </div>
        </section>

        <section className="">
            <h2 className="text-4xl font-bold pb-2 text-white">Mensajes</h2>
            <p className="text-lg">Sumergete en mis últimos mensajes donde comparto mis insights, actualizaciones y historias de mi viaje en desarrollo y diseño. ¡Disfruta explorando y siéntete libre de dejar tus pensamientos!</p>
            <div className="grid lg:grid-cols-2 gap-10">
                <ProfileCard 
                    userName="Renato Herrera" 
                    userImage="minecraft" 
                    userMessage="Estoy muy contento por que puedan ver mi página web porfin, muy emocionado de hacerla crecer mediante vaya aprendiendo nuevas tecnologías. Muchas gracias por pasar!"
                    rol="CEO"
                    rolBadge="red"
                    date="04/09/2024"
                />
                <ProfileCard 
                    userName="Renato Herrera" 
                    userImage="minecraft" 
                    userMessage="Una pequeña actualización, mejorando el diseño de mi página web, y mejorando la experiencia de navegación. Muy feliz con lo que estoy logrando :)!"
                    rol="CEO"
                    rolBadge="red"
                    date="14/09/2024"
                />
            </div>
        </section>
        
        <section className="my-36 flex flex-col text-center">
            <h2 className="text-4xl font-bold text-white">Tecnologías Aprendidas</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3">
                <TechCard text="JavaScript">
                    <IoLogoJavascript className="w-24 h-24 text-yellow-200 mb-4" />
                </TechCard>
                <TechCard text="CSS3">
                    <IoLogoCss3 className="w-24 h-24 text-blue-500 mb-4" />
                </TechCard>
                <TechCard text="HTML5">
                    <IoLogoHtml5 className="w-24 h-24 text-orange-400 mb-4" />
                </TechCard>
                <TechCard text="React">
                    <IoLogoReact className="w-24 h-24 text-blue-400 mb-4" />
                </TechCard>
                <TechCard text="TailwindCSS">
                    <RiTailwindCssFill className="gird-test w-24 h-24 text-teal-400 mb-4" />
                </TechCard>
                <TechCard text="Astro">
                    <SiAstro className="w-24 h-24 text-orange-400 mb-4" />
                </TechCard>
            </div>
        </section>

        <section className="text-lg mt-20">
            <h2 className="text-4xl font-bold pb-3 text-white">Sobre mi</h2>
            <p className="pb-3">
                Soy {<BoldText text="Renato Herrera"/>}, actualmennte estudiando primer año de {<BoldText text='Ingeniería informática'/>} en DuocUC, Tengo 19 años, vivo en Santiago, Chile. Siempre me ha gustado programar, me gusta ver lo que hago plasmado en código. Llevo 2 años aprendiendo programación web, este año 2024 sobre todo me enfocado más, se tecnologías esenciales como {<BoldText text='HTML, CSS y Javascript'/>} también frameworks como {<BoldText text='Astro, Vite, React y TailwindCSS'/>}. Por otro lado también tengo conocimiento de {<BoldText text='Python'/>} y actualmente aprendiendo {<BoldText text='Java'/>}.
            </p>
            <p>
                Mi sueño es ser un desarrollador {<BoldText text="Fullstack"/>}, actualmente estoy muy enfocado en {<BoldText text="Frontend"/>}, pero pronto empezaré a investigar sobre {<BoldText text="Backend"/>}, y toda la <BoldText text="programación de lado del servidor"/>. Esta página no esta hecha con el fin de informar, simplemente es para que me conozcan, muchas gracias por pasarte. Un gusto 😃
            </p>
        </section>

        <section className="my-36">
            <h2 className="text-3xl font-bold pb-3 text-white">Mi ruta de aprendizaje</h2>
            <ul className="text-lg flex flex-col gap-3 list-decimal pl-5">
                <li>{<BoldText text="Aprender HTML"/>}: Empecé en todo este mundo aprendiendo HTML, por este lado comenzó todo el camino hacia mi objetivo de ser desarrollador de paginas web.</li>
                <li>{<BoldText text="Aprender CSS"/>}: Después de aprender HTML, comencé a aprender CSS, por este lado me di cuenta de que me gusta CSS porque es muy fácil de aprender y se puede aplicar a cualquier tipo de proyecto.</li>
                <li>{<BoldText text="Aprender Javascript"/>}: Después de aprender CSS, me tardé un tiempo en aprender Javascirpt, ya que tenía enfoque en los estudios escolares, pero esto no evitó aprender los fundamentos de javascript.</li>
                <li>{<BoldText text="Aprender Git / GitHub"/>}: Esto no vino de mi personalmente, sino que lo conocí gracias al instituto, pero gracias a esto me di cuenta de que Git es muy importante para trabajar en equipo y compartir proyectos.</li>
                <li>{<BoldText text="Aprender Astro"/>}: Después de aprender todo lo anterior me interesó mucho el mundo de los frameworks, y conocí astro, un framework con mucho futuro, sobre todo para páginas estáticas.</li>
                <li>{<BoldText text="Aprender TailwindCSS"/>}: Después de aprender Astro me interesó mucho el mundo de los frameworks CSS, y conocí tailwindcss, un framework que me permite personalizar mis estilos de manera muy sencilla (Me solucionó la vida XD).</li>
                <li>{<BoldText text="Aprender React (actual)"/>}: Después de aprender TailwindCSS me interesó mucho el mundo de los frameworks de Javascript, y conocí React, un framework que me permite crear páginas web dinámicas y personalizadas.</li>
            </ul>
        </section>
    </section>
  )
}

export default App
