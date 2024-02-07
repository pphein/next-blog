import Link from "next/link"
import { FaYoutube, FaTwitter, FaGithub, FaFacebook } from "react-icons/fa"

export default function Navbar() {
    return (
        <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
            <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
                <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                    <Link
                        href="/"
                        className="text-white/90 no-underline hver:text-white">
                        Pyae Phyo Hein
                    </Link>
                </h1>
                {/* <div className="flex flex-row justify-center sm:justify-evently align-middle gap-4 text-white text-4xl lg:text-5xl">
                    <Link
                        className="text-white/90 hover:text-white"
                        href="https://www.facebook.com/pph.hein"
                    >
                        <FaFacebook />
                    </Link>
                    <Link
                        className="text-white/90 hover:text-white"
                        href="https://www.github.com/pphein"
                    >
                        <FaGithub />
                    </Link>
                </div> */}
                <div className="text-2xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                    <Link
                        className="text-white/90 hover:text-white"
                        href="/posts"
                    >
                        Blogs
                    </Link>
                </div>
            </div>
        </nav>
    )
}