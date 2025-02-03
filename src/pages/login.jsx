import {useState} from "react";

 export default function Login() {
    const [email, SetEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        //Handle form submission, for example, authenticate the user
        console.log("email:", email);
        console.log("password:", password);
    };

  return (
    <div className="login-page">
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className="login-form">
            <div>
                <label htmlFor="email">Email</label>
                <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => SetEmail(e.target.value)}
                required
                >
                </input>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                >
                </input>
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}