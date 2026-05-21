import LoginForm from "../../components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-zinc-50 dark:bg-black py-12">
      <div className="mx-auto w-full max-w-md px-4">
        <h1 className="mb-6 text-center text-2xl font-semibold text-slate-900">Sign in to your account</h1>
        <LoginForm />
      </div>
    </div>
  );
}
