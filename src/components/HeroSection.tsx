import Button from "./Button"
import placeholder from '../assets/images/placeholder.png'

export default function HeroSection() {
    return(
        <div className="w-full h-[calc(50dvh-(44.1px+36px))] bg-[#22284b]">
            <div className="grid grid-cols-3 h-full w-full">
                <div className="col-span-2 content-center">
                    <div className="w-fit ml-[2dvw] mr-auto justify-items-center space-y-2">
                        <h1 className="text-white font-bold text-6xl">Site bom</h1>
                        <h2 className="text-neutral-400 font-semibold">Isso é um exemplo de site de "alta" qualidade.</h2>
                        <Button 
                            text='Use agora!'
                            route='login'
                        />
                    </div>
                </div>
                <div className="col-start-auto overflow-hidden content-center">
                    <img src={placeholder} alt="Imagem placeholder" className="relative -right-1/2"/>
                </div>
            </div>
        </div>
    )
}