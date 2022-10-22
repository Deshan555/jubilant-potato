import Image from "next/image";

import { SearchIcon, UserGroupIcon, HeartIcon, CameraIcon, MenuIcon, MailOpenIcon, BellIcon, HomeIcon} from '@heroicons/react/outline'

import pro_pic from 'C:/Users/Jayashanka Deshan/WebstormProjects/jubilant-potato/my-project/Resources/propic.jpg'

import logo from 'C:/Users/Jayashanka Deshan/WebstormProjects/jubilant-potato/my-project/Resources/Logo.png'

import logo_small from 'C:/Users/Jayashanka Deshan/WebstormProjects/jubilant-potato/my-project/Resources/instagram.png'

function Header()
{
    return(
        <div className="shadow-sm border-b bg-white sticky top-0 z-50">
            
            <div className="flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto">

                <div className="relative hidden lg:inline-grid w-24 cursor-pointer">

                    <Image src={logo} layout='fill' objectFit='contain'/>

                </div>

                
                <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">

                    <Image src={logo_small} layout='fill' objectFit='contain'/>

                </div>

                
                
                {/* middle side area - make search bar*/}

                <div className="relative mt-1 p-3 rounded-md">
                    
                    <div className="absolute -inset-y-0 pl-3 flex items-center pointer-events-none">
                        
                        <SearchIcon className="h-5 w-5 text-gray-500" />
                    
                    </div>

                    <input className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300
                    
                    focus:ring-black focus:border-black rounded-lg" type="text" placeholder="Search On Events Wave"/>

                </div>

                
                
                {/* right side area */}

                <div className="flex items-center justify-end space-x-4">
                    
                    <HomeIcon className=" nevbtn"/>

                    <MenuIcon className=" h-6 md:hidden cursor-pointer"/>

                    <div className="relative navBtn">
                        
                        <BellIcon className=" nevbtn"/>

                        <div className="absolute -top-1 -right-1 text-xs w-5 h-5
                        bg-blue-500 rounded-full flex items-center justify-center animate-bounce text-white">4</div>
                    
                    </div>

                    <CameraIcon className=" nevbtn"/>

                    <HeartIcon className=" nevbtn"/>

                    <UserGroupIcon className=" nevbtn"/>

                    <img src={pro_pic} alt="my profile" className="h-4 rounded-full cursor-pointer"/>                    

                </div>
            </div>
        </div>
    )
}

export default Header
