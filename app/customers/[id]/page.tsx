import Image from "next/image";
import prisma from "@/utils/db";
import { Card } from "@/components/Card";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/Button";
import { PageTitle } from "@/components/PageTitle";

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
    <div className="flex flex-col md:flex-row md:space-x-10">
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
              <div className="relative h-32 w-32 self-center rounded-full bg-purple-100">
                <span className="absolute left-3.5 top-7 text-7xl tracking-wide text-primary">
                  {customer.initials}
                </span>
              </div>
            )}
            <div>
              <span className="mt-8 block overflow-hidden text-ellipsis whitespace-nowrap text-nowrap text-center text-2xl font-semibold">
                {customer.firstName} {customer.lastName}
              </span>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col space-y-3">
            <div className="flex flex-col">
              <span className="text-primary">Email:</span>
              <Link
                className="hover:underline hover:shadow-sm"
                href={`mailto:${customer.email}`}
              >
                {customer.email}
              </Link>
            </div>
            <div className="flex flex-col">
              <span className="text-primary">Phone:</span>
              <Link
                className="hover:underline hover:shadow-sm"
                href={`tel:${customer.phone}`}
              >
                {customer.phone}
              </Link>
            </div>
          </div>
        </Card>
        <div className="mt-20 flex justify-center">
          <Button size="small" width="w-full">
            <Link href="/customers" className="flex">
              <ChevronLeftIcon className="h-5 w-5 self-center text-inherit" />
              <span>Go Back</span>
            </Link>
          </Button>
        </div>
      </div>
      <div className="mt-12 w-full md:mt-0">
        <div>
          <PageTitle
            title="Active Memberships"
            variant="h2"
            additionalClasses="mb-4"
          />
          {memberships.length > 0 ? (
            <table className="w-full">
              <thead>
                <tr className="bg-purple-100 shadow-md">
                  <th className={tableCellClass}>Title</th>
                  <th className={tableCellClass}>Description</th>
                  <th className={tableCellClass}>Price</th>
                  <th className={`${tableCellClass} border-r-0`}>Count</th>
                </tr>
              </thead>
              <tbody>
                {memberships.map((membership, index) => {
                  const currentIndex = index + 1;
                  const isOddRow = currentIndex % 2 === 0;
                  const rowClass = `border ${isOddRow ? "bg-purple-50" : ""}`;
                  const formatPrice = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(+membership.membership.price);

                  return (
                    <tr key={membership.id} className={rowClass}>
                      <td className={`${tableCellClass} w-56`}>
                        <span
                          className="line-clamp-2 md:line-clamp-3"
                          title={membership.membership.title}
                        >
                          {membership.membership.title}
                        </span>
                      </td>
                      <td className={tableCellClass}>
                        <span
                          className="line-clamp-2"
                          title={membership.membership.description}
                        >
                          {membership.membership.description}
                        </span>
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
