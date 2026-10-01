import { env } from '@/shared/config/env';

// Cliente HTTP único: todas las features lo reutilizan.
export async function http(path, { method = 'GET', body } = {}) {
  const res = await fetch(`${env.apiUrl}/api${path}`, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.message || `Error ${res.status}`);
  }

  return res.status === 204 ? null : res.json();
}
