import Button from "../components/Button";
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
			<h1 className="text-4xl">Hello world</h1>
			<Button callback={tesButton} />
			<div>
				Loading is <span>{loading ? "true" : "false"}</span>
			</div>
		</>
	);
}
