import prisma from "@/utils/db";
export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request) {
  const customers = await prisma.customer.findMany();

  // await new Promise((resolve) => setTimeout(resolve, 2000));

  return Response.json({
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
    customers,
  });
}
