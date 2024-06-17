import React from "react";
import userdata from "../../../../../public/data/user.json";

export default function EducationPage({
  params,
}: {
  params: { title: string };
}) {
  // Find the education object with matching title from userData
  const education = userdata.user.education.find(
    (edu) => edu.title === params.title
  );

  // Display the description if education is found, otherwise show a message
  return (
    <div>
      {education ? (
        <>
          <h1>{education.title}</h1>
          <p>School: {education.school}</p>
          <p>Degree: {education.degree}</p>
          <p>Description: {education.description}</p>
          <p>Place: {education.place}</p>
        </>
      ) : (
        <p>Educational details not found for {params.title}</p>
      )}
    </div>
  );
}
