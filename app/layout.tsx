import type { Metadata } from "next";
import ClientLayout from "./clientLayout";
import navigationData from "@/api/mockData/navigation.json";

export const metadata: Metadata = {
  title: "Soar Finance Dashboard",
  description: "Soar customer finance dashboard",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navigation = navigationData;

  return <ClientLayout navigation={navigation}>{children}</ClientLayout>;
}
