import Link from "next/link";

export default async function AssessmentDetailsPage({
  params,
}: {
  params: Promise<{ assessmentId: string }>;
}) {
  const { assessmentId } = await params;

  return (
    <>
      <Link href="/admin/dashboard/assessments" className="text-primary underline">Back to assessments</Link>
      <h1 className="text-3xl font-semibold text-primary">Assessment Details</h1>
      <p>Assessment reference: <span className="font-mono">{assessmentId}</span></p>
      <p className="text-muted-foreground">Assessment details will be loaded here once the data source is connected.</p>
    </>
  );
}
