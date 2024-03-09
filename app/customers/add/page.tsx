import prisma from "@/utils/db";
import { Card } from "@/components/Card";
import { addCustomer } from "./actions";
import Link from "next/link";

const getAllMemberships = async () => {
  const memberships = await prisma.membership.findMany();

  return {
    data: memberships,
  };
};

const Add = async () => {
  const response = await getAllMemberships();
  const memberships = response.data;

  return (
    <div className="flex flex-col space-y-3">
      <h1 className="text-xl font-semibold">Add a Customer</h1>
      <form className="flex flex-col space-y-8" action={addCustomer}>
        <Card>
          <div className="flex flex-col">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="border border-orange-400 p-3"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="border border-orange-400 p-3"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="initials">Initials</label>
            <input
              type="text"
              id="initials"
              name="initials"
              className="border border-orange-400 p-3"
            />
          </div>
        </Card>
        <Card>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-orange-400 p-3"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="border border-orange-400 p-3"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="imgUrl">Image URL</label>
            <input
              type="text"
              id="imgUrl"
              name="imgUrl"
              className="border border-orange-400 p-3"
            />
          </div>
        </Card>
        <Card>
          <div className="flex flex-col">
            <label htmlFor="membership">Membership</label>
            <select
              id="membership"
              name="membership"
              className="border border-orange-400 bg-white p-3"
            >
              <option value="">Select a membership</option>
              {memberships.map((membership) => {
                return (
                  <option key={membership.id} value={membership.id}>
                    {membership.title} - {membership.price}
                  </option>
                );
              })}
            </select>
          </div>
        </Card>
        <div className="flex justify-center">
          <div>
            <button className="mr-6 border border-orange-500 p-3">
              <Link href="/customers">Cancel</Link>
            </button>
            <button className="border bg-orange-500 p-3 text-white">
              Add Customer
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Add;
