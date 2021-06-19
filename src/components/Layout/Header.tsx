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
	console.log(props);
	
	return (
		<div style={{ display: props.noHead ? "none" : "block" }}>
			<Head color="rgb(1, 169, 244)">
				<a href="/">
					<HomeProfile>Restaurant Reservation</HomeProfile>
				</a>
				<a href="/profile" style={{textDecoration:'none'}}>
					<ProfileAvatar>
						<Avatar>DS</Avatar>
					</ProfileAvatar>
				</a>
			</Head>
		</div>
	);
};
export default Header;
