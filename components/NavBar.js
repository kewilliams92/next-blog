import Link from "next/link"

function NavBar(){
    return (
        <div>
            <Link href="/">
                Home
            </Link>
            <Link href="/about">
                About
            </Link>
        </div>
    )
}

export default NavBar