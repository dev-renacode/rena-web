import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-[#1E1E1E]">
        <div className="px-5 p-5 mt-20 lg:max-w-4xl m-auto">
          <div className="lg:flex lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col pb-5">
                <a href="">Repositorio</a>
                <a href="">Consultas</a>
                <a href="">Mensaje</a>
            </div>

            <div className="flex jusify-center gap-3 pb-4">
                <a href="https://www.instagram.com/renaa.js/" target="_blank"><FaInstagram className="w-7 h-7"/></a>
                <a href="https://x.com/devrena17"><FaXTwitter className="w-7 h-7"/></a>
                <a href="https://github.com/dev-renacode" target="_blank"><FaGithub className="w-7 h-7"/></a>
                <a href="https://www.youtube.com/@renaaacl" target="_blank"><FaYoutube className="w-7 h-7"/></a>
            </div>
          </div>
          <hr />
          <div className="text-center">
            <p className="pt-5 text-center">© Developed by Renato Herrera</p>
            <h1 className="mb-4 text-4xl font-extrabold lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-red-400">2024</span></h1>
          </div>
        </div>
    </footer>
  )
}

export default Footer
