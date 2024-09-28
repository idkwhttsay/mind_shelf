export function LoginPopup(props: { setClicked: (clicked: boolean) => void }) {
  return (
    <>
      <div className="dark" onClick={() => props.setClicked(false)} />
      <div className="popup-box">
        <h2>Login with your mind shelf ID</h2>
        <form className="popup-form">
          <label>Email:</label>
          <input />
          <label>Password:</label>
          <input />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
