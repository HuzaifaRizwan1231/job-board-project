import dynamic from "next/dynamic";
import Messages from "@/components/dashboard-pages/admin-dashboard/messages";

export const metadata = {
  title: "Messages Reviews || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <Messages />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
