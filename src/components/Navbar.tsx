import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthState from './AuthState'
import { auth } from '../config/firebase.config'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate()

    const signOutOnClick = () => {
        signOut(auth)
        navigate('/signin')
    }

    return (
        <div>
            <nav className='bg-stone-200 fixed top-0 w-full z-100 py-5 px-10'>
                <ul className='flex items-center justify-around'>
                    <li className='m-3'>
                        <Link to='/' className='flex-row hover:text-slate-500'>
                            Home
                        </Link>
                    </li>
                    <li className='m-3'>
                        <Link to='/details' className='flex hover:text-slate-500'>
                            Details
                        </Link>
                    </li>
                    <li className='m-3'>
                        <Link to='/accomodations' className='flex place-items-center hover:text-slate-500'>
                            Accomodations
                        </Link>
                    </li>
                    <li className='m-3'>
                        <Link to='/itinerary' className='flex place-items-center hover:text-slate-500'>
                            Itinerary
                        </Link>
                    </li>
                    <li className='m-3'>
                        <Link to='/SongRecs' className='flex place-items-center hover:text-slate-500'>
                            Song Requests
                        </Link>
                    </li>
                    <li className='m-3'>
                        <Link to='/SignUp' className='flex place-items-center hover:text-slate-500'>
                            Sign Up
                        </Link>
                    </li>
                    {
                    !auth.currentUser ?
                    <li className='m-3'>
                        <Link to='/SignIn' className='flex place-items-center hover:text-slate-500'>
                            Sign In
                        </Link>
                    </li>
                    :
                    <li className='m-3'>
                        <Link to='/' onClick={signOutOnClick} className='flex place-items-center hover:text-slate-500'>
                            Sign Out
                        </Link>
                    </li>
                    }
                </ul>
            </nav>
        <div className="m-20"></div>
        </div>
    )
}

export default Navbar