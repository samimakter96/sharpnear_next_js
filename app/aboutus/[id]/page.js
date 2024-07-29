import teamDetails from "@/data/team";

function DeveloperDetails({ params }) {
  const member = teamDetails.find((member) => member.id === Number(params.id));

  if (!member) {
    return <h1>Developer doesn't exist</h1>;
  }
  return (
    <div>
      <h1>{member.name}</h1>
      <p>{member.role}</p>
    </div>
  );
}

export default DeveloperDetails;
