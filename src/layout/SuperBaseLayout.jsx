import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function SuperBaseLayout() {
	useEffect(() => {}, []);

	return (
		<>
			<Outlet />
		</>
	);
}
