import React, {forwardRef, ButtonHTMLAttributes } from 'react';
import {cn} from '../lib/utils.ts'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'border';
    icon?: React.ReactNode;
    isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', icon, isLoading, children, disabled, ...props}, ref) => {
        const isDisabled = disabled || isLoading;

        return (
            <button
                ref={ref}
                disabled={isDisabled}
                className={cn(
                    'relative inline-flex items-center justify-center gap-spacing-100 py-spacing-150 px-spacing-200 preset-4 font-medium rounded-8 transition-all duration-200',
                    "focus:outline-none focus:ring-2 focus:ring-offset-2",
                    variant === 'primary' ? cn(
                        "bg-blue-500 text-white",
                        "hover:bg-blue-700",
                        "focus:ring-blue-500",
                        "disabled:bg-neutral-100 disabled:cursor-not-allowed text-neutral-300",
                ) : undefined,
                    variant === 'secondary' ? cn(
                        "bg-neutral-100 text-neutral-600",
                        "hover:bg-neutral-300 text-neutral-950",
                        "focus:ring-neutral-500",
                        "disabled:bg-neutral-50 disabled:cursor-not-allowed text-neutral-300",
                    ) : undefined,
                    variant === 'border' ? cn(
                        "border border-neutral-300 text-neutral-950 bg-white",
                        "hover:border-neutral-500 text-neutral-600",
                        "focus:ring-neutral-500",
                        "disabled:border-none bg-neutral-50 text-neutral-300"
                    ) : undefined,
                    className
                )}
                {...props}
            >
                {isLoading ? (
                    <>
                        <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-neutral-950"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                        <span className="text-neutral-950">Loading...</span>
                    </>
                ) : (
                    <>
                        {icon && <span className="w-5 h-5">{icon}</span>}
                        {children}
                    </>
                )}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;