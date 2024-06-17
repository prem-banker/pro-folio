import React from "react";
import userdata from "../../../../../public/data/user.json";

export default function WorkPage({ params }: { params: { company: string } }) {
  // Find the work object with matching company from userData
  const work = userdata.user.work.find(
    (job) => job.company.toLowerCase() === params.company.toLowerCase()
  );

  // Display the details if work is found, otherwise show a message
  return (
    <div>
      {work ? (
        <>
          <h1>{work.title}</h1>
          <p>Company: {work.company}</p>
          <p>Start: {work.start}</p>
          <p>End: {work.end}</p>
          <p>Description: {work.description}</p>
          <p>Place: {work.place}</p>
        </>
      ) : (
        <p>Work details not found for {params.company}</p>
      )}
    </div>
  );
}
