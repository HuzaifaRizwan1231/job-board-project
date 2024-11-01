"use client";

import Link from "next/link";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { isActiveLink } from "../../utils/linkActiveChecker";

import { useDispatch, useSelector } from "react-redux";
import { menuToggle } from "../../features/toggle/toggleSlice";
import { usePathname } from "next/navigation";
import adminMenuData from "@/data/adminMenuData";
import { useState } from "react";

const DashboardAdminSidebar = () => {
  const { menu } = useSelector((state) => state.toggle);
  const percentage = 30;

  const dispatch = useDispatch();
  // menu togggle handler
  const menuToggleHandler = () => {
    dispatch(menuToggle());
  };

  // Keep track of open dropdowns by item id
  const [dropdownOpen, setDropdownOpen] = useState(() => {
    const initialOpen = {};
    adminMenuData.forEach((heading) => {
      heading.items.forEach((item) => {
        if (
          item.subItems &&
          item.subItems.some((subItem) =>
            isActiveLink(subItem.routePath, usePathname())
          )
        ) {
          initialOpen[item.id] = true;
        }
      });
    });
    return initialOpen;
  });

  // Toggle function for dropdowns
  const toggleDropdown = (id) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className={`user-sidebar ${menu ? "sidebar_open" : ""}`}>
      {/* Start sidebar close icon */}
      <div className="pro-header text-end pb-0 mb-0 show-1023">
        <div className="fix-icon" onClick={menuToggleHandler}>
          <span className="flaticon-close"></span>
        </div>
      </div>
      {/* End sidebar close icon */}

      <div className="sidebar-inner">
        {adminMenuData.map((heading) => (
          <div key={heading.id}>
            <ul className="navigation">
              <li className="text-uppercase mb-2 mt-3 fw-medium">
                {heading.heading}
              </li>
              {heading.items.map((item) => (
                <>
                  <li
                    className={`${
                      isActiveLink(item.routePath, usePathname())
                        ? "active"
                        : ""
                    } mb-1`}
                    key={item.id}
                    onClick={() => {
                      menuToggleHandler();
                      if (item.subItems) toggleDropdown(item.id);
                    }}
                  >
                    <Link
                      href={
                        item.subItems == null || item.subItems.length == 0
                          ? item.routePath
                          : "#"
                      }
                    >
                      <i className={`la ${item.icon}`}></i>
                      <div className="d-flex justify-content-between w-100">
                        <div>{item.name}</div>
                        <div>
                          {/* Show Icon or not */}
                          {item.subItems && (
                            <i
                              className={`la m-auto ${
                                dropdownOpen[item.id]
                                  ? "la-angle-down"
                                  : "la-angle-right"
                              }`}
                              style={{ cursor: "pointer", fontSize: "14px" }}
                            ></i>
                          )}
                        </div>
                      </div>
                    </Link>
                  </li>
                  {item.subItems && dropdownOpen[item.id] && (
                    <ul className="navigation mt-1">
                      {item.subItems.map((subItem) => (
                        <li
                          key={subItem.id}
                          className={`${
                            isActiveLink(subItem.routePath, usePathname())
                              ? "active"
                              : ""
                          } mb-1`}
                        >
                          <Link href={subItem.routePath}>
                            <span style={{ marginLeft: "2.25rem" }}>
                              {subItem.name}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ))}
            </ul>
          </div>
        ))}

        {/* End navigation */}

        <div className="skills-percentage">
          <h4>Skills Percentage</h4>
          <p>
            `Put value for <strong>Cover Image</strong> field to increase your
            skill up to <strong>85%</strong>`
          </p>
          <div style={{ width: 200, height: 200, margin: "auto" }}>
            <CircularProgressbar
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#7367F0",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent",
              })}
              value={percentage}
              text={`${percentage}%`}
            />
          </div>{" "}
          {/* <!-- Pie Graph --> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardAdminSidebar;
