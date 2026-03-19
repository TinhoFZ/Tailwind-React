import { Link } from 'react-router-dom';
import Button from './Button';

export default function Nav() {
    return(
        <nav className="bg-blue-900 px-6 py-4 w-full sticky top-0">
            <div className="flex items-center">
                <Link to="/" className="text-white font-bold text-2xl">Site bom</Link>
                <div className="mx-auto space-x-4">
                    <Link to="/dashboard" className="text-white">Dashboard</Link>
                    <a className='pointer-events-none select-none'>Placeholder</a>
                    <a className='pointer-events-none select-none'>Placeholder</a>
                </div>
                <Button 
                    text='Login'
                    route='login'
                />
            </div>
        </nav>
    )
}