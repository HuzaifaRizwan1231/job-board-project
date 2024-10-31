import dynamic from "next/dynamic";
import Partners from "@/components/dashboard-pages/admin-dashboard/partners";

export const metadata = {
  title: "Partners || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <Partners />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
