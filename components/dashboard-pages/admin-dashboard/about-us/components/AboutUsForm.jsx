"use client";
import { useState } from "react";

const AboutUsForm = () => {
  const [faqs, setFaqs] = useState([{ question: "", answer: "" }]);

  const addFaq = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  const removeFaq = (index) => {
    setFaqs(faqs.filter((_, i) => i !== index));
  };

  const handleFaqChange = (index, field, value) => {
    const newFaqs = [...faqs];
    newFaqs[index][field] = value;
    setFaqs(newFaqs);
  };

  return (
    <div className="card-body p-4">
      <form className="needs-validation" noValidate>
        {/* FAQ Section */}
        <div className="widget-title px-0">
          <h4>FAQ Section</h4>
        </div>
        <div className="mb-3">
          <label htmlFor="faqTitle" className="form-label">
            Title
          </label>
          <input type="text" className="form-control" id="faqTitle" required />
        </div>

        <div id="faqs">
          <label className="form-label">FAQs</label>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded p-3 mb-3 d-flex align-items-start gap-2"
            >
              <span className="badge bg-primary">{index + 1}</span>
              <div className="flex-grow-1">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Question"
                  value={faq.question}
                  onChange={(e) =>
                    handleFaqChange(index, "question", e.target.value)
                  }
                  required
                />
                <textarea
                  className="form-control"
                  placeholder="Answer"
                  value={faq.answer}
                  onChange={(e) =>
                    handleFaqChange(index, "answer", e.target.value)
                  }
                  required
                ></textarea>
              </div>
              <button
                type="button"
                className="btn-style-four"
                onClick={() => removeFaq(index)}
              >
                <span className="la la-close"></span>
              </button>
            </div>
          ))}
          <div className="d-grid">
            <button type="button" className="btn-style-three" onClick={addFaq}>
              Add FAQ
            </button>
          </div>
        </div>

        <div className="widget-title mt-4 px-0">
          <h4>Video Section</h4>
        </div>
        <div className="mb-3">
          <label htmlFor="videoLink" className="form-label">
            Video Link
          </label>
          <input type="url" className="form-control" id="videoLink" required />
        </div>
        <div className="mb-3">
          <label htmlFor="backgroundImage" className="form-label">
            Background Image
          </label>
          <input
            type="file"
            className="form-control"
            id="backgroundImage"
            accept="image/*"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="completedJobs" className="form-label">
            Completed Jobs
          </label>
          <input
            type="text"
            className="form-control"
            id="completedJobs"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="worldwideClient" className="form-label">
            Worldwide Client
          </label>
          <input
            type="text"
            className="form-control"
            id="worldwideClient"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="appliedJobs" className="form-label">
            Applied Jobs
          </label>
          <input
            type="text"
            className="form-control"
            id="appliedJobs"
            required
          />
        </div>

        {/* Call to Action Section */}
        <div className="widget-title mt-4 px-0">
          <h4>Call to Action</h4>
        </div>
        <div className="mb-3">
          <label htmlFor="ctaTitle" className="form-label">
            Title
          </label>
          <input type="text" className="form-control" id="ctaTitle" required />
        </div>
        <div className="mb-3">
          <label htmlFor="ctaSubtitle" className="form-label">
            Subtitle
          </label>
          <input
            type="text"
            className="form-control"
            id="ctaSubtitle"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ctaFeatures" className="form-label">
            Features
          </label>
          <input
            type="text"
            className="form-control"
            id="ctaFeatures"
            placeholder="Use commas for line breaks"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ctaButtonText" className="form-label">
            Button Text
          </label>
          <input
            type="text"
            className="form-control"
            id="ctaButtonText"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ctaButtonLink" className="form-label">
            Button Link
          </label>
          <input
            type="url"
            className="form-control"
            id="ctaButtonLink"
            required
          />
        </div>

        {/* Images */}
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div key={num} className="mb-3">
            <label className="form-label">Image {num}</label>
            <input type="file" accept="image/*" className="form-control" />
          </div>
        ))}

        <button type="submit" className="btn btn-primary">
          <span>Save Changes</span>
        </button>
      </form>
    </div>
  );
};

export default AboutUsForm;
