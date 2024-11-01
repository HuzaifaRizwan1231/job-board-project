import MenuToggler from "../../MenuToggler";
import BreadCrumbWithButton from "../../BreadCrumbWithButton";

const index = () => {
  return (
    <div className="dashboard-outer">
      <BreadCrumbWithButton title="Profile" buttonText="Back to dashboard" />
      {/* breadCrumb */}
      <MenuToggler />
      {/* Collapsible sidebar button */}

      <div className="row">
        <div className="col-lg-3 position-relative">
          <div className="card h-auto">
            <div className="card-body text-center">
              <div className="position-relative my-3">
                <img
                  src="/images/resource/candidate-1.png"
                  alt="avatar"
                  id="user-image"
                  className="rounded-circle"
                  style={{ width: "100px", height: "100px" }}
                />
                <form>
                  <label
                    htmlFor="upload-avatar"
                    className="position-absolute bottom-0 end-0 bg-light p-1 rounded-circle"
                    style={{ cursor: "pointer" }}
                  >
                    <input
                      type="file"
                      className="d-none"
                      accept="image/jpeg, image/png, image/jpg"
                      id="upload-avatar"
                    />
                    <i className="bi bi-camera"></i>
                  </label>
                </form>
              </div>
              <h2 className="fs-5 text-muted">Admin</h2>
              <span className="badge bg-success mt-2">Active</span>
            </div>
          </div>
        </div>

        <div className="col-lg-9">
          <div className="card h-auto mb-4">
            <div className="card-body">
              <h2 className="fs-5 text-muted">Personal Details</h2>
              <p className="text-muted">Manage your personal information</p>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="first-name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="first-name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input type="tel" className="form-control" id="phone" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="street-address" className="form-label">
                      Address (used for invoice)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="street-address"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-end mt-3">
                  <button className="btn-style-one theme-btn small">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="card h-auto mb-4">
            <div className="card-body">
              <h2 className="fs-5 text-muted">Change Password</h2>
              <p className="text-muted">
                Protect your account with a strong and secure password
              </p>
              <form>
                <div className="row g-3">
                  <div className="col-md-4">
                    <label htmlFor="old-password" className="form-label">
                      Old Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="old-password"
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="new-password" className="form-label">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="new-password"
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="confirm-password" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirm-password"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-end mt-3">
                  <button className="btn-style-one theme-btn small">
                    Update Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="social-link"
        tabIndex="-1"
        aria-labelledby="socialLinkModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="socialLinkModalLabel">
                Social Media
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="facebook" className="form-label">
                    Facebook
                  </label>
                  <input type="text" className="form-control" id="facebook" />
                </div>
                <div className="mb-3">
                  <label htmlFor="instagram" className="form-label">
                    Instagram
                  </label>
                  <input type="text" className="form-control" id="instagram" />
                </div>
                <div className="mb-3">
                  <label htmlFor="twitter" className="form-label">
                    Twitter
                  </label>
                  <input type="text" className="form-control" id="twitter" />
                </div>
                <div className="mb-3">
                  <label htmlFor="linkedin" className="form-label">
                    LinkedIn
                  </label>
                  <input type="text" className="form-control" id="linkedin" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
