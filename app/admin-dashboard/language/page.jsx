import dynamic from "next/dynamic";
import Language from "@/components/dashboard-pages/admin-dashboard/language";

export const metadata = {
  title: "Language || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <Language />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
