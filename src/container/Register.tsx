import { useForm } from "react-hook-form";
import FormRegister from "../components/Form/FormRegister";

const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const submitRegister = () => {};
	return (
		<>
			<div className="App-header">
				<div className="row h-100">
					<div className="col m-auto">cRegister</div>
					<div className="formLR col">
						<div className="designFromRegister">
							<h3 className="text-center">Register</h3>
							<FormRegister
								register={register}
								error={errors}
								handleSubmit={submitRegister}
							/>
							<hr />
							<div className="text-end">
								<a href="/login">Login</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Register;
