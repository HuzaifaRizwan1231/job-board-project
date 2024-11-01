import React from "react";

export default function PrimaryTab() {
  return (
    <form method="POST" encType="multipart/form-data">
      <div className="mb-3">
        <label>Site Logo - Light Color</label>
        <input
          type="file"
          accept="image/*"
          name="logo"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label>Site Logo - Deep Color</label>
        <input
          type="file"
          accept="image/*"
          name="deep_logo"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label>Favicon</label>
        <input
          type="file"
          accept="image/*"
          name="favicon"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label>Contact Email Address</label>
        <input
          type="email"
          name="contact_email"
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label>Contact Phone</label>
        <input
          type="number"
          name="contact_phone"
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label>Office Location</label>
        <input type="text" name="address" className="form-control" required />
      </div>
      <div className="mb-3">
        <label>Facebook Profile Link</label>
        <input type="url" name="socials[facebook]" className="form-control" />
      </div>
      <div className="mb-3">
        <label>Youtube Profile Link</label>
        <input type="url" name="socials[youtube]" className="form-control" />
      </div>
      <div className="mb-3">
        <label>Twitter Profile Link</label>
        <input type="url" name="socials[twitter]" className="form-control" />
      </div>
      <div className="mb-3">
        <label>Instagram Profile Link</label>
        <input type="url" name="socials[instagram]" className="form-control" />
      </div>
      <div className="mb-3">
        <label>LinkedIn Profile Link</label>
        <input type="url" name="socials[linkedin]" className="form-control" />
      </div>
      <div className="mb-3">
        <button type="submit" className="btn-style-one">
          Save Changes
        </button>
      </div>
    </form>
  );
}
