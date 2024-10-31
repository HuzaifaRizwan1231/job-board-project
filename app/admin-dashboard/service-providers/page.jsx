import dynamic from "next/dynamic";
import ServiceProviders from "@/components/dashboard-pages/admin-dashboard/service-providers";

export const metadata = {
  title: "Service Providers || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <ServiceProviders />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
