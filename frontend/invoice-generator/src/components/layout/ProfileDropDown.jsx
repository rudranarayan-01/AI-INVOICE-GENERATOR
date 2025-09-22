import React from 'react'
import { ChevronDown } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const ProfileDropDown = ({
    isOpen,
    onToggle,
    avatar,
    companyName,
    email,
    onLogout,
}) => {
    const navigate = useNavigate();

    return (
        <div className="relative">
            {/* Toggle Button */}
            <button
                onClick={onToggle}
                className="flex items-center space-x-3 p-2 rounded-xl hover:bg-gray-50 transition-colors duration-200"
            >
                {avatar ? (
                    <img
                        src={avatar}
                        alt="Avatar"
                        className="w-9 h-9 rounded-xl object-cover"
                    />
                ) : (
                    <div className="h-8 w-8 bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                            {companyName?.charAt(0).toUpperCase()}
                        </span>
                    </div>
                )}
                <div className="hidden sm:block text-left">
                    <p className="text-sm font-medium text-gray-900">
                        {companyName}
                    </p>
                    <p className="text-xs text-gray-500">{email}</p>
                </div>
                <ChevronDown
                    className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-100 rounded-xl shadow-lg py-2 z-50">
                    <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">
                            {companyName}
                        </p>
                        <p className="text-xs text-gray-600">{email}</p>
                    </div>

                    <button
                        onClick={() => navigate("/profile")}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                        View Profile
                    </button>

                    <div className="border-t border-gray-100 mt-2 pt-2">
                        <button
                            onClick={onLogout}
                            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                            Sign out
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProfileDropDown
