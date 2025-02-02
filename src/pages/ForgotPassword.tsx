import TextInput from "../components/TextInput.tsx";
import Button from "../components/Button.tsx";
import {useState} from "react";
import * as React from "react";

export const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log({email});
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
                        <Button
                            type="submit"
                            isLoading={isLoading}
                            className="w-full"
                            variant="primary"
                        >Send Reset Link</Button>
                    </form>
                </div>
            </div>
        </>
    );
};