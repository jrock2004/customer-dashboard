import { Button } from "@/components/Button";
import { ClientCustomerList } from "@/components/ClientCustomerList";
import { PageTitle } from "@/components/PageTitle";
import Link from "next/link";

const Customers = () => {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex items-center justify-between">
        <PageTitle title="Customers" />
        <Button variant="contained">
          <Link href="/customers/add">Add Customer</Link>
        </Button>
      </div>
      <ClientCustomerList />
    </div>
  );
};

export default Customers;
