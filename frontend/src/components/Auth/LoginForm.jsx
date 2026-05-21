"use client";
import { Button, Card, Fieldset, InputGroup, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { FaEnvelope, FaEye } from "react-icons/fa";
import { TbPassword } from "react-icons/tb";



export default function LoginForm() {
    const handleSubmit = async (e) => {
        e.preventDefault();

    };

    return (
        <div className="w-[400px] space-y-4">
            <Card className="w-full rounded-md bg-white/80 p-6 shadow-sm">
                <div className="mb-4 text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Welcome Back</h1>
                    <p className="mt-2 text-sm text-slate-500">Sign in to continue to your dashboard.</p>
                </div>

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
                        <Button className="w-full" type="submit">
                            Login
                        </Button>
                    </Fieldset.Actions>
                </form>
                <p className="text-center">I don&apos;t have an account? <Link href="/register" className="text-blue-500 hover:underline">Sign up</Link></p>
            </Card>
        </div>
    );
}
