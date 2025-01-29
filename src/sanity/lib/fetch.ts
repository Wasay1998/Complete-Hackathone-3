// lib/fetch.ts
import { createClient } from "next-sanity";

// Sanity client setup
const client = createClient({
  projectId: 'xhyri615', // Aapka Sanity project ID
  dataset: 'production', // Dataset name
  useCdn: true, // CDN use karein
  apiVersion: '2025-01-13', // API version
});

// Fetch function
export async function sanityfetch({ query, params = {} }: { query: string, params?: Record<string, unknown> }) {
  return await client.fetch(query, params);
}