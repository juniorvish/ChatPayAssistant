module.exports = {
  reactStrictMode: true,
  env: {
    USDC_API: 'https://usdc.com/api',
    SOLANA_PAY_API: 'https://solana.com/api',
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
      };
    }
    return config;
  },
};