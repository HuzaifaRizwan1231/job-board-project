import Link from "next/link.js";
import Image from "next/image.js";

const FAQTable = () => {
  const faqs = [
    {
      id: 1,
      question: "What is a question?",
      answer: "I do not know",
      category: "Buying",
      language: "en",
    },
  ];
  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>FAQs</h4>
      </div>
      {/* End filter top bar */}

      {/* Start table widget content */}
      <div className="widget-content">
        <div className="table-outer">
          <div className="table-outer">
            <table className="default-table manage-job-table">
              <thead>
                <tr>
                  <th>Question</th>
                  <th>Answer</th>
                  <th>Category</th>
                  <th>Language</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {faqs.slice(0, 4).map((item) => (
                  <tr key={item.id}>
                    <td>{item.question}</td>
                    <td>{item.answer}</td>
                    <td>{item.category}</td>
                    <td>{item.language}</td>
                    <td>
                      <div className="option-box">
                        <ul className="option-list">
                          <li>
                            <button data-text="Edit">
                              <span className="la la-edit"></span>
                            </button>
                          </li>
                          <li>
                            <button data-text="Delete">
                              <span className="la la-trash"></span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* End table widget content */}
    </div>
  );
};

export default FAQTable;
