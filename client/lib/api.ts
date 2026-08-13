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

export async function getDeveloper(id: string) {
  const response = await fetch(`${API_URL}/developers/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    if (response.status === 404) {
      return null;
    }

    throw new Error("Failed to fetch developer");
  }

  return response.json();
}

export async function getDeveloperProjects(id: string) {
  const response = await fetch(
    `${API_URL}/developers/${id}/projects`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  return response.json();
}

export async function getRecommendations(id: string) {
  const response = await fetch(
    `${API_URL}/developers/${id}/recommendations`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch recommendations");
  }

  return response.json();
}