import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            NextJs Is a great Framework
          </Link>
        </li>
        <li>something else</li>
      </ul>
    </>
  );
}
