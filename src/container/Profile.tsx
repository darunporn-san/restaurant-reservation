import {
	LayoutProfile,
	Profiles,
	ProfileDetails,
	TextDetail,
	ProfileText,
	AvatarProfile,
	HistoryBlock,
	UserName,
	Name
} from "./style";
import { connect, useDispatch } from "react-redux";

const ProfileContainer = (props:any) => {
	console.log('props',props);
	
	return (
		<>
			<LayoutProfile>
				<Profiles>
					{/* <AvatarProfile /> */}
					<ProfileDetails>
						<ProfileText>
							<TextDetail>
								<AvatarProfile />
								<div style={{ margin: "auto" }}>
									<UserName >Username</UserName>
									<Name>name</Name>
								</div>
							</TextDetail>
						</ProfileText>
						<div style={{ display: "flex", justifyContent: "center" }}>
							<hr style={{ width: "80%" }} />
						</div>
						<ProfileText>
							<h3>History</h3>
							<HistoryBlock></HistoryBlock>
						</ProfileText>
					</ProfileDetails>
				</Profiles>
			</LayoutProfile>
		</>
	);
};

const mapStateToProps = (state: any) => {
	return {
		restaurant: state,
		user: state,
	};
};
export default connect(mapStateToProps)(ProfileContainer);
