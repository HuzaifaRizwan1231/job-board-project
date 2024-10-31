"use client";

import Link from "next/link";
import {
  blogItems,
  candidateItems,
  employerItems,
  findJobItems,
  homeItems,
  pageItems,
  shopItems,
} from "../../data/mainMenuData";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { usePathname } from "next/navigation";

const HeaderNavContent = () => {
  return (
    <>
      <nav className="nav main-menu">
        <ul className="navigation" id="navbar">
          {/* current dropdown */}

          <li
            className={`${
              isActiveParent(homeItems, usePathname()) ? "current" : ""
            }`}
          >
            <Link href="/home-10">
              <span>Home</span>
            </Link>
          </li>

          {/* End homepage menu items */}

          {/* <li
            className={`${
              isActiveParent(findJobItems, usePathname()) ? "current" : ""
            } dropdown has-mega-menu`}
            id="has-mega-menu"
          >
            <span>Find Jobs</span>
            <div className="mega-menu">
              <div className="mega-menu-bar row">
                {findJobItems.map((item) => (
                  <div
                    className="column col-lg-3 col-md-3 col-sm-12"
                    key={item.id}
                  >
                    <h3>{item.title}</h3>
                    <ul>
                      {item.items.map((menu, i) => (
                        <li
                          className={
                            isActiveLink(menu.routePath, usePathname())
                              ? "current"
                              : ""
                          }
                          key={i}
                        >
                          <Link href={menu.routePath}>{menu.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </li> */}
          {/* End findjobs menu items */}

          <li
            className={`${
              isActiveParent(employerItems, usePathname()) ||
              usePathname()?.split("/")[1] === "service-providers-dashboard"
                ? "current"
                : ""
            } dropdown`}
          >
            <span>Service Providers</span>
            <ul>
              {employerItems.map((item) => (
                <li className="dropdown" key={item.id}>
                  <span
                    className={
                      isActiveParentChaild(item.items, usePathname())
                        ? "current"
                        : ""
                    }
                  >
                    {item.title}
                  </span>
                  <ul>
                    {item.items.map((menu, i) => (
                      <li
                        className={
                          isActiveLink(menu.routePath, usePathname())
                            ? "current"
                            : ""
                        }
                        key={i}
                      >
                        <Link href={menu.routePath}>{menu.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              <li
                className={
                  usePathname()?.includes("/service-providers-dashboard")
                    ? "current"
                    : ""
                }
              >
                <Link href="/pricing">Pricing</Link>
              </li>
              <li
                className={
                  usePathname()?.includes("/service-providers-dashboard")
                    ? "current"
                    : ""
                }
              >
                <Link href="/invoice">Quotes</Link>
              </li>
              <li
                className={
                  usePathname()?.includes("/service-providers-dashboard")
                    ? "current"
                    : ""
                }
              >
                <Link href="/service-providers-dashboard/dashboard">
                  Service Provider Dashboard
                </Link>
              </li>
            </ul>
          </li>
          {/* End Employers menu items */}

          <li
            className={`${
              isActiveParent(candidateItems, usePathname()) ||
              usePathname()?.split("/")[1] === "candidates-dashboard"
                ? "current"
                : ""
                ? "current"
                : ""
            } dropdown`}
          >
            <Link href="/client-dashboard/dashboard">
              {" "}
              <span>Client Dashboard</span>
            </Link>

            {/* <ul>
              {candidateItems.map((item) => (
                <li className="dropdown" key={item.id}>
                  <span
                    className={
                      isActiveParentChaild(item.items, usePathname())
                        ? "current"
                        : ""
                    }
                  >
                    {item.title}
                  </span>
                  <ul>
                    {item.items.map((menu, i) => (
                      <li
                        className={
                          isActiveLink(menu.routePath, usePathname())
                            ? "current"
                            : ""
                        }
                        key={i}
                      >
                        <Link href={menu.routePath}>{menu.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              <li
                className={
                  usePathname()?.includes("/client-dashboard/") ? "current" : ""
                }
              ></li>
            </ul> */}
          </li>
          {/* End Candidates menu items */}

          {/* <li
            className={`${
              isActiveParentChaild(blogItems, usePathname()) ? "current" : ""
            } dropdown`}
          >
            <span>Blog</span>
            <ul>
              {blogItems.map((item, i) => (
                <li
                  className={
                    isActiveLink(item.routePath, usePathname()) ? "current" : ""
                  }
                  key={i}
                >
                  <Link href={item.routePath}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </li> */}
          {/* End Blog menu items */}

          <li
            className={`${
              isActiveParentChaild(pageItems, usePathname()) ||
              isActiveParentChaild(shopItems[0].items, usePathname())
                ? "current "
                : ""
            } dropdown`}
          >
            <Link href="/contact">
              <span>Contact Us</span>
            </Link>
            {/* <ul>
              {shopItems.map((item) => (
                <li className="dropdown" key={item.id}>
                  <span
                    className={`${
                      isActiveParentChaild(shopItems[0].items, usePathname())
                        ? "current "
                        : ""
                    }`}
                  >
                    {item.title}
                  </span>
                  <ul>
                    {item.items.map((menu, i) => (
                      <li
                        className={
                          isActiveLink(menu.routePath, usePathname())
                            ? "current"
                            : ""
                        }
                        key={i}
                      >
                        <Link href={menu.routePath}>{menu.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              {pageItems.map((item, i) => (
                <li
                  className={
                    isActiveLink(item.routePath, usePathname()) ? "current" : ""
                  }
                  key={i}
                >
                  <Link href={item.routePath}>{item.name}</Link>
                </li>
              ))}
            </ul> */}
          </li>
          {/* End Pages menu items */}
        </ul>
      </nav>
    </>
  );
};

export default HeaderNavContent;
