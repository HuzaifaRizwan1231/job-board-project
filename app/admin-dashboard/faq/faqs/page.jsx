import dynamic from "next/dynamic";
import FAQ from "@/components/dashboard-pages/admin-dashboard/faq/faqs";

export const metadata = {
  title: "FAQ || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <FAQ />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
