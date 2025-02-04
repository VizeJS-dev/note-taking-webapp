import TextInput from "../../components/TextInput.tsx";
import Button from "../../components/Button.tsx";
import {useState} from "react";
import * as React from "react";

export const ResetYourPassword = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        if (password !== passwordConfirm) {
            alert("Passwords do not match");
        }
        e.preventDefault();
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log({password});
        setIsLoading(false);
    }

    return (
        <>
            <div className="flex flex-col items-center w-[90%] md:w-[540px] bg-neutral-0 rounded-12 shadow-lg lg:py-spacing-600 lg:px-spacing-600 md:py-spacing-600 md:px-spacing-400 py-spacing-500 px-spacing-200">
                <div className="flex flex-col w-full items-center gap-spacing-200">
                    {/*// Logo*/}
                    <div className="flex items-center gap-[10px]">
                        <img src="/src/assets/images/logo.svg" alt="notes logo"/>
                    </div>

                    {/*Welcome Text*/}
                    <div className="flex flex-col text-center gap-spacing-100">
                        <h1 className="font-family-sans font-bold text-neutral-950 preset-1">Reset Your Password</h1>
                        <p className="preset-5 font-family-sans text-neutral-600">Choose a new password to secure your account.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col w-full gap-spacing-200 pt-[24px]">
                        <TextInput
                            required={true}
                            label="New Password"
                            type="password"
                            variant={!password && isLoading ? "error" : undefined}
                            showPasswordToggle={true}
                            hint="At least 8 characters"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <TextInput
                            required={true}
                            label="Confirm New Password"
                            type="password"
                            variant={!passwordConfirm && isLoading ? "error" : undefined}
                            showPasswordToggle={true}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                        />
                        <Button
                            type="submit"
                            isLoading={isLoading}
                            className="w-full"
                            variant="primary"
                        >Reset Password</Button>
                    </form>
                </div>
            </div>
        </>
    );
};