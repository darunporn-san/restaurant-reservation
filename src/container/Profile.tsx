import {
	LayoutProfile,
	Profiles,
	ProfileDetails,
	TextDetail,
	ProfileText,
	AvatarProfile,
	HistoryBlock,
	UserName,
	Name,
	TextDetails,
	HistoryText,
} from "./style";
import { connect, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import RestaurantAction from "./../data/action";


const ProfileContainer = (props: any) => {
	const dispatch = useDispatch<Dispatch<RestaurantAction.TRestaurantReduce>>();

	return (
		<>
			<LayoutProfile>
				<Profiles>
					{/* <AvatarProfile /> */}
					<ProfileDetails>
						<ProfileText>
							<TextDetail>
								<AvatarProfile></AvatarProfile>
								<div style={{ margin: "auto" }}>
									<UserName>{props.restaurant.user.username}</UserName>
									<Name>{props.restaurant.user.name}</Name>
								</div>
							</TextDetail>
						</ProfileText>
						<div style={{ display: "flex", justifyContent: "center" }}>
							<hr style={{ width: "80%" }} />
						</div>
						<HistoryText>
							<h3>
								<b>History</b>
							</h3>
							{props.restaurant.user.history.map((his: any) => (
								<>
									<HistoryBlock className="mb-3 px-5 pt-4">
										<p className="m-0" style={{position:'absolute',transform:'translateX(450px)',cursor: "pointer"}}
										onClick={()=>dispatch({
											type:'CANCEL_RESTAURANT',
											payload:his
										})}>Cancel</p>

										<TextDetails>
											Restaurant Name: <b>{his.restaurantName}</b>
										</TextDetails>
										<TextDetails>
											Date: <b>{his.date}</b>{" "}
										</TextDetails>
										<TextDetails>
											Time: <b>{his.time}</b>
										</TextDetails>
										<TextDetails>
											People: <b>{his.people}</b>
										</TextDetails>
									</HistoryBlock>
								</>
							))}
						</HistoryText>
					</ProfileDetails>
				</Profiles>
			</LayoutProfile>
		</>
	);
};

const mapStateToProps = (state: any) => {
	return {
		restaurant: state,
	};
};
export default connect(mapStateToProps)(ProfileContainer);
