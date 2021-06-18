import styled from "styled-components";

const Foot = styled.div`
	background-color: ${(props) => props.color};
	padding: 15px 0px;
	left: 0%;
	width: 100%;
	bottom: 0;
`;

const MyName = styled.div`
	text-align: end;
	margin-right: 20px;
`;

const Footer = () => {
	return (
		<>
			<Foot color="#01A9F4">
				<MyName>Darunporn Santisawaddiwong</MyName>
			</Foot>
		</>
	);
};
export default Footer;
