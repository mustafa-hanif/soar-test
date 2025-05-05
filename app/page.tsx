import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soar Finance Dashboard",
  description: "Soar customer finance dashboard",
};

export default function DashboardHome() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-blue-100 p-6 rounded-lg">
          <h3 className="font-semibold mb-2">Total Users</h3>
          <p className="text-3xl font-bold">1,234</p>
        </div>

        <div className="bg-green-100 p-6 rounded-lg">
          <h3 className="font-semibold mb-2">Revenue</h3>
          <p className="text-3xl font-bold">$5,678</p>
        </div>

        <div className="bg-purple-100 p-6 rounded-lg">
          <h3 className="font-semibold mb-2">Active Projects</h3>
          <p className="text-3xl font-bold">42</p>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p>This is where your dashboard content will go. You can add charts, tables, and other components here.</p>
        </div>
      </div>
    </div>
  );
}