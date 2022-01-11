import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { PageRoutes } from './components/PageRoutes'
import { Footer } from './components/Footer'


const App = () => {
    const [darkTheme, setDarkTheme] = useState(true);

    return(
        <div className={darkTheme ? 'dark' : ''}>
            <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 ease-in-out duration-300 min-h-screen">
                <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                <PageRoutes />
                <Footer />
            </div>
        </div>
    )
}

export default App;