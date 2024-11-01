import React from "react";

export default function ThemeCard({ category }) {
  return (
    <div className="mt-4">
      <h4>{category}</h4>
      <div className="row g-3 mt-3">
        {themes.map((candidate) => (
          <div key={candidate.id} className="col-md-3">
            <div>
              <a
                href={candidate.image}
                target="_blank"
                rel="noopener noreferrer"
                className="position-relative"
              >
                {candidate.status === "Active" && (
                  <span
                    className="position-absolute badge bg-danger text-white"
                    style={{
                      transform: "rotate(-45deg)",
                      left: "-15px",
                      top: "5px",
                    }}
                  >
                    Active
                  </span>
                )}
                <img
                  className="border rounded-2 img-fluid object-fit-cover"
                  alt="Candidate"
                  src={candidate.image}
                />
              </a>
              <div className="d-flex justify-content-center mt-2">
                {candidate.status === "Active" ? (
                  <button
                    type="button"
                    className="btn btn-xs disabled cursor-not-allowed btn-outline-secondary"
                  >
                    Deactivate
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-xs btn-outline-success"
                  >
                    Activate
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const themes = [
  {
    id: 1,
    image: "https://jobi.thedevstation.com/assets/images/theme/home/one.png",
    status: "Active",
  },
  {
    id: 2,
    image: "https://jobi.thedevstation.com/assets/images/theme/home/two.png",
    status: "Inactive",
  },
  {
    id: 3,
    image: "https://jobi.thedevstation.com/assets/images/theme/home/three.png",
    status: "Active",
  },
  {
    id: 4,
    image: "https://jobi.thedevstation.com/assets/images/theme/home/four.png",
    status: "Inactive",
  },
  {
    id: 5,
    image: "https://jobi.thedevstation.com/assets/images/theme/home/five.png",
    status: "Active",
  },
  {
    id: 6,
    image: "https://jobi.thedevstation.com/assets/images/theme/home/six.png",
    status: "Inactive",
  },
  {
    id: 7,
    image: "https://jobi.thedevstation.com/assets/images/theme/home/seven.png",
    status: "Active",
  },
];
