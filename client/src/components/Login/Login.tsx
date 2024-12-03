import "./Login.css";

function Login() {
	return (
		<div className="container">
			<form action="submit" className="login-form">
				<label htmlFor="email">
					Mon email:
					<input
						type="email"
						name="email"
						id="email"
						placeholder="mon email ici"
					/>
				</label>
				<label htmlFor="password">
					Mot de passe:
					<input
						type="password"
						name="password"
						id="password"
						placeholder="*******"
					/>
				</label>

				<button>Valider</button>
			</form>
		</div>
	);
}

export default Login;
