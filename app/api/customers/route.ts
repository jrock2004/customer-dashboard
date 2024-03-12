import prisma from "@/utils/db";
export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request) {
  const customers = await prisma.customer.findMany({
    include: {
      memberships: true,
    },
    orderBy: {
      id: "asc",
    },
  });

  await new Promise((resolve) => setTimeout(resolve, 6000));

  return Response.json({
    customers,
  });
}
