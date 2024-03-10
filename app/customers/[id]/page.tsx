import Image from "next/image";
import prisma from "@/utils/db";
import { Card } from "@/components/Card";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

const getCustomer = async (id: string) => {
  const customer = await prisma.customer.findUniqueOrThrow({
    where: {
      id: parseInt(id),
    },
    include: {
      memberships: {
        include: { membership: true },
      },
    },
  });

  return {
    data: customer,
  };
};

const Customer = async ({ params }: CustomerProps) => {
  const response = await getCustomer(params.id);
  const customer = response.data;
  const memberships = customer.memberships;
  const tableCellClass = "text-left border-r p-3";

  return (
    <div className="flex space-x-10">
      <div className="flex flex-col space-y-10">
        <Card>
          <div className="flex max-w-48 flex-col">
            {customer.imgUrl ? (
              <Image
                className="h-36 w-36 self-center rounded-full"
                width={128}
                height={128}
                src={customer.imgUrl}
                alt={`${customer.firstName} ${customer.lastName}`}
              />
            ) : (
              <div className="relative h-36 w-36 self-center rounded-full bg-orange-300">
                <span className="absolute left-2.5 top-6 text-8xl tracking-wide text-white">
                  {customer.initials}
                </span>
              </div>
            )}
            <div>
              <span className="mt-8 block overflow-hidden text-ellipsis whitespace-nowrap text-nowrap text-center text-lg font-semibold">
                {customer.firstName} {customer.lastName}
              </span>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col space-y-3">
            <div className="flex flex-col">
              <span className="text-orange-400">Email:</span>
              <Link
                className="hover:text-underline"
                href={`mailto:${customer.email}`}
              >
                {customer.email}
              </Link>
            </div>
            <div className="flex flex-col">
              <span className="text-orange-400">Phone:</span>
              <Link
                className="hover:text-underline"
                href={`tel:${customer.phone}`}
              >
                {customer.phone}
              </Link>
            </div>
          </div>
        </Card>
        <div className="mt-20 flex justify-center">
          <Link
            className="flex border px-4 py-3 text-orange-400 hover:bg-orange-400 hover:text-white"
            href="/CustomersClient"
          >
            <ChevronLeftIcon className="mr-3 h-5 w-5 self-center text-inherit" />
            Back to Customers
          </Link>
        </div>
      </div>
      <div className="w-full">
        <div>
          <h2 className="mb-4 text-lg font-semibold">Active Memberships</h2>
          {memberships.length > 0 ? (
            <table className="w-full border border-orange-400">
              <thead>
                <tr className="border-b">
                  <th className={tableCellClass}>Title</th>
                  <th className={tableCellClass}>Description</th>
                  <th className={tableCellClass}>Price</th>
                  <th className={`${tableCellClass} border-r-0`}>Count</th>
                </tr>
              </thead>
              <tbody>
                {memberships.map((membership, index) => {
                  const membershipLength = memberships.length;
                  const currentIndex = index + 1;
                  const rowClass = `border-b ${
                    currentIndex === membershipLength ? "border-b-0" : ""
                  }`;
                  const formatPrice = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(+membership.membership.price);

                  return (
                    <tr key={membership.id} className={rowClass}>
                      <td className={tableCellClass}>
                        {membership.membership.title}
                      </td>
                      <td className={tableCellClass}>
                        {membership.membership.description}
                      </td>
                      <td className={tableCellClass}>{formatPrice}</td>
                      <td className={`${tableCellClass} border-r-0`}>
                        {membership.remaining}/
                        {membership.membership.totalCount}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <p>No active memberships</p>
          )}
        </div>
      </div>
    </div>
  );
};

export type CustomerProps = {
  params: {
    id: string;
  };
};

export default Customer;
