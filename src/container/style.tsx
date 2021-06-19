import styled from "styled-components";

export const Head = styled.div`
	background-color: ${(props) => props.color};
	padding: 25px 30px;
`;
export const HomeProfile = styled.h1`
	font-size: 1.5em;
	color: whitesmoke;
	text-align: start;
	/* color: palevioletred; */
	margin: 0;
	float: left;
`;

export const ProfileAvatar = styled.div`
	text-align: end;
	color: black;
`;

export const Avatar = styled.p`
	font-size: 1.5em;
	margin: 0;
	display: initial;
	background-color: rebeccapurple;
	padding: 10px;
	border-radius: 100px;
	color: wheat;
`;

export const Foot = styled.div`
	background-color: ${(props) => props.color};
	padding: 15px 0px;
	left: 0%;
	width: 100%;
	bottom: 0;
`;

export const MyName = styled.div`
	text-align: end;
	margin-right: 20px;
`;

export const TextDetail = styled.div`
	flex-flow: wrap;
	display: flex;
	justify-content: space-between;
`;

export const ALlDetail = styled.div`
	margin-top: 20px;
	position: relative;
	height: 100%;
	color: black;
`;

export const PlainText = styled.p`
	margin: 0 20px;
	color: black;
`;

export const Button = styled.button`
	border: 5em;
	position: absolute;
	bottom: 30px;
	cursor: pointer;
	outline: none;
	font-size: 16px;
	-webkit-transform: translate(0);
	transform: translate(0);
	background-image: linear-gradient(45deg, #4568dc, #b06ab3);
	padding: 0.7em 2em;
	border-radius: 65px;
	box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.438);
	-webkit-transition: box-shadow 0.25s;
	transition: box-shadow 0.25s;
	color: white;
	&:hover {
		background-image: linear-gradient(-45deg, #4568dc, #b06ab3);
		box-shadow: 0 12px 24px rgba(128, 128, 128, 0.1);
	}
`;

export const AllListRes = styled.div`
	flex-flow: wrap;
	display: flex;
	justify-content: space-around;
	padding: 0;
	margin: 0;
	list-style: none;
	/* padding-bottom: 10px; */
`;

export const Item = styled.div`
	background: white;
	border-radius: 10px;
	padding: 5px;
	width: 250px;
	height: 400px;
	margin-top: 10px;
	/* line-height: 150px; */
	color: white;
	/* font-weight: bold; */
	/* font-size: 3em; */
	text-align: center;
`;

export const SearchList = styled.div`
	text-align: center;
	min-height: 30vh;
	position: relative;
`;

export const ProfileText = styled.div`
	margin: 50px 100px;
`;
export const LayoutProfile = styled.div`
	padding-top: 50px;
	/* background-color: red; */
`;
export const Profiles = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	/* background-color: gainsboro; */
	width: 70%;
	margin: auto;
`;
export const AvatarProfile = styled.div`
	background-color: green;
	width: 12vw;
	z-index: 1;
	border-radius: 100px;
	height: 12vw;
`;
export const ProfileDetails = styled.div`
	background-color: yellow;
	border-radius: 50px;
	width: 100%;
	/* transform: translateY(-100px); */
`;

export const HistoryBlock = styled.div`
	background-color: blueviolet;
	height: 150px;
	border-radius: 30px;
	max-height: 1000px;
	overflow-y: auto;
`;

export const UserName = styled.p`
	font-size: 3vw;
`;

export const Name = styled.p`
	font-size: 2vw;
`;

export const Icon = styled.span.attrs((props) => ({
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



export const Input = styled.input.attrs((props) => ({
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



 