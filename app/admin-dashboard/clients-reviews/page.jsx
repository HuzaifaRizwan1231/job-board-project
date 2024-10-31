import dynamic from "next/dynamic";
import ClientsReviews from "@/components/dashboard-pages/admin-dashboard/clients-reviews";

export const metadata = {
  title: "Clients Reviews || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <ClientsReviews />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
