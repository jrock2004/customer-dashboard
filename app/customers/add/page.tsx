import prisma from "@/utils/db";
import { Card } from "@/components/Card";
import { addCustomer } from "./actions";
import Link from "next/link";
import { PageTitle } from "@/components/PageTitle";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { ClientAddSubmitBtn } from "@/components/ClientAddSubmitBtn";

const getAllMemberships = async () => {
  const memberships = await prisma.membership.findMany();

  return {
    data: memberships,
  };
};

const Add = async () => {
  const response = await getAllMemberships();
  const memberships = response.data;
  const labelClasses = "block mb-2 text-sm font-medium text-primary";

  return (
    <div className="flex flex-col space-y-3">
      <PageTitle title="Add a Customer" />
      <form
        className="flex flex-col space-y-8 md:max-w-5xl"
        action={addCustomer}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <div className="mb-4 flex flex-col">
              <label className={labelClasses} htmlFor="firstName">
                First Name
              </label>
              <Input required type="text" id="firstName" name="firstName" />
            </div>
            <div className="mb-4 flex flex-col">
              <label className={labelClasses} htmlFor="lastName">
                Last Name
              </label>
              <Input required type="text" id="lastName" name="lastName" />
            </div>
            <div className="mb-4 flex flex-col">
              <label className={labelClasses} htmlFor="initials">
                Initials
              </label>
              <Input
                required
                type="text"
                id="initials"
                maxLength={2}
                name="initials"
              />
            </div>
          </Card>
          <Card>
            <div className="mb-4 flex flex-col">
              <label className={labelClasses} htmlFor="email">
                Email
              </label>
              <Input required type="email" id="email" name="email" />
            </div>
            <div className="mb-4 flex flex-col">
              <label className={labelClasses} htmlFor="phone">
                Phone
              </label>
              <Input required type="text" id="phone" name="phone" />
            </div>
            <div className="mb-4 flex flex-col">
              <label className={labelClasses} htmlFor="imgUrl">
                Image URL
              </label>
              <Input type="text" id="imgUrl" name="imgUrl" />
            </div>
          </Card>
        </div>
        <Card>
          <div className="flex flex-col">
            <label className={labelClasses} htmlFor="membership">
              Membership
            </label>
            <select
              id="membership"
              name="membership"
              className="appearance-none rounded-sm border border-gray-400 bg-white p-3 text-sm focus:border-primary focus:ring-primary"
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
          <div className="flex space-x-5">
            <Button variant="outlined">
              <Link href="/customers">Cancel</Link>
            </Button>
            <ClientAddSubmitBtn />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Add;
