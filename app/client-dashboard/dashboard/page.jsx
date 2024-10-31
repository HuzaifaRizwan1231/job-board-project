import dynamic from "next/dynamic";
import DashboadHome from "@/components/dashboard-pages/client-dashboard/dashboard";

export const metadata = {
  title: "Client Dashboard || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <DashboadHome />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
