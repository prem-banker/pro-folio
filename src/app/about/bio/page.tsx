import userdata from "../../../../public/data/user.json";

export default function BioPage({}: {}) {
  return <div>{userdata.user.bio}</div>;
}
