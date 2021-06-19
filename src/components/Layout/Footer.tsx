import { Foot, MyName } from "../../container/style";

interface IFooter {
	noFooter: boolean;
}
const Footer: React.FC<IFooter> = (props) => {
	return (
		<>
				<div style={{display:props.noFooter?"none":"block"}}>

			<Foot color="#01A9F4">
				<MyName>Darunporn Santisawaddiwong</MyName>
			</Foot>
			</div>
		</>
	);
};
export default Footer;
