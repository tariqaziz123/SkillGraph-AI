const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export async function getDevelopers(skill?: string) {
  const url = new URL(`${API_URL}/developers`);

  if (skill?.trim()) {
    url.searchParams.set("skill", skill.trim());
  }

  const response = await fetch(url.toString(), {
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

export async function getSkills() {
  const response = await fetch(`${API_URL}/skills`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch skills");
  }

  return response.json();
}

export async function getTechnologies() {
  const response = await fetch(`${API_URL}/technologies`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch technologies");
  }

  return response.json();
}

export async function getCompanies() {
  const response = await fetch(`${API_URL}/companies`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch companies");
  }

  return response.json();
}