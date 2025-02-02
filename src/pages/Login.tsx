import {useState} from "react";
import * as React from "react";
import TextInput from "../components/TextInput.tsx";
import Button from "../components/Button.tsx";
import googleIcon from "../assets/images/icon-google.svg";

export const Login = () => {
    // const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log({email, password});
        setIsLoading(false);
    }

    return (
        <>
                <div className="w-[90%] md:w-[540px] h-[623] bg-neutral-0 rounded-lg shadow-lg p-6">
                    <div className="flex flex-col items-center space-y-6">
                        {/*// Logo*/}
                        <div className="flex items-center space-x-2">
                            <img src="/src/assets/images/logo.svg" alt="notes logo"/>
                        </div>

                        {/*Welcome Text*/}
                        <div className="text-center spacy-y-1">
                            <h1 className="font-family-sans font-bold text-neutral-950 preset-1">Welcome to Note</h1>
                            <p className="preset-5 font-family-sans text-neutral-600">Please login to continue</p>
                        </div>

                        <form onSubmit={handleSubmit} className="w-full">
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
                                variant={!password && isLoading ? "error" : undefined}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button
                                type="submit"
                                isLoading={isLoading}
                                className="w-full"
                                variant="primary"
                            >Login</Button>
                        </form>

                        <div className="flex flex-col w-full items-center gap-4 justify-between">
                            <hr className="w-full border-neutral-200"/>
                            <p className="font-family-sans preset-5 text-neutral-600">Or log in with:</p>
                            <Button
                                icon={<img src={googleIcon} alt="Google icon" />}
                                className="w-full"
                                variant="border"
                            >Google</Button>
                        </div>

                        <hr className="w-full border-neutral-200"/>
                        <p className="font-family-sans preset-5 text-neutral-600">No account yet? <a className="text-neutral-950" href="">Sign Up</a></p>
                    </div>
                </div>
        </>
    );
};