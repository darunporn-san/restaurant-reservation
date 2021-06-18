import styled from "styled-components";

const Searching = () => {
	return (
		<>
			<AllListRes>
				<Input />
				<Icon>search</Icon>
			</AllListRes>
		</>
	);
};
export default Searching;

const AllListRes = styled.div`
	text-align: center;
	min-height: 30vh;
	position: relative;
`;

const Icon = styled.span.attrs((props) => ({
	className: "material-icons",
}))`
	box-sizing: border-box;
	padding: 10px;
	width: 42.5px;
	/* height: 42.5px; */
	position: absolute;
	top: 40%;
	right: 24%;
	border-radius: 50%;
	color: #07051a;
	text-align: center;
	font-size: 1.2em;
	transition: all 1s;
`;

const Input = styled.input.attrs((props) => ({
	type: "text",
	// size: props.size || "1em",
}))`
	position: absolute;
	top: 50%;
	left: 25%;
	margin: -25px 0 0 -25px;
	width: 50%;
	height: 42.5px;
	line-height: 30px;
	outline: 0;
	border: 1;
	font-size: 1em;
	border-radius: 50px;
	padding: 0 20px;
`;
