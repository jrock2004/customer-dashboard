import Image from "next/image";
import prisma, { TCustomer, TMembership } from "@/utils/db";
import { Card } from "@/components/Card";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

const getCustomer = async (id: string) => {
  const customer = await prisma.customer.findUniqueOrThrow({
    where: {
      id: parseInt(id),
    },
    include: {
      memberships: true,
    },
  });

  return {
    data: customer,
  };
};

const Customer = async ({ params }: CustomerProps) => {
  const response = await getCustomer(params.id);
  const customer = response.data;
  const memberships: TMembership[] = customer.memberships;
  const tableCellClass = "text-left border-r p-3";

  return (
    <div className="flex space-x-10">
      <div className="flex flex-col space-y-10">
        <Card>
          <div className="max-w-48 flex flex-col">
            {customer.imgUrl ? (
              <Image
                className="w-36 h-36 rounded-full self-center"
                width={128}
                height={128}
                src={customer.imgUrl}
                alt={`${customer.firstName} ${customer.lastName}`}
              />
            ) : (
              <div className="bg-orange-300 w-36 h-36 rounded-full relative self-center">
                <span className="absolute top-6 left-2.5 text-8xl text-white tracking-wide">
                  {customer.initials}
                </span>
              </div>
            )}
            <div>
              <span className="block text-center mt-8 font-semibold text-lg text-ellipsis overflow-hidden text-nowrap whitespace-nowrap">
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
            className="text-orange-400 border px-4 py-3 flex hover:bg-orange-400 hover:text-white"
            href="/customers"
          >
            <ChevronLeftIcon className="h-5 w-5 text-inherit self-center mr-3" />
            Back to Customers
          </Link>
        </div>
      </div>
      <div className="w-full">
        <div>
          <h2 className="font-semibold text-lg mb-4">Active Memberships</h2>
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
                {memberships.map((membership, index: number) => {
                  const membershipLength = memberships.length;
                  const currentIndex = index + 1;
                  const rowClass = `border-b ${
                    currentIndex === membershipLength ? "border-b-0" : ""
                  }`;
                  const formatPrice = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(+membership.price);

                  return (
                    <tr key={membership.id} className={rowClass}>
                      <td className={tableCellClass}>{membership.title}</td>
                      <td className={tableCellClass}>
                        {membership.description}
                      </td>
                      <td className={tableCellClass}>{formatPrice}</td>
                      <td className={`${tableCellClass} border-r-0`}>0/0</td>
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
