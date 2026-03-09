// POST /api/posts

import { storePost } from "@/lib/posts";

export async function POST(request) {
  const formData = await request.formData();
  const title = formData.get("title");
  const image = formData.get("image");
  const content = formData.get("content");

  const imageUrl = image ? image.name : "";

  await storePost({
    imageUrl,
    title,
    content,
    userId: 1,
  });

  return new Response(null, { status: 201 });
}
