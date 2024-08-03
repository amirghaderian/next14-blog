"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useState } from "react"

const Links = () => {
    const LinksArray = [
        { title: "Home", path: "/" },
        { title: "Contact", path: "/contact" },
        { title: "About", path: "/about" },
        { title: "Blog", path: "/blog" }
    ]
    const pathName = usePathname()
    const session = true;
    const isAdmin = true;
    const [open, setOpen] = useState(false)
    return (
        <div className="container">

            <div className="flex gap-3 items-center">
                {LinksArray.map((link) => {
                    return <Link key={link.title} href={link.path} className={`${link.path === pathName && " bg-slate-300 text-black rounded-lg"} px-3`}>{link.title} </Link>
                })}
                {session ? (<>
                    {isAdmin &&
                        <Link href={"/admin"}>Admin</Link>}
                    <button className="font-bold p-[10px] cursor-pointer">Logout</button>
                </>
                ) : <Link href={"/login"}>Login</Link>}
            </div>
            <button onClick={() => setOpen(prev => !prev)}>menu</button>
            {
                open && <div className="mobileMenu">
                    {LinksArray.map((link) => {
                        return <Link key={link.title} href={link.path} className={`${link.path === pathName && "px-3 bg-slate-300 text-black rounded-lg"}`}>{link.title} </Link>
                    })}
                </div>
            }
        </div>
    )
}

export default Links