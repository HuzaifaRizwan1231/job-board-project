import dynamic from "next/dynamic";
import Projects from "@/components/dashboard-pages/admin-dashboard/projects";

export const metadata = {
  title: "Projects || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <Projects />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
