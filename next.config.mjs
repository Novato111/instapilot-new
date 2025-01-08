/** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: [
      
//       "scontent.cdninstagram.com",
//       "instagram.fbom23-1.fna.fbcdn.net", 
// "scontent-iad3-1.cdninstagram.com"// Add this domain here
//     ],
//   },
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Accepts all domains
      },
    ],
  },
};

export default nextConfig;
