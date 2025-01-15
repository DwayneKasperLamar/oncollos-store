import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      }
    ]
  }
};

// experimental:{
//   ppr: 'incremental'
// },
//   devIndicators:{
//     appIsrStatus: true,
//     buildActivity: true,
//     buildActivityPosition: 'bottom-right'
//   }

export default nextConfig;
