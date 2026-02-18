import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import path from "path";

// Get the absolute path to the project root
const projectRoot = path.resolve(__dirname);

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    qualities: [100, 75],
  },
  webpack: (config, { dir }) => {
    // Ensure webpack resolves from the project directory, not parent directories
    config.resolve = config.resolve || {};
    
    // Set the context to the project directory to prevent looking in parent directories
    config.context = projectRoot;
    
    // Override module resolution to ONLY look in the project's node_modules
    config.resolve.modules = [
      path.resolve(projectRoot, "node_modules"),
    ];
    
    // Set resolveLoader to also use project directory
    config.resolveLoader = config.resolveLoader || {};
    config.resolveLoader.modules = [
      path.resolve(projectRoot, "node_modules"),
    ];
    
    return config;
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
