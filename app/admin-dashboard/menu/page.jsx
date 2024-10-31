import dynamic from "next/dynamic";
import Menu from "@/components/dashboard-pages/admin-dashboard/menu";

export const metadata = {
  title: "Menu || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <Menu />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
