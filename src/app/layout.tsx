import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { cn } from "@/lib/utils";

const lato = Lato({ subsets: ["latin"], weight: ["100", "300", "400", "700", "900"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={cn(lato.className, "flex min-h-screen flex-col")}>{children}</body>
		</html>
	);
}