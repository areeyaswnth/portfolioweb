// Navbar.js
import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="fixed w-full">
            <div>
                <div className="navbar flex col-end-13 backdrop-blur-sm bg-opacity-30 bg-white justify-end">
                    <div className="flex row-auto">
                        <Link href="/" className="btn btn-ghost text-xl">About me </Link>
                        <Link href="/Education" className="btn btn-ghost text-xl">Education</Link>
                        <Link href="/Experience" className="btn btn-ghost text-xl">Experience</Link>
                        <Link href="/Contact" className="btn btn-ghost text-xl">Contact </Link>
                    </div>
                </div>
            </div>
        </header>

    );
}
