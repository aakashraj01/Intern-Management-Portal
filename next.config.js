/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    loader: "akamai",
    path: "",
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/sandbox": { page: "/sandbox" },
      "/mainPanel": { page: "/mainPanel" },
      "/codeRepo": { page: "/codeRepo" },
      "/docs": { page: "/docs" },
      "/submitTask": { page: "/submitTask" },
      "/internSearch": { page: "/internSearch" },
      "/dataRepresent": { page: "/dataRepresent" },
    };
  },
  reactStrictMode: false,
};
