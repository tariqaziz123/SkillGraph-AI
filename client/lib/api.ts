const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export async function getDevelopers() {
  const response = await fetch(`${API_URL}/developers`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch developers");
  }

  return response.json();
}