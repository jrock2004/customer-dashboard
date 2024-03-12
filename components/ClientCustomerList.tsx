"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { UserIcon, TrashIcon } from "@heroicons/react/24/outline";

const fetchCustomers = async () => {
  const res = await fetch("/api/customers");
  const data = await res.json();

  return data.customers;
};

const formatPhoneNumber = (phoneNumber: string): string => {
  // format phone number that starts with the country code
  if (phoneNumber.startsWith("+")) {
    return phoneNumber
      .replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, "($2) $3-$4")
      .replace("+", "");
  }

  return phoneNumber;
};

export const ClientCustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const theadClass = "text-left p-3 text-primary";

  useEffect(() => {
    if (customers.length === 0) {
      fetchCustomers().then((data) => setCustomers(data));
    }
  }, []);

  return (
    <>
      {customers && customers.length > 0 ? (
        <div className="flex flex-col space-y-12">
          <div>
            <table className="w-full">
              <thead>
                <tr className="bg-purple-100 shadow-md">
                  <th className={theadClass}>First Name</th>
                  <th className={theadClass}>Last Name</th>
                  <th className={theadClass}>Email</th>
                  <th className={theadClass}>Phone</th>
                  <th className={`${theadClass} w-48`}>Membership Count</th>
                  <th className={`${theadClass} w-32 border-r-0`}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer: any, index) => {
                  const currentIndex = index + 1;
                  const isOddRow = currentIndex % 2 === 0;
                  const rowClass = `border ${isOddRow ? "bg-purple-50" : ""}`;

                  return (
                    <tr key={customer.id} className={rowClass}>
                      <td className={theadClass}>{customer.firstName}</td>
                      <td className={theadClass}>{customer.lastName}</td>
                      <td className={theadClass}>{customer.email}</td>
                      <td className={theadClass}>
                        {formatPhoneNumber(customer.phone)}
                      </td>
                      <td className={`${theadClass} text-center`}>
                        {customer.memberships.length}
                      </td>
                      <td className={`${theadClass} flex`}>
                        <div className="flex space-x-3">
                          <Button
                            aria-label={`View ${customer.firstName} ${customer.lastName} profile`}
                            size="small"
                            title={`View ${customer.firstName} ${customer.lastName} profile`}
                            variant="outlined"
                          >
                            <Link
                              href={`/customers/${customer.id}`}
                              aria-label={`View ${customer.firstName} ${customer.lastName} profile`}
                            >
                              <UserIcon className="h-4 w-4" />
                            </Link>
                          </Button>
                          <Button
                            aria-label={`Remove ${customer.firstName} ${customer.lastName} profile`}
                            size="small"
                            title={`Remove ${customer.firstName} ${customer.lastName} profile`}
                            variant="outlined"
                          >
                            <TrashIcon className="h-4 w-4" />
                          </Button>
                        </div>
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
