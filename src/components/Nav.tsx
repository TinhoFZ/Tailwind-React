import { Link } from 'react-router-dom';

export default function Nav() {
    return(
        <nav className="bg-blue-900 p-4 w-full">
            <div className="flex items-center">
                <Link to="/" className="text-white font-bold text-2xl">Site bom</Link>
                <div className="ml-auto space-x-4">
                    <a className='pointer-events-none select-none'>Placeholder</a>
                    <a className='pointer-events-none select-none'>Placeholder</a>
                    <Link to="/dashboard" className="text-white">Dashboard</Link>
                    <Link to="/login" className="py-2 px-3 text-white rounded-xl bg-neutral-800 hover:bg-neutral-900 active:bg-neutral-950">Login</Link>
                </div>
            </div>
        </nav>
    )
}