export async function getFriends() {
  const res = await fetch(
    "http://localhost:3000/data/friends.json",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to load friends.json");
  }

  return res.json();
}