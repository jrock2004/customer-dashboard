import Link from "next/link";
import prisma, { TCustomer } from "@/utils/db";

const getAllCustomers = async () => {
  const customers = await prisma.customer.findMany();

  return {
    data: customers,
  };
};

const Customers = async () => {
  const customers = await getAllCustomers();
  const theadClass = "text-left border-r p-3";

  return (
    <div className="flex flex-col space-y-3">
      <h1 className="text-xl font-semibold">Customers</h1>
      <div>
        <table className="w-full border border-orange-400">
          <thead>
            <tr className="border-b">
              <th className={theadClass}>First Name</th>
              <th className={theadClass}>Last Name</th>
              <th className={theadClass}>Email</th>
              <th className={theadClass}>Phone</th>
              <th className={`${theadClass} border-r-0 w-28`}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.data.map((customer: TCustomer, index: number) => {
              const customersLength = customers.data.length;
              const currentIndex = index + 1;
              const rowClass = `border-b ${
                currentIndex === customersLength ? "border-b-0" : ""
              }`;

              return (
                <tr key={customer.id} className={rowClass}>
                  <td className={theadClass}>{customer.firstName}</td>
                  <td className={theadClass}>{customer.lastName}</td>
                  <td className={theadClass}>{customer.email}</td>
                  <td className={theadClass}>{customer.phone}</td>
                  <td
                    className={`${theadClass} flex space-x-3 w-28 border-r-0`}
                  >
                    <Link
                      className="text-orange-500"
                      href={`/customers/${customer.id}`}
                    >
                      View
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
