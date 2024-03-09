"use server";
import prisma from "@/utils/db";
import { redirect } from "next/navigation";

export async function addCustomer(formData: FormData) {
  const rawMembership = formData.get("membership") as string;

  if (rawMembership === null) throw new Error("Membership is required");

  const membership = await prisma.membership.findUnique({
    where: { id: parseInt(rawMembership) },
  });

  if (membership === null) throw new Error("Membership not found");

  const data = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    initials: formData.get("initials") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    imgUrl: formData.get("imgUrl") as string,
    createdAt: new Date(),
    updatedAt: new Date(),
    memberships: {
      connect: {
        id: membership.id,
      },
    },
  };

  if (data.firstName === "") throw new Error("First name is required");
  if (data.lastName === "") throw new Error("Last name is required");
  if (data.initials === "") throw new Error("Initials are required");
  if (data.email === "") throw new Error("Email is required");
  if (data.phone === "") throw new Error("Phone is required");

  const customer = await prisma.customer.create({
    data,
  });

  redirect(`/customers/${customer.id}`);
}
