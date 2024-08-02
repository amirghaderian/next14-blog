import Link from "next/link"

const Links = () => {
    const LinksArray = [
        { title: "Home", path: "/" },
        { title: "Contact", path: "/contact" },
        { title: "About", path: "/about" },
        { title: "Blog", path: "/blog" }
    ]
    return (
        <div className="flex gap-3">
            {LinksArray.map((link) => {
                return <Link key={link.title} href={link.path}>{link.title}</Link>
            })}  </div>
    )
}

export default Links