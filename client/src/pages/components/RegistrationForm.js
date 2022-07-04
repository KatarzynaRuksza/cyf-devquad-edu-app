import React, { useState } from "react";
import "../styles/RegistrationForm.css";

const RegistrationForm = () => {
	const [username, setUsername] = useState(null);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [confirm, setConfirm] = useState(null);
	const [name, setName] = useState(null);
	const [age, setAge] = useState(null);
	const [country, setCountry] = useState(null);

	const handleInputChange = (e) => {
		const { id, value } = e.target;

		if (id === "username") {
			setUsername(value);
		}
		if (id === "email") {
			setEmail(value);
		}
		if (id === "password") {
			setPassword(value);
		}
		if (id === "confirm") {
			setConfirm(value);
		}
		if (id === "name") {
			setName(value);
		}
		if (id === "age") {
			setAge(value);
		}
		if (id === "country") {
			setCountry(value);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="form">
			<h2>Register</h2>
			<div className="form_body">
				<div className="username">
					<label className="form_label" htmlFor="username">
						Username
					</label>
					<input
						className="form_input"
						type="text"
						id="username"
						value={username}
						onChange={(e) => handleInputChange(e)}
						placeholder="Username..."
						required
					></input>
				</div>
				<div className="email">
					<label className="form_label" htmlFor="email">
						Email
					</label>
					<input
						className="form_input"
						type="email"
						id="email"
						value={email}
						onChange={(e) => handleInputChange(e)}
						placeholder="Email..."
						required
					></input>
				</div>
				<div className="password">
					<label className="form_label" htmlFor="password">
						Password
					</label>
					<input
						className="form_input"
						type="text"
						id="password"
						value={password}
						onChange={(e) => handleInputChange(e)}
						placeholder="Password..."
						required
					></input>
				</div>
				<div className="confirm_password">
					<label className="form_label" htmlFor="confirm">
						Confirm
					</label>
					<input
						className="form_input"
						type="text"
						id="confirm"
						value={confirm}
						onChange={(e) => handleInputChange(e)}
						placeholder="Confirm password..."
						required
					></input>
				</div>
				<div className="name">
					<label className="form_label" htmlFor="name">
						Name
					</label>
					<input
						className="form_input"
						type="text"
						id="name"
						value={name}
						onChange={(e) => handleInputChange(e)}
						placeholder="Name..."
					></input>
				</div>
				<div className="age">
					<label className="form_label" htmlFor="age">
						Age
					</label>
					<input
						className="form_input"
						type="text"
						id="age"
						value={age}
						onChange={(e) => handleInputChange(e)}
						placeholder="Age..."
					></input>
				</div>
				<div className="country">
					<label className="form_label" htmlFor="country">
						Country
					</label>
					<input
						className="form_input"
						type="text"
						id="country"
						value={country}
						onChange={(e) => handleInputChange(e)}
						placeholder="Country..."
					></input>
				</div>
			</div>

			<div className="form_button">
				<button onSubmit={() => handleSubmit()} type="submit" className="btn">
					Register
				</button>
			</div>
		</div>
	);
};

export default RegistrationForm;
