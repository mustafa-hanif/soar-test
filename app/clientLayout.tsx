"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useSidebar } from "@/hooks/useSidebar";
import NavLink from "@/components/global/activelink";
import { INavItem } from "@/api/types";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex h-screen bg-gray-100">
          <aside
            className={`bg-gray-800 text-white w-64 fixed inset-y-0 left-0 transition-transform duration-300 ease-in-out z-20 
                   ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative`}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <h2 className="text-xl font-bold">Dashboard</h2>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-1 rounded-md hover:bg-gray-700 md:hidden"
              >
                X
              </button>
            </div>
            <nav className="p-4">
              <ul className="space-y-6">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      href={
                        item.enabled && item.href
                          ? `${item.href.toLowerCase()}`
                          : "#"
                      }
                    >
                      <div className="flex items-center gap-3">
                        <Image
                          width={25}
                          height={25}
                          src={`/icons/${item.icon}`}
                          alt={item.name}
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
            <header className="bg-white shadow">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center">
                  <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="p-1 mr-4 rounded-md hover:bg-gray-200 md:hidden"
                  >
                    Menu
                  </button>
                  <h1 className="text-xl font-semibold">My Dashboard</h1>
                </div>
                <div>
                  <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
                    Profile
                  </button>
                </div>
              </div>
            </header>

            {/* Main content */}
            <main className="flex-1 overflow-y-auto p-6">{children}</main>
          </div>
          {/* Overlay to close sidebar on mobile */}
          {isMobile && isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}
        </div>
      </body>
    </html>
  );
}
