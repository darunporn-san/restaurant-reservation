import {
	Head,
	HomeProfile,
	ProfileAvatar,
	Avatar,
} from "../../container/style";

const Header = ({ background }: any) => {
	return (
		<>
			<Head color="#01A9F4">
				<HomeProfile>Restaurant Reservation</HomeProfile>
				<ProfileAvatar>
					<Avatar>DS</Avatar>
				</ProfileAvatar>
			</Head>
		</>
	);
};
export default Header;
