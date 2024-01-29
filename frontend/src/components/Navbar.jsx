import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/solid"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import "./navbar.css"
const Navbar = () => {
    const {logOut} = useContext(AuthContext)
    return(
        <>
            <header className=" navbar ">
                <nav className="flex max-w-7xl items-center justify-between p-4 mx-auto"> 
                    <div className="logo">
                        <Link to="/">
                            <span className="sr-only">Ratify</span>
                            <img className="h-12 w-auto" src="/images/Group 3.png" alt="" />
                        </Link>
                    </div>
                    <div className>Rate Business as per Convinence</div>
                    <div className="py-3">
                        <div className="block rounded-full p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:cursor-pointer" onClick={logOut}>
                            <ArrowLeftStartOnRectangleIcon className="h-8 w-8 text-primary-darkgreen" />
                        </div>
                    </div>
                </nav>
            </header>
        </>

    )
}

export default Navbar