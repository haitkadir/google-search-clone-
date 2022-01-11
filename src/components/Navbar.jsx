import React from 'react'
import { Link } from 'react-router-dom'
import {Search} from './Search'

export const Navbar = ({darkTheme, setDarkTheme}) => {
    return (
        <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center border-b dark:border-gray-700 border-gray-200">
            <div class="flex justify-between items-center space-x-5 w-screen">
                <Link to="/">
                    <p className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900">
                        Google 🔍
                    </p>
                </Link>
                <button onClick={() => setDarkTheme(!darkTheme)} className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full py-1 px-2 hover:drop-shadow-md">
                    {darkTheme ? 'Light ​🔆​' : 'Dark 🌛'}
                </button>
            </div>
            <Search />
        </div>
    )
}