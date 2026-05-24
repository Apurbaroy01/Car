"use client";
import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button, Card, Fieldset, InputGroup, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { FaEnvelope, FaEye } from "react-icons/fa";
import { TbPassword } from "react-icons/tb";



export default function LoginForm() {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log("Form submitted", data);

        try {
            const { data: session, error } = await authClient.signIn.email({
                email: data.email, // required
                password: data.password, // required
                rememberMe: true,
                callbackURL: "/",
            });

            if (error) {
                console.error("Login error:", error);
                setError(error);
                return;
            }

            if (session?.user) {
                console.log("Login success:", session);
                alert("Login successful! Welcome back, " + session.user.name + "!");
            } else {
                setError({ message: "Login failed. Please check your credentials and try again." });
            }
        } catch (err) {
            console.error("Login failed:", err);
            setError({ message: err?.message || "Unexpected error occurred. Please try again." });
        } finally {
            setIsLoading(false);
        }

    };

    return (
        <div className="w-[400px] space-y-4">
            <Card className={`w-full rounded-md bg-white/80 p-6 shadow-sm ${error ? "border border-red-200" : ""}`}>
                <div className="mb-2 text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Welcome Back</h1>
                    <p className="mt-2 text-sm text-slate-500">Sign in to continue to your dashboard.</p>
                </div>

                {error && (
                    <p className=" text-center rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                        {error.message}
                    </p>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <TextField fullWidth name="email">
                        <Label>Email address</Label>
                        <InputGroup fullWidth>
                            <InputGroup.Prefix>
                                <FaEnvelope className="size-4 text-muted" />
                            </InputGroup.Prefix>
                            <InputGroup.Input placeholder="name@email.com" />
                        </InputGroup>
                    </TextField>
                    <TextField fullWidth name="password">
                        <Label>Password</Label>
                        <InputGroup fullWidth>
                            <InputGroup.Prefix>
                                <TbPassword className="size-4 text-muted" />
                            </InputGroup.Prefix>

                            <InputGroup.Input placeholder="Enter password" type="password" />
                            <InputGroup.Suffix>
                                <FaEye className="size-4 text-muted" />
                            </InputGroup.Suffix>
                        </InputGroup>
                    </TextField>
                    <Fieldset.Actions className="flex w-full">
                        <Button className="w-full" type="submit" disabled={isLoading}>
                            {isLoading ? "Logging in..." : "Login"}
                        </Button>
                    </Fieldset.Actions>
                </form>
                <div className="mt-2 space-y-3 text-center text-sm text-slate-600">
                    <p>
                        Don&apos;t have an account? <Link href="/register" className="font-semibold text-slate-900 hover:text-slate-700">Sign up</Link>
                    </p>
                    <p>
                        <Link href="/forgot-password" className="font-semibold text-slate-900 hover:text-slate-700">Forgot password?</Link>
                    </p>
                </div>
            </Card>
        </div>
    );
}
