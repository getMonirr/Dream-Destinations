"use server";

export async function getServerSideData(url: string) {
  const res = await fetch(url, {
    next: {
      revalidate: 30,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
