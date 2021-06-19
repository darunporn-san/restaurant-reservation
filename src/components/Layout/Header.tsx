import {
	Head,
	HomeProfile,
	ProfileAvatar,
	Avatar,
} from "../../container/style";

interface IHeader {
	noHead: boolean;
}
const Header: React.FC<IHeader> = (props) => {
	return (
		<div style={{display:props.noHead?"none":"block"}}>
			<Head color="rgb(1, 169, 244)">
				<HomeProfile>Restaurant Reservation</HomeProfile>
				<ProfileAvatar>
					<Avatar>DS</Avatar>
				</ProfileAvatar>
			</Head>
		</div>
		
	);
};
export default Header;
