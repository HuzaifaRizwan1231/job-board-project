import MenuToggler from "../../MenuToggler";
import BreadCrumbWithButton from "../../BreadCrumbWithButton";

const index = () => {
  return (
    <div className="dashboard-outer">
      <BreadCrumbWithButton
        title="Change Password"
        buttonText="Back to dashboard"
      />
      {/* breadCrumb */}
      <MenuToggler />
      {/* Collapsible sidebar button */}

      <div class="row">
        <div class="col-lg-9 mx-auto">
          <div class="card h-auto">
            <div class="card-body">
              <h2 class="fs-5 mb-3 text-muted">Change Password</h2>
              <p class="text-muted mb-4">
                For account security, please create a strong password.
              </p>

              <form>
                <div class="mb-3">
                  <label for="current-password" class="form-label">
                    Current Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="current-password"
                    placeholder="Enter current password"
                    required
                  />
                </div>

                <div class="mb-3">
                  <label for="new-password" class="form-label">
                    New Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="new-password"
                    placeholder="Enter new password"
                    required
                  />
                </div>

                <div class="mb-3">
                  <label for="confirm-password" class="form-label">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="confirm-password"
                    placeholder="Confirm new password"
                    required
                  />
                </div>

                <div class="text-end">
                  <button type="submit" class="btn-style-one theme-btn small">
                    Update Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {/* <div
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
      </div> */}
    </div>
  );
};

export default index;
