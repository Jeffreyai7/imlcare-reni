import Link from "next/link";

export default function AdminLoginPage() {
  return (
    <main className="mx-auto w-full max-w-md flex-1 space-y-6 px-6 py-16">
      <h1 className="text-3xl font-semibold text-primary">Admin Login</h1>
      <p className="text-muted-foreground">Administrator sign-in will be available once authentication is connected.</p>
      <Link href="/" className="inline-block text-primary underline">Return to website</Link>
    </main>
  );
}
