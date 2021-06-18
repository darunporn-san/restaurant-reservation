import * as React from "react";
import { RestaurantState } from "./../../typing/data";
import {
	ALlDetail,
	TextDetail,
	Button,
	PlainText,
} from "../../container/style";
import Slider from "react-slick";

interface IItemLIst {
	data: RestaurantState;
}

const ItemList: React.FC<IItemLIst> = (props) => {
	var settings = {
		dots: true,
		infinite:true,
		arrows: false,
	};
	return (
		<>
			<ALlDetail>
				<Slider {...settings}>
					{
						props.data.image.map((img:string,i:number)=>(
							<div key={i}>
								<img src={img} width="230" alt={props.data.name} style={{margin:'auto'}} />
							</div>
						))
					}
					
				</Slider>
				<p style={{paddingTop:'10px'}}>{props.data.name}</p>

				<TextDetail>
					<PlainText>Total Queue</PlainText>
					<PlainText>{props.data.totalQueue}</PlainText>
				</TextDetail>
				<TextDetail>
					<PlainText>Free Queue</PlainText>
					<PlainText>{props.data.totalQueue}</PlainText>
				</TextDetail>
				<Button>Booking</Button>
			</ALlDetail>
		</>
	);
};
export default ItemList;
