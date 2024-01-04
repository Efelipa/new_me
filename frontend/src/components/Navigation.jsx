import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/img/logo.svg';
import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa6";

export const Navigation = () => {
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        if (theme === 'dark') {
            document.querySelector('html').classList.add('dark');
        } else {
            document.querySelector('html').classList.remove('dark');
        }
    }, [theme])

    // Handle Events 
    const handleTheme = () => {
        console.log('button clicked');
        setTheme(prev => prev == 'light' ? 'dark' : 'light');
    }

    return (
        <>
                <header className="flex justify-between w-[1120px] p-3 items-center text-base font-medium text-slate-800  bg-inherit dark:text-slate-200">
                    <div>
                        <Link to='/home' className="flex items-center gap-2">
                            <img src={logo} alt="Portfolio Logo" className="w-8 h-8"/>
                            <span className='hover:text-slate-500 dark:hover:text-slate-300'>
                                Erick Felipa
                            </span>
                        </Link>
                    </div>
                    <div className="flex justify-between gap-3">
                        <a href="#">Blog</a>
                        <a href="#">Conóceme</a>
                        <a href="#">Contácteme</a>
                        <div className="rounded-full w-10 border-2 border-slate-900 dark:border-white flex justify-start">
                            <button onClick={handleTheme} className='px-1'>
                                {theme == 'light' ? <FaSun/> : <FaMoon/>}
                            </button>
                        </div>
                    </div>
                </header>
        </>
    )
}