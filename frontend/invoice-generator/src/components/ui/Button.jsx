import React from 'react'
import { Loader2 } from 'lucide-react'

const Button = ({
    variant = 'primary',
    size = 'md',
    isLoading = false,
    disabled = false,
    children,
    icon: Icon,
    ...props
}) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    const variantClases = {
        primary: "bg-blue-900 text-white hover:bg-blue-800",
        secondary: "bg-white hover:bg-slate-50 text-scale-700 border border-slate-200",
        ghost: "bg-transparent hover:bg-slate-100 text-scale-700",
        dark: "bg-gray-900 text-white hover:bg-gray-800",   
    }
    const sizeClasses = {
        sm: 'px-3 py-1.5 h-8 text-sm',
        md: 'px-4 py-2 h-10 text-base',
        lg: 'px-6 py-3 h-12 text-lg',
    };

    return (
        <button
            className={`${baseClasses} ${variantClases[variant]} ${sizeClasses[size]} ${isLoading ? 'cursor-not-allowed' : ''}`}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading ? (
                <Loader2 className="animate-spin h-5 w-5 mr-2" />
            ) : (
                Icon && <Icon className="h-4 w-4 mr-2" />
            )}
            {children}
        </button>
    )
}

export default Button