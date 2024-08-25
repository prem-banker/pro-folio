import userdata from "../../../../../../public/data/user.json";

export default function EducationMobile({
  params,
}: {
  params: { title: string };
}) {
  // Find the education object with matching title from userData
  const education = userdata.user.education.find(
    (edu) => edu.title === params.title
  );

  return (
    <div className="h-full p-4">
      {education.description.split("\n").map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
}
