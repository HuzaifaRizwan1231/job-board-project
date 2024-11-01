import dynamic from "next/dynamic";
import Category from "@/components/dashboard-pages/admin-dashboard/faq/category";

export const metadata = {
  title: "FAQ Category || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <Category />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
