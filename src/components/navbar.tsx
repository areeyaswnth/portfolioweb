
export default function Navbar() {
    return (
        <div >
            <div className="navbar flex col-auto bg-opacity-30 bg-white justify-end shrink-0">
                <div><a className="text-xl text-left"> Portfolio</a></div>
                <div className="flex row-auto">
                    <a className="btn btn-ghost text-xl">About me</a>
                    <a className="btn btn-ghost text-xl">Education</a>
                    <a className="btn btn-ghost text-xl">Skills</a>
                    <a className="btn btn-ghost text-xl">Experience</a>
                    <a className="btn btn-ghost text-xl">Contact</a>
                </div>


            </div>
        </div>
    )
}