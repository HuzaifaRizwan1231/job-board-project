import React from "react";

export default function ContactTab() {
  return (
    <form method="POST" encType="multipart/form-data">
      <div className="mb-3">
        <label>Office Address</label>
        <input
          type="text"
          name="office_address"
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label>Country Name</label>
        <input
          type="text"
          name="country_name"
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label>Google Map Link</label>
        <input
          type="text"
          name="google_map_link"
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label>Contact Info Subtitle</label>
        <input
          type="text"
          name="contact_info_subtitle"
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label>Contact Info Number</label>
        <input
          type="tel"
          name="contact_info_number"
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label>Live Support Subtitle</label>
        <input
          type="text"
          name="live_support_subtitle"
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label>Live Support Website</label>
        <input
          type="text"
          name="live_support_website"
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <button type="submit" className="btn-style-one">
          Save Changes
        </button>
      </div>
    </form>
  );
}
