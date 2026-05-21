import RegisterForm from "../../../components/Auth/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-zinc-50 dark:bg-black py-12">
      <div className="mx-auto w-full max-w-md px-4">
        <RegisterForm />
      </div>
    </div>
  );
}
