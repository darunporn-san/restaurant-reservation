import {
	Head,
	HomeProfile,
	ProfileAvatar,
	Avatar,
} from "../../container/style";
import { useHistory } from "react-router-dom";

interface IHeader {
	noHead: boolean;
}
const Header: React.FC<IHeader> = (props) => {
	let history = useHistory();	
	
	const prevent = (e: any) => {
		e.preventDefault();		
		history.push("/profile");
	};

	const preventH = (e:any) =>{
		e.preventDefault();		
		history.push("/");
	}
	return (
		<div style={{ display: props.noHead ? "none" : "block" }}>
			<Head color="rgb(1, 169, 244)">
				<a href="#"  onClick={preventH}>
					<HomeProfile>Restaurant Reservation</HomeProfile>
				</a>
				<a href="#" onClick={prevent}  style={{ textDecoration: "none" }}>
					<ProfileAvatar>
						<Avatar>DS</Avatar>
					</ProfileAvatar>
				</a>
			</Head>
		</div>
	);
};
export default Header;
