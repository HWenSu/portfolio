// app/api/get-images/route.js
import fs from "fs";
import path from "path";

export async function GET() {
  const dirPath = path.join(process.cwd(), "public/image/graphic");

  try {
    const files = fs.readdirSync(dirPath);
    const images = files
      .filter((file) => /\.(png|jpe?g|gif|webp)$/i.test(file))
      .map((file) => `/image/graphic/${file}`);

    return Response.json(images);
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to read image directory." }),
      {
        status: 500,
      }
    );
  }
}
