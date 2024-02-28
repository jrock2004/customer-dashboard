import { ClientCustomerList } from "@/components/ClientCustomerList";

const CustomersClient = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-12">Customers</h1>
      <ClientCustomerList />
    </div>
  );
};

export default CustomersClient;
