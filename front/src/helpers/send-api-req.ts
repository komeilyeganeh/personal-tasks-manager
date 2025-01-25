type Method = "GET" | "POST" | "PUT" | "DELETE";

function returnCorrectReq(method: string, data: unknown): RequestInit {
  if (method === "GET") {
    return {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
  return {
    method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
}

export async function sendApiReq<T>(
  url: string,
  method: Method,
  data: unknown = {}
): Promise<T> {
  const res = await fetch(url, returnCorrectReq(method, data));
  if (!res.ok) {
    const message = `An error has occured: ${res.status}`;
    throw new Error(message);
  }

  return (await res.json()) as Promise<T>;
}
