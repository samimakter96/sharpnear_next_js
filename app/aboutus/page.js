import Link from "next/link";
import teamDetails from "@/data/team";

function AboutUs() {
  return (
    <main className="mt-10">
      <div>This is AboutUs Page</div>
      <h1>Our Team</h1>
      <ul>
        {teamDetails.map((member) => (
          <li key={member.id}>
            <Link href={`/aboutus/${member.id}`}>
              {member.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default AboutUs;
