import dynamic from "next/dynamic";
import ServiceProvidersReviews from "@/components/dashboard-pages/admin-dashboard/service-providers-reviews";

export const metadata = {
  title: "Service Providers || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <ServiceProvidersReviews />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
