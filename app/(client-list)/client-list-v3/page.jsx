import dynamic from "next/dynamic";

import CandidatesList from "@/components/client-listing-pages/client-list-v3";

export const metadata = {
  title: "Client List V3 || Superio - Job Borad React NextJS Template",
  description: "Superio - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <CandidatesList />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
