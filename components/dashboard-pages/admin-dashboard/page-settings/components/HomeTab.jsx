export default function HomeTab() {
  return (
    <div>
      {/* Active Theme Section */}
      <div className="mb-4 text-center">
        Active:{" "}
        <span className="px-2 py-1 bg-blue-900 rounded btn-style-one">
          themeOne
        </span>
      </div>
      <select
        className="mb-4 form-select"
        value="themeOne"
        // onChange={(e) => setActiveTheme(e.target.value)}
      >
        <option value="themeOne">themeOne</option>
        <option value="themeTwo">themeTwo</option>
        <option value="themeThree">themeThree</option>
        <option value="themeFour">themeFour</option>
        <option value="themeFive">themeFive</option>
        <option value="themeSix">themeSix</option>
        <option value="themeSeven">themeSeven</option>
      </select>

      <form className="content">
        {/* Hero Banner Section */}
        <h4 className="text-center my-2">Hero Banner With Search Section</h4>
        <div className="mb-2">
          <label>Title</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-2">
          <label>Sub title</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-2">
          <label>Right Image</label>
          <input type="file" accept="image/*" className="form-control" />
        </div>

        {/* Category Section */}
        <h4 className="text-center my-2">Category Section</h4>
        <div className="mb-2">
          <label>Title</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-2">
          <label>Right title</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-2">
          <label>Button Text</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-2">
          <label>Button Link</label>
          <input type="text" className="form-control" />
        </div>

        {/* Call to Action Section */}
        <h4 className="text-center my-2">Call to Action</h4>
        <div className="mb-2">
          <label>Title</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-2">
          <label>Sub title</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-2">
          <label>Features</label>
          <input type="text" className="form-control" />
          <p>use comma (,) for line break</p>
        </div>
        <div className="mb-2">
          <label>CTA Button Text</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-2">
          <label>Button Link</label>
          <input type="text" className="form-control" />
        </div>
        {[...Array(6)].map((_, i) => (
          <div className="mb-2" key={i}>
            <label>Left image {i + 1}</label>
            <input type="file" accept="image/*" className="form-control" />
          </div>
        ))}

        {/* Call to Action 2 Section */}
        <h4 className="text-center my-2">Call to Action 2</h4>
        <div className="mb-2">
          <label>Sup Title</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-2">
          <label>Main Title</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-2">
          <label>Sub title</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-2">
          <label>CTA Button Text</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-2">
          <label>Button Link</label>
          <input type="text" className="form-control" />
        </div>
        {[...Array(6)].map((_, i) => (
          <div className="mb-2" key={i}>
            <label>Left Circle image {i + 1}</label>
            <input type="file" accept="image/*" className="form-control" />
          </div>
        ))}

        {/* Call to Action 3 Section */}
        <h4 className="text-center my-2">Call to Action 3</h4>
        <div className="mb-2">
          <label>Title</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-2">
          <label>Sub title</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-2">
          <label>CTA Button Text</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-2">
          <label>Button Link</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-2">
          <label>Left Image</label>
          <input type="file" accept="image/*" className="form-control" />
        </div>

        {/* Save Button */}
        <div className="mb-2">
          <button type="submit" className="btn-style-one">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
