"use client";
import { useState } from "react";
import HomeTab from "./HomeTab";
import PrimaryTab from "./PrimaryTab";
import ContactTab from "./ContactTab";

export default function PageSettingsForm() {
  const [selectedTab, setSelectedTab] = useState("homepage");

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-3">
          <ul className="nav flex-column nav-pills">
            <li className="nav-item">
              <button
                className={`mt-2 ${
                  selectedTab === "homepage"
                    ? "btn-style-one"
                    : "btn-style-three"
                }`}
                onClick={() => setSelectedTab("homepage")}
              >
                Home Page
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`mt-2 ${
                  selectedTab === "primary"
                    ? "btn-style-one"
                    : "btn-style-three"
                }`}
                onClick={() => setSelectedTab("primary")}
              >
                Primary
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`mt-2 ${
                  selectedTab === "contact"
                    ? "btn-style-one"
                    : "btn-style-three"
                }`}
                onClick={() => setSelectedTab("contact")}
              >
                Contact Page
              </button>
            </li>
          </ul>
        </div>

        <div className="col-9">
          {selectedTab === "homepage" && <HomeTab />}

          {selectedTab === "primary" && <PrimaryTab />}

          {selectedTab === "contact" && <ContactTab />}
        </div>
      </div>
    </div>
  );
}
