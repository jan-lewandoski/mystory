import { Header } from "@/components/header/header";

export default function WithNavigationLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			<main className="">{children}</main>
		</>
	);
}
