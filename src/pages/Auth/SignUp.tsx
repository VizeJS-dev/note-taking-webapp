import * as React from "react";
import {useState} from "react";
import TextInput from "../../components/TextInput.tsx";
import Button from "../../components/Button.tsx";
import googleIcon from "../../assets/images/icon-google.svg";
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.svg";

export const SignUp = () => {
    // const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = password.length >= 8;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isEmailValid || !isPasswordValid) {
            alert("Please enter valid credentials.");
            return;
        }
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log({email, password});
        setIsLoading(false);
    }

    return (
        <>
            <div
                className="flex flex-col items-center gap-spacing-200 w-[90%] md:w-[540px] bg-neutral-0 rounded-12 shadow-lg lg:py-spacing-600 lg:px-spacing-600 md:py-spacing-600 md:px-spacing-400 py-spacing-500 px-spacing-200">

                {/*// Logo*/}
                <div className="flex items-center gap-[10px]">
                    <img src={logo} alt="notes logo"/>
                </div>

                {/*Welcome Text*/}
                <div className="text-center gap  -spacing-100">
                    <h1 className="font-family-sans font-bold text-neutral-950 preset-1">Create Your Account</h1>
                    <p className="preset-5 font-family-sans text-neutral-600">Sign up to start organizing your notes and boost your productivity.</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col w-full gap-spacing-200">
                    <TextInput
                        required={true}
                        label="Email Address"
                        type="email"
                        placeholder={"email@example.com"}
                        variant={!email && isLoading ? "error" : undefined}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextInput
                        required={true}
                        label="Password"
                        type="password"
                        showPasswordToggle={true}
                        hint="At least 8 characters"
                        variant={!password && isLoading ? "error" : undefined}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        isLoading={isLoading}
                        className="w-full"
                        variant="primary"
                    >Sign Up</Button>
                </form>

                <hr className="w-full border-neutral-200"/>
                <div className="flex flex-col w-full items-center gap-spacing-200 pt-[24px]">
                    <p className="font-family-sans preset-5 text-neutral-600">Or log in with:</p>
                    <Button
                        icon={<img src={googleIcon} alt="Google icon"/>}
                        className="w-full"
                        variant="border"
                    >Google</Button>
                </div>

                <hr className="w-full border-neutral-200"/>
                <p className="font-family-sans preset-5 text-neutral-600">Already have an account?
                    <Link to="/" className="ml-1 text-neutral-950">Login</Link>
                </p>
            </div>
        </>
    );
};