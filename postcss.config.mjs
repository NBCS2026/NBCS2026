import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
  // Explicitly set the working directory to prevent parent directory resolution
  cwd: __dirname,
};

export default config;
