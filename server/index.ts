import express from "express";
import compression from "compression";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Enable gzip compression
  app.use(compression({ level: 6 }));

  // Security & performance headers
  app.use((req, res, next) => {
    res.set({
      "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "X-Content-Type-Options": "nosniff",
      "Permissions-Policy": "camera=(), geolocation=(), microphone=()",
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Resource-Policy": "same-origin"
    });
    
    // Cache control based on file type
    if (req.path.match(/\.(js|css|woff2|woff|ttf|eot)$/)) {
      res.set("Cache-Control", "public, max-age=31536000, immutable");
    } else if (req.path.match(/\.(png|jpg|jpeg|gif|svg|webp|avif|ico)$/)) {
      res.set("Cache-Control", "public, max-age=86400, stale-while-revalidate=604800");
    } else if (req.path.endsWith(".html") || req.path === "/") {
      res.set("Cache-Control", "public, max-age=60, stale-while-revalidate=604800");
    }
    
    next();
  });

  // RUM endpoint for Web Vitals (accepts beacons, doesn't need to do anything)
  app.post("/rum", express.json(), (req, res) => {
    // In production, you could log these metrics or send to an analytics service
    res.status(204).send();
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "..", "dist", "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = parseInt(process.env.PORT || "5000", 10);

  server.listen(port, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${port}/`);
  });
}

startServer().catch(console.error);
