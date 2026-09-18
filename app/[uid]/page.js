import { PrismicRichText } from "@prismicio/react";
import { createClient } from "../../prismicio";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType("page");

  return pages.map((page) => ({
    uid: page.uid,
  }));
}

export default async function DynamicPage({ params }) {
  const { uid } = await params;

  const client = createClient();

  const page = await client
    .getByUID("page", uid)
    .catch(() => notFound());

  return (
    <main className="prose">
      <h1>{page.data.title}</h1>
      <PrismicRichText field={page.data.content} />
    </main>
  );
}