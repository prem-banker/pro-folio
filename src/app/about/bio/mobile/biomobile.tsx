import userdata from "../../../../../public/data/user.json";

export default function BioMobile({}: {}) {
  return (
    <div className="h-full p-4">
      {userdata.user.bio.split("\n").map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
}
