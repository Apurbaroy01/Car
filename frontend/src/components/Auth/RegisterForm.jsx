"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Card, Fieldset, InputGroup, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaEye, FaUser } from "react-icons/fa";
import { TbPassword } from "react-icons/tb";

export default function RegisterForm() {
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
      const { data: session, error } = await authClient.signUp.email({
        name: data.name,
        email: data.email,
        password: data.password,
        callbackURL: "/",
      });

      if (error) {
        console.error("Registration error:", error);
        setError(error);
        return;
      }

      if (session?.user) {
        console.log("Registration success:", session);
        alert("Registration successful! Welcome, " + session.user.name + "!");
      } else {
        setError({ message: "Registration failed. Please check your credentials and try again." });
      }
    } catch (err) {
      console.error("Registration failed:", err);
      setError({ message: err?.message || "Unexpected error occurred. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-[400px] space-y-4">
      <Card className={`w-full rounded-md bg-white/80 p-6 shadow-sm ${error ? "border border-red-200" : ""}`}>
        <div className="mb-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Create Your Account</h1>
          <p className="mt-2 text-sm text-slate-500">Join us and get started with your new profile.</p>
        </div>

        {error && (
          <p className=" text-center rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
            {error.message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField fullWidth name="name" required>
            <Label>Name</Label>
            <InputGroup fullWidth>
              <InputGroup.Prefix>
                <FaUser className="size-4 text-muted" />
              </InputGroup.Prefix>
              <InputGroup.Input placeholder="Enter your name" required />
            </InputGroup>
          </TextField>

          <TextField fullWidth name="email" required>
            <Label>Email address</Label>
            <InputGroup fullWidth>
              <InputGroup.Prefix>
                <FaEnvelope className="size-4 text-muted" />
              </InputGroup.Prefix>
              <InputGroup.Input placeholder="name@email.com" required />
            </InputGroup>
          </TextField>

          <TextField fullWidth name="password" required>
            <Label>Password</Label>
            <InputGroup fullWidth>

              <InputGroup.Prefix>
                <TbPassword className="size-4 text-muted" />
              </InputGroup.Prefix>

              <InputGroup.Input placeholder="Enter password" type="password" required />
              <InputGroup.Suffix>
                <FaEye className="size-4 text-muted" />
              </InputGroup.Suffix>
            </InputGroup>
          </TextField>
          <Fieldset.Actions className="flex w-full">
            <Button className="w-full" type="submit" disabled={isLoading}>
              {isLoading ? "Signing up..." : "Sign up"}
            </Button>
          </Fieldset.Actions>
        </form>
        <p className="mt-2 space-y-3 text-center text-sm text-slate-600">I don&apos;t have an account?
          <Link href="/login" className="font-semibold text-slate-900 hover:text-slate-700"> Sign in</Link>
        </p>
      </Card>
    </div>
  );
}
