"use client";

import { Inter, Lato } from "next/font/google";
import "./globals.css";
import { useSidebar } from "@/hooks/useSidebar";
import NavLink from "@/components/global/activelink";
import { INavItem } from "@/data/types";
import Image from "next/image";
import { PageName } from "@/components/global/pagename";

const interSans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const latoSans = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export default function ClientLayout({
  navigation,
  children,
}: Readonly<{
  navigation: INavItem[];
  children: React.ReactNode;
}>) {
  const { isSidebarOpen, setIsSidebarOpen, isMobile } = useSidebar();

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${interSans.variable} ${latoSans.variable} font-sans antialiased`}
      >
        <div className="flex h-screen bg-gray-100">
          <aside
            id="sidebar"
            aria-label="Main Navigation"
            className={`bg-white w-64 border-r border-gray-200 fixed inset-y-0 left-0 transition-transform duration-300 ease-in-out z-20 
                   ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative`}
          >
            <div className="flex items-center p-6 py-[30px]">
              <Image
                src="/icons/icon.png"
                alt=""
                width={25}
                height={28}
                className="mr-4"
                aria-hidden="true"
              />
              <h2 className="text-xl font-bold">Soar Task</h2>
            </div>
            <nav aria-label="Main Menu" className="m-0">
              <ul className="space-y-6">
                {navigation.map((item) => (
                  <li className="mb-0" key={item.name}>
                    <NavLink
                      href={
                        item.enabled && item.href
                          ? `${item.href.toLowerCase()}`
                          : "#"
                      }
                      aria-disabled={!item.enabled}
                    >
                      <div className="flex items-center gap-3">
                        <Image
                          width={25}
                          height={25}
                          src={`/icons/${item.icon}`}
                          alt=""
                          aria-hidden="true"
                          className="w-6 h-6"
                        />
                        <span>{item.name}</span>
                      </div>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          {/* Main content area */}
          <div className="flex flex-col flex-1 overflow-hidden">
            {/* Header */}
            <header className="bg-white shadow z-10 max-w-full">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center w-full md:w-auto">
                  <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="p-1 mr-4 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 md:hidden"
                    aria-expanded={isSidebarOpen}
                    aria-controls="sidebar"
                    aria-label="Toggle navigation menu"
                  >
                    <Image
                      src="/icons/hamburger.png"
                      alt=""
                      aria-hidden="true"
                      width={25}
                      height={25}
                    />
                  </button>
                  <PageName />
                </div>
                <div className="flex items-center gap-3">
                  <div className="hidden md:flex items-center gap-3 bg-blue-50 p-2 rounded-2xl">
                    <label htmlFor="search-input" className="sr-only">
                      Search
                    </label>
                    <Image
                      src="/icons/search_icon.png"
                      alt=""
                      aria-hidden="true"
                      width={20}
                      height={20}
                    />
                    <input
                      id="search-input"
                      type="text"
                      placeholder="Search"
                      aria-label="Search"
                      className="bg-transparent border-none outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-2"
                    />
                  </div>
                  <button
                    aria-label="Settings"
                    className="hidden md:flex md:shrink-0 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1"
                  >
                    <Image
                      src="/icons/settings.png"
                      alt=""
                      aria-hidden="true"
                      width={50}
                      height={50}
                    />
                  </button>
                  <button
                    aria-label="Notifications"
                    className="hidden md:flex md:shrink-0 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1"
                  >
                    <Image
                      src="/icons/notification.png"
                      alt=""
                      aria-hidden="true"
                      width={50}
                      height={50}
                    />
                  </button>
                  <div className="shrink-0">
                    <Image
                      src="/users/user.png"
                      alt="User profile"
                      width={60}
                      height={60}
                    />
                  </div>
                </div>
              </div>
            </header>

            {/* Main content */}
            <main className="flex-1 overflow-y-auto p-6">{children}</main>
          </div>
          {/* Overlay to close sidebar on mobile */}
          {isMobile && isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black opacity-25 z-10 md:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}
        </div>
      </body>
    </html>
  );
}
