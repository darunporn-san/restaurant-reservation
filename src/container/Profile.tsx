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
	TextDetails,HistoryText
} from "./style";
import { connect } from "react-redux";

const ProfileContainer = (props:any) => {
	
	return (
		<>
			<LayoutProfile>
				<Profiles>
					{/* <AvatarProfile /> */}
					<ProfileDetails>
						<ProfileText>
							<TextDetail>
								<AvatarProfile ></AvatarProfile>
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
							<h3><b>History</b></h3>
							{props.restaurant.user.history.map((his:any)=>(
								<HistoryBlock className="mb-3 px-5 pt-4">
									<TextDetails >Restaurant Name: <b>{his.restaurantName}</b></TextDetails>
									<TextDetails>Date: <b>{his.date}</b> </TextDetails>
									<TextDetails>Time: <b>{his.time}</b></TextDetails>
									<TextDetails>People: <b>{his.people}</b></TextDetails>

								</HistoryBlock>
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
