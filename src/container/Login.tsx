import FormLogin from "../components/Form/FormLogin";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const submitLogin = handleSubmit(async (data) => {
		setTimeout(() => {
			<Redirect to="/" />;
		}, 1000);
	});
	return (
		<>
			<div className="App-header">
				<div className="row h-100 ">
					<div className="col m-auto">users</div>
					<div className="formLR col">
						<div className="designFromLogin">
							<h3 className="text-center">Login</h3>
							<FormLogin
								register={register}
								error={errors}
								handleSubmit={submitLogin}
							/>
							<hr />
							<div className="text-end">
								New Member?<a href="/register"> Sign Up Now</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Login;
