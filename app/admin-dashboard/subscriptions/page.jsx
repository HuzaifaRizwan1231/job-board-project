import dynamic from "next/dynamic";

import Subscriptions from "@/components/dashboard-pages/admin-dashboard/subscriptions";

export const metadata = {
  title: "Pricing || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <Subscriptions />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
