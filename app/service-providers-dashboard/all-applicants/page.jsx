import dynamic from "next/dynamic";
import AllApplicants from "@/components/dashboard-pages/service-providers-dashboard/all-applicants";

export const metadata = {
  title: "All Applicants || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <AllApplicants />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
