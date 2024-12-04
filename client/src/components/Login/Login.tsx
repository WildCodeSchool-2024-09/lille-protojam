import { useContext, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../services/UserContext";

function Login() {
	const [login, setLogin] = useState({ email: "", password: "" });
	const [errorMessage, setErrorMessage] = useState("");
	const navigate = useNavigate();
	const { setUserConnected } = useContext(UserContext);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (
			login.email === "legentiltoto@bienveillance.fr" &&
			login.password === "devenirgentil"
		) {
			setUserConnected(true);
			navigate("/profile");
		} else if (login.email !== "legentiltoto@bienveillance.fr") {
			setErrorMessage("Mauvais email");
		} else if (login.password !== "devenirgentil") {
			setErrorMessage("mauvais mot de passe");
		}
	};

	return (
		<div className="container">
			<form action="submit" className="login-form" onSubmit={handleSubmit}>
				<label htmlFor="email">
					Mon email:
					<input
						type="email"
						name="email"
						id="email"
						value={login.email}
						onChange={(e) => {
							setLogin({ ...login, email: e.target.value });
						}}
						placeholder="mon email ici"
					/>
				</label>
				<label htmlFor="password">
					Mot de passe:
					<input
						type="password"
						name="password"
						id="password"
						value={login.password}
						placeholder="*******"
						onChange={(e) => {
							setLogin({ ...login, password: e.target.value });
						}}
					/>
				</label>
				{errorMessage && <p className="error-message"> {errorMessage}</p>}
				<button type="submit">Valider</button>
			</form>
		</div>
	);
}

export default Login;
