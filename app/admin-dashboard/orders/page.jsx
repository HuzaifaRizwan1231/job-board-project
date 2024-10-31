import dynamic from "next/dynamic";
import Orders from "@/components/dashboard-pages/admin-dashboard/orders";

export const metadata = {
  title: "Orders || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <Orders />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
