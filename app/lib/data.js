import { client } from "./client";

export function fetchBanner() {
  const query = '*[_type == "banner"][0]';
  
  return client.fetch(query);
}

export function fetchProducts() {
  const query = '*[_type == "product"]';

  return client.fetch(query);
}

export function fetchProductBySlug(slug) {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;

  return client.fetch(query);
}