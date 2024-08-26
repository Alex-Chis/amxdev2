let views = 0;

export async function GET(req) {
  views++;

  return new Response(JSON.stringify({ views }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
