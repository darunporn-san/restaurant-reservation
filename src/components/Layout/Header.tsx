import {
	Head,
	HomeProfile,
	ProfileAvatar,
	Avatar,
} from "../../container/style";

const Header = () => {
	return (
			<Head color="rgb(1, 169, 244)">
				<HomeProfile>Restaurant Reservation</HomeProfile>
				<ProfileAvatar>
					<Avatar>DS</Avatar>
				</ProfileAvatar>
			</Head>
	);
};
export default Header;
