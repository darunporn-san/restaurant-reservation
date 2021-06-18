import React from "react";
import classnames from "classnames";

interface IFormLogin {
	register: any;
	error: any;
	handleSubmit: () => void;
}

const FormLogin: React.FC<IFormLogin> = (props) => {
	return (
		<>
			<form onSubmit={props.handleSubmit}>
				<div>
					<label>Email</label>
					<input
						type="text"
						className={classnames("form-control input-radius", {
							"is-invalid": props.error.name,
						})}
						{...props.register("name")}
					/>
					{props.error.name && (
						<p style={{ display: "block" }} className="invalid-feedback">
							{props.error.name.message}
						</p>
					)}
				</div>
				<div className="mt-3">
					<label>Password</label>
					<input
						type="password"
						className={classnames("form-control input-radius", {
							"is-invalid": props.error.password,
						})}
						{...props.register("password")}
					/>
					{props.error.password && (
						<p style={{ display: "block" }} className="invalid-feedback">
							{props.error.password.message}
						</p>
					)}
				</div>
				<div className="text-center">
					<button type="submit" className="btn btn-primary mt-3 text-end">
						Login
					</button>
				</div>
			</form>
		</>
	);
};
export default FormLogin;
