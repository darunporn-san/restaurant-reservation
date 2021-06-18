import * as React from "react";
import classname from "classnames";

interface IModal {
	show: boolean;
	size?: "modal-sm" | "modal-md" | "modal-lg" | "modal-xl";
	center?: boolean;
}
const Modal: React.FC<IModal> = (props) => {
	return (
		<>
			<div
				className={classname("modal", {
					"modal-dialog-centered": props.center,
				})}
				style={{
					display: props.show ? "block" : "none",
					background: `rgba(0,0,0,0.4)`,
				}}>
				<div className={classname("modal-dialog animated", props.size)}>
					{props.children}
				</div>
			</div>
		</>
	);
};
export default Modal;
