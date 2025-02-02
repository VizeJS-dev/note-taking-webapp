import {forwardRef, InputHTMLAttributes, useState} from 'react';
import {Eye, EyeOff, Info} from 'lucide-react';
import {cn} from '../lib/utils.ts'
import {Link} from 'react-router-dom';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    hint?: string,
    error?: string,
    variant?: 'default' | 'outline' | 'error';
    showPasswordToggle?: boolean;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
    ({ className, type = 'text', label, hint, error, variant = 'default', showPasswordToggle, ...props }, ref) => {
        const [showPassword, setShowPassword] = useState(false);
        const isPassword = type === 'password';
        const inputType = isPassword && showPassword ? 'text' : type;

        return (
            <div className="w-full mb-2">
                {label && (
                    <div className="flex justify-between">
                        <label className="block font-medium font-family-sans preset-4 text-neutral-950 mb-1">
                            {label}
                        </label>
                        {isPassword && <Link to="/reset-password" className="underline preset-5 text-neutral-600 hover:text-neutral-950">Forgot</Link>}
                    </div>
                )}
                <div className="relative">
                    <input ref={ref} type={inputType}
                           className={cn("w-full py-spacing-150 px-spacing-200 gap-spacing-100 rounded-8 transition-all duration-200 outline-none",
                        "flex items-center gap-2",
                        variant === 'default' ? "border border-neutral-300 bg-white" : undefined,
                        variant === 'outline' ? "border-2 border-neutral-900 bg-white" : undefined,
                        variant === 'error' ? "border border-red-500 bg-white" : undefined,
                        showPasswordToggle ? "pr-10" : undefined,
                        className
                    )}
                           {...props}
                    />
                    {showPasswordToggle && isPassword && (
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-700"
                        >
                            {showPassword ? (
                                <EyeOff className="w-5 h-5"/>
                            ) : (
                                <Eye className="w-5 h-5"/>
                            )}
                        </button>
                    )}
                </div>
                {(hint || error) && (
                    <div className="mt-1 gap-1 flex items-center">
                        <Info className="w-4 h-4"/>
                        <p className={cn(
                            "font-family-sans preset-5",
                            error ? "text-red-500" : "text-neutral-600"
                        )}>
                            {error || hint}
                        </p>
                    </div>
                )}
            </div>
        );
    }
);

TextInput.displayName = 'TextInput';

export default TextInput