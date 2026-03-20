import Button from '../Button.tsx';
import Input from '../Input.tsx'

export default function Login() {
    return(
        <div className="w-dvw h-dvh content-center justify-items-center">
            <div className='flex flex-col size-2/5 min-h-3xs max-h-sm min-w-3xs max-w-xs border border-white bg-[#22284b] drop-shadow-xl/50 rounded-2xl space-y-3 justify-items-center'>
                <h1 className='font-bold text-white text-2xl mt-3'>Login</h1>
                <Button 
                    text='Entrar com o Google'
                    route='/'
                    className='w-[80%]'
                />
                <Input 
                    placeholder='Escreva seu Email'
                    className='rounded-xl'
                />
                <Input 
                    placeholder='Escreva sua senha'
                    className='rounded-xl'
                />                <Button 
                    text='Continuar'
                    route='/'
                    className='w-[80%]'
                />
            </div>
        </div>
    )
}