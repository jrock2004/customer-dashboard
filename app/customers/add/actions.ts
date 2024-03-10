"use server";
import prisma from "@/utils/db";
import { redirect } from "next/navigation";

export async function addCustomer(formData: FormData) {
  const rawMembership = formData.get("membership") as string;

  const membership =
    rawMembership !== ""
      ? await prisma.membership.findUnique({
          where: { id: parseInt(rawMembership) },
        })
      : null;

  const data = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    initials: formData.get("initials") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    imgUrl: formData.get("imgUrl") as string,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const customer = await prisma.customer.create({
    data,
  });

  if (membership === null) return redirect(`/customers/${customer.id}`);

  await prisma.customerMembership.create({
    data: {
      customerId: customer.id,
      membershipId: membership.id,
      remaining: membership.totalCount,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  redirect(`/customers/${customer.id}`);
}
