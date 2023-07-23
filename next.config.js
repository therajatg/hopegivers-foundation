/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  env: {
    SANITY_TOKEN:
      "skOA9rhg5YJ8BTeb2Rtlv5EQRQ5FeuEhFebj5kvWzDcb64hodTAwD0Eff4cB9pFpJg9GNgKXO0H4K8AlQBwNG0UA2KfRmbP9J8OmM20Jz75LtinfOTaBKkts3PbNakEUAipPy363BlwyiMUx02powXVwKbaWJmWG5HgGSVoCmXk2XFMhohMK",
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
