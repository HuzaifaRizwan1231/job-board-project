import dynamic from "next/dynamic";
import ProfileSettings from "@/components/dashboard-pages/admin-dashboard/profile-settings";

export const metadata = {
  title: "Profile Settings || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <ProfileSettings />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
