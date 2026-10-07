import Link from "next/link";

// Connect server-side authorization before adding private assessment data.
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col md:flex-row">
      <aside className="border-b bg-card p-6 md:w-64 md:border-r md:border-b-0">
        <p className="mb-6 font-semibold text-primary">Impact Lives Admin</p>
        <nav aria-label="Admin navigation" className="flex flex-col gap-4">
          <Link href="/admin/dashboard">Dashboard</Link>
          <Link href="/admin/dashboard/assessments">Assessments</Link>
          <Link href="/admin/login">Login</Link>
          <Link href="/">Public website</Link>
        </nav>
      </aside>
      <main className="min-w-0 flex-1 space-y-6 p-6 md:p-10">{children}</main>
    </div>
  );
}
