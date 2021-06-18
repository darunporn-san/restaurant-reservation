import styled from "styled-components";
const Head = styled.div`
	background-color: ${(props) => props.color};
	padding: 25px 30px;
`;
const HomeProfile = styled.h1`
	font-size: 1.5em;
	color: whitesmoke;
	text-align: start;
	/* color: palevioletred; */
	margin: 0;
	float: left;
`;

const ProfileAvatar = styled.div`
	text-align: end;
	color: black;
`;

const Avatar = styled.p`
	font-size: 1.5em;
	margin: 0;
	display: initial;
	background-color: rebeccapurple;
	padding: 10px;
	border-radius: 100px;
`;
const Header = ({ background }: any) => {
	return (
		<>
			<Head color="#01A9F4">
				<HomeProfile>Home</HomeProfile>
				<ProfileAvatar>
					<Avatar>DS</Avatar>
				</ProfileAvatar>
			</Head>
		</>
	);
};
export default Header;
