export default function EducationPage({
  params,
}: {
  params: { title: string };
}) {
  return <div>My Post: {params.title}</div>;
}
