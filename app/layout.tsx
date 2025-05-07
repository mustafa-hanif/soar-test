import type { Metadata } from "next";
import ClientLayout from "./clientLayout";
import { api } from "@/data";

export const metadata: Metadata = {
  title: "Soar Finance Dashboard",
  description: "Soar customer finance dashboard",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navigation = await api.navigation();

  return <ClientLayout navigation={navigation.body}>{children}</ClientLayout>;
}

export const dynamic = "force-dynamic";
