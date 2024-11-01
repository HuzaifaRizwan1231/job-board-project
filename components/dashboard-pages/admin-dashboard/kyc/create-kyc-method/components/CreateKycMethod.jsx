import React from "react";

const CreateKycMethod = () => {
  return (
    <form className="row container p-4">
      <div className="col-lg-6 mb-4">
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input type="file" className="form-control" id="image" />
          <p className="text-danger small" style={{ display: "none" }}></p>
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="form-control"
            placeholder="Enter Title"
          />
          <p className="text-danger small" style={{ display: "none" }}></p>
        </div>
        <div className="mb-3">
          <label htmlFor="image_accept" className="form-label">
            Accept Attachments
          </label>
          <select id="image_accept" className="form-select" required>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            Status:
          </label>
          <select id="status" className="form-select" required>
            <option value="1">Active</option>
            <option value="0">Inactive</option>
          </select>
        </div>
        <button type="submit" className="btn-style-one">
          Save Method
        </button>
      </div>
      <div className="col-lg-6 mb-4">
        <div className="d-flex justify-content-between">
          <h4 className="mb-0">Document Fields</h4>
          <button type="button" className="btn btn-primary">
            <i className="fas fa-plus-circle"></i>
          </button>
        </div>
        <div className="input-group my-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter input label"
            required
          />
          <select className="form-select" required>
            <option value="text">text</option>
            <option value="number">number</option>
            <option value="email">email</option>
            <option value="tel">tel</option>
            <option value="textarea">textarea</option>
            <option value="file">file</option>
          </select>
          <button type="button" className="btn btn-danger">
            <i className="fas fa-times-circle"></i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateKycMethod;
