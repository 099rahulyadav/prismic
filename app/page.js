import { PrismicRichText } from "@prismicio/react";
import { createClient } from "../prismicio";

export default async function Home() {
  const client = createClient();

  // Use getSingle instead of getBySingle
  const page = await client.getSingle("homepage");

  return (
    <main className="prose">
      <h1>{page.data.title}</h1>
      <PrismicRichText field={page.data.content} />
    </main>
  );
}