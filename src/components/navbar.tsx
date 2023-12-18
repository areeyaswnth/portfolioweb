import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <div className="navbar flex col-end-13 backdrop-blur-sm bg-opacity-30 bg-white justify-end">
                <div className="flex row-auto">
                    <Link to="/About" className="btn btn-ghost text-xl">About me</Link>
                    <Link to="/Education" className="btn btn-ghost text-xl">Education</Link>
                    <Link to="/Experience" className="btn btn-ghost text-xl">Experience</Link>
                    <Link to="/Activity" className="btn btn-ghost text-xl">Activity</Link>
                    <Link to="/Contact" className="btn btn-ghost text-xl">Contact</Link>
                </div>
            </div>
        </div>
    );
}