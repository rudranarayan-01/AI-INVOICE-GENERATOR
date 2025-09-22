import React from 'react'
import { ChevronDown } from 'lucide-react'
import { useNavigate } from 'react-router-dom'


const ProfileDropDown = ({
    isOpen,
    onClose,
    avatar,
    companyName,
    email,
    onLogout,
}) => {

    const navigate = useNavigate();
    return (

        <div className='relative'>
            <button onClick={onToggle} className='flex items-center space-x-3 p-2 rounded-xl hover:bg-gray-50 transition-colors duration-200'>
                {avatar ? (<img src={avatar} alt="Avatar" className="w-9 h-9 rounded-xl object-cover" />) : (
                    <div className="h-8 w-8 bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl flex items-center justify-center">
                        <span className='text-white font-semibold text-sm'>
                            {companyName.charAt(0).toUpperCase()}
                        </span>
                    </div>
                )}
                <div className="">
                    <p className="">{companyName}</p>
                    <p className="">{email}</p>
                </div>
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
                {isOpen && (
                    <div className="">
                        <div className="">
                            <p className="">{companyName}</p>
                            <p className="">{email}</p>
                        </div>
                        <a href="" onClick={()=>{navigate("/profile")}} className="">
                            View Profile
                        </a>
                        <div className="">
                            <a href="" onClick={onLogout} className=''>
                                Sign out
                            </a>
                        </div>
                    </div>
                )}

            </button>
        </div>
    )
}

export default ProfileDropDown