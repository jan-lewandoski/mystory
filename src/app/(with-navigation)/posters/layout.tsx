import { type ReactNode } from "react";

export default async function PostersLayout({ children }: { children: ReactNode }) {
	return <div className="w-full">{children}</div>;
}
