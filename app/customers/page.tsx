import { ClientCustomerList } from "@/components/ClientCustomerList";
import Link from "next/link";

const Customers = () => {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Customers</h1>
        <button className="rounded-md bg-orange-400 px-3 py-2 text-white">
          <Link href="/customers/add">Add Customer</Link>
        </button>
      </div>
      <ClientCustomerList />
    </div>
  );
};

export default Customers;
