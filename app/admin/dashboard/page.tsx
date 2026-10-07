import Link from "next/link";

export default function DashboardPage() {
  return (
    <>
      <h1 className="text-3xl font-semibold text-primary">Dashboard</h1>
      <p className="text-muted-foreground">This dashboard scaffold is awaiting authentication and assessment data.</p>
      <Link href="/admin/dashboard/assessments" className="inline-block text-primary underline">View assessments</Link>
    </>
  );
}
