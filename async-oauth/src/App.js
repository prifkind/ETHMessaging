import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } =
    useAuth0();

  return (
    <div className="App">
      <ul>
        <li>
          <button onClick={loginWithPopup}>Login with Popup</button>
        </li>
        <li>
          <button onClick={loginWithRedirect}>Login with Redirect</button>
        </li>
        <li>
          <button onClick={logout}>Logout</button>
        </li>
      </ul>
      <h2>User is {isAuthenticated ? "logged in" : "not yet logged in"}</h2>
      {isAuthenticated && <pre>{JSON.stringify(user, null, 2)}</pre>}
    </div>
  );
}

export default App;
