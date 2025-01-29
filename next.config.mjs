/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['cdn.sanity.io'], // Add 'cdn.sanity.io' to allow loading images from this domain
    },
  };
  
  export default nextConfig; // Use export default instead of module.exports
  