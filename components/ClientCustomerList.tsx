"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const fetchCustomers = async () => {
  const res = await fetch("/api/customers");
  const data = await res.json();

  return data.customers;
};

export const ClientCustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const theadClass = "text-left border-r p-3";

  useEffect(() => {
    if (customers.length === 0) {
      fetchCustomers().then((data) => setCustomers(data));
    }
  }, []);

  return (
    <>
      {customers && customers.length > 0 ? (
        <div className="flex flex-col space-y-3">
          <div>
            <table className="w-full border border-orange-400">
              <thead>
                <tr className="border-b">
                  <th className={theadClass}>First Name</th>
                  <th className={theadClass}>Last Name</th>
                  <th className={theadClass}>Email</th>
                  <th className={theadClass}>Phone</th>
                  <th className={theadClass}>Membership Count</th>
                  <th className={`${theadClass} w-28 border-r-0`}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer: any, index) => {
                  const customersLength = customers.length;
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
                      <td className={theadClass}>
                        {customer.memberships.length}
                      </td>
                      <td
                        className={`${theadClass} flex w-28 space-x-3 border-r-0`}
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
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};
