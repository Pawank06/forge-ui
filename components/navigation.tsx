import Link from "next/link"
import { FaGithub, FaXTwitter } from 'react-icons/fa6'
import { ModeToggle } from "./mode-toggle"



const Navigation = () => {
    return (
        <nav className="fixed top-0 left-0 z-10 w-full  backdrop-blur-[12px]">
            <div className="app-container flex items-center justify-between">
                <div className="flex gap-6 ">
                    <Link href="/" className="font-bold text-xl">Forge/ui</Link>
                    <div className="flex gap-6 text-sm items-center text-muted-foreground font-medium">
                        <Link href="/docs" className="dark:hover:text-white/80 hover:text-black/80">Docs</Link>
                        <Link href="/blog" className="dark:hover:text-white/80 hover:text-black/80">Blog</Link>
                        <Link href="/about" className="dark:hover:text-white/80 hover:text-black/80">About</Link>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <Link href="#">
                        <FaXTwitter />
                    </Link>
                    <Link href="#">
                        <FaGithub />
                    </Link>
                    <ModeToggle/>

                </div>
            </div>
        </nav>
    )
}

export default Navigation