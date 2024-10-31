import dynamic from "next/dynamic";
import Location from "@/components/dashboard-pages/admin-dashboard/location";

export const metadata = {
  title: "Location || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <Location />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
