import dynamic from "next/dynamic";

import CandidatesList from "@/components/client-listing-pages/client-list-v2";

export const metadata = {
  title: "Candidates List V2 || Superio - Job Borad React NextJS Template",
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
