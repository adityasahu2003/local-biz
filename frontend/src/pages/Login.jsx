import { createRef, useContext, useEffect } from "react"
import { AuthContext } from "../context/AuthContext"

const Login = () => {

    useEffect(() => {
        const token = localStorage.getItem("token")
        if(token){
            window.location.replace("/")
        }
    },[])
    
    const {signIn} = useContext(AuthContext)
    const usernameRef = createRef(null)
    const passwordRef = createRef(null)

    const handleSubmit = async e => {
        e.preventDefault()
        const username = usernameRef.current.value
        const password = passwordRef.current.value
        await signIn(username, password)
    }


    return(
        <>
            <div className="flex w-full h-screen">
                <div className="bg-slate-100 w-full lg:w-1/2">
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <img
                                className="mx-auto h-10 w-auto block lg:hidden"
                                src="/images/Group 3.png"
                                alt="Company Logo"
                            />
                            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Login to your account
                            </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                    Username
                                </label>
                                <div className="mt-2">
                                    <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    ref={usernameRef}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                                </label>
                                {/* <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </a>
                                </div> */}
                                <div className="mt-2">
                                    <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    ref={passwordRef}
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-primary-darkgreen px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-mediumgreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={handleSubmit}
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Not having an Account?{' '}
                            <a href="/register" className="font-semibold leading-6 text-primary-darkgreen hover:text-primary-mediumgreen">
                                Register now
                            </a>
                        </p>
                        </div>
                    </div>
                </div>
                <div className="bg-black hidden lg:block w-1/2">
               <img 
               src="/images/Group4.png"
               alt="Login Image"
               className="w-full h-full object-cover"
               />
                </div>
            </div>
        </>
    )
}

export default Login