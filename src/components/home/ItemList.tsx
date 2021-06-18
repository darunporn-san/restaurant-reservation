import * as React from "react";
import { RestaurantState } from "./../../typing/data";
import styled from "styled-components";

interface IItemLIst {
	data: RestaurantState;
}

const ItemList: React.FC<IItemLIst> = (props) => {
	console.log("data", props.data);

	return (
		<>
			<ALlDetail>
				<img
					src={props.data.img}
					alt={props.data.name}
					width="230"
					// height="600"
				/>
				<p>{props.data.name}</p>

				<TextDetail>
					<PlainText>Total Queue</PlainText>
					<PlainText>{props.data.people}</PlainText>
				</TextDetail>
				<TextDetail>
					<PlainText>Free Queue</PlainText>
					<PlainText>{props.data.people}</PlainText>
				</TextDetail>
				<Button>Booking</Button>
			</ALlDetail>
		</>
	);
};
export default ItemList;

const TextDetail = styled.div`
	flex-flow: wrap;
	display: flex;
	justify-content: space-between;
`;

const ALlDetail = styled.div`
	margin-top: 20px;
	position: relative;
	height: 100%;
	color: black;
`;

const PlainText = styled.p`
	margin: 0 20px;
	color: black;
`;

const Button = styled.button`
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
