import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { auth , googleProvider} from "../config/firebase";
import { createUserWithEmailAndPassword,signInWithPopup } from "firebase/auth";

// eslint-disable-next-line react/prop-types
const Forms = ({ registrationDetails }) => {
    const [data, setData] = useState({
        email: "",
        password: "",
    })

    const navigate = useNavigate();

    const inputData = (value, type) => {
        setData(prevState => ({
            ...prevState,
            [type]: value
        }))
    }




    const dataValidation = (e) => {
        e.preventDefault();
        const { password, email } = data;

        if (password && email) {
            navigate("/test");
            registrationDetails(data)
            signIn()
        } else {
            alert("Please fill in all fields.");
            document.querySelectorAll('.input input , .input select').forEach(input => {
                if (!input.value) {
                    input.classList.add('input-error');
                } else {
                    input.classList.remove('input-error');
                }
            });
        }
    }

    const signIn = async () => {
        try {
        await createUserWithEmailAndPassword(auth, data.email, data.password);
        navigate("/test");
        } catch (err){
          console.error(err);
        }
      };

      const signInWithGoogle = async () => {
        try {
        await signInWithPopup(auth,googleProvider);
        navigate("/test");
        } catch (err){
          console.error(err);
        }
      };
    console.log("data", data)
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div className="mt-12 flex flex-col items-center">
                        <h1 className="text-2xl xl:text-3xl font-extrabold">
                            Sign In
                        </h1>

                        <div className="w-full flex-1 mt-8">

                            <form className="mx-auto max-w-xs input" onSubmit={(e) => dataValidation(e)}>
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="email" placeholder="Email" value={data.email} onChange={(e) => inputData(e.target.value, "email")} />
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                    type="password" placeholder="Password" value={data.password} onChange={(e) => inputData(e.target.value, "password")} />
                                <button type='submit'
                                    className="mt-5 tracking-wide font-semibold bg-green-500 text-gray-100 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                    {/* eslint-disable-next-line react/no-unknown-property */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        {/* eslint-disable-next-line react/no-unknown-property */}
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>

                                    <span className="ml-3">
                                        Sign In
                                    </span>
                                </button>
                            </form>

                            <div className="my-12 border-b text-center">
                                <div 
                                    className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                    Or sign In with Google
                                </div>
                            </div>

                            <div className="flex flex-col items-center">
                                <button onClick={()=> signInWithGoogle()}
                                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                    <div className="bg-white p-2 rounded-full">
                                        <svg className="w-4" viewBox="0 0 533.5 544.3">
                                            <path
                                                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                                fill="#4285f4" />
                                            <path
                                                d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                                fill="#34a853" />
                                            <path
                                                d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                                fill="#fbbc04" />
                                            <path
                                                d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                                fill="#ea4335" />
                                        </svg>
                                    </div>
                                    <span className="ml-4">
                                        Sign In with Google
                                    </span>
                                </button>
                            </div>




                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Forms
