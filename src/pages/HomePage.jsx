import Button from "../components/Button";
import SIdeBar from "../components/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { tes } from "../actionCreators";

export default function HomePage() {
	const dispatch = useDispatch();
	const { loading } = useSelector((state) => state.user);

	const tesButton = (e) => {
		e.preventDefault();
		dispatch(tes(!loading));
	};

	return (
		<>
			<div className="w-screen h-screen bg-[#251E34]">
				<SIdeBar />
			</div>
		</>
	);
}
