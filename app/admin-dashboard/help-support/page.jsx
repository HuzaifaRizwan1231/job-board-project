import dynamic from "next/dynamic";
import HelpSupport from "@/components/dashboard-pages/admin-dashboard/help-support";

export const metadata = {
  title: "Help & Support || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <HelpSupport />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
