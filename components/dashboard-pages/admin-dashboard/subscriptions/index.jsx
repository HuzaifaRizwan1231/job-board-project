import Pricing from "./components/Pricing";

const index = () => {
  return (
    <section className="dashboard-outer">
      <div className="sec-title text-center">
        <h2>Pricing Packages</h2>
        <div className="text">
          Lorem ipsum dolor sit amet elit, sed do eiusmod tempor.
        </div>
      </div>
      {/* End title */}
      <Pricing />
      {/* End .{/* <!--Pricing Tabs--> */}
    </section>
  );
};

export default index;
