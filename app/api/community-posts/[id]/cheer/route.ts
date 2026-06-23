import { getSupabase } from "@/lib/supabase";

function errorResponse(message: string, status: number) {
  return Response.json({ error: message }, { status });
}

export async function POST(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await context.params;
    const postId = Number(id);
    const body: unknown = await request.json();

    if (
      !Number.isSafeInteger(postId) ||
      postId < 1 ||
      !body ||
      typeof body !== "object" ||
      Array.isArray(body)
    ) {
      return errorResponse("Invalid request.", 400);
    }

    const visitorId = (body as Record<string, unknown>).visitorId;

    if (
      typeof visitorId !== "string" ||
      visitorId.length < 16 ||
      visitorId.length > 100
    ) {
      return errorResponse("Invalid visitor.", 400);
    }

    const supabase = getSupabase();
    const { data, error } = await supabase.rpc("add_maple_cheer", {
      p_post_id: postId,
      p_visitor_id: visitorId,
    });

    if (error) {
      console.error("Maple Cheer API error:", error);

      if (error.message === "Post not found.") {
        return errorResponse(error.message, 404);
      }

      return errorResponse("Unable to send your Maple Cheer.", 500);
    }

    return Response.json({ cheersCount: data });
  } catch (error) {
    console.error("Maple Cheer POST error:", error);
    return errorResponse("Unable to send your Maple Cheer.", 500);
  }
}
