import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div
      className="home"
      style={{ alignItems: "center", textAlign: "center", paddingTop: "20px" }}
    >
      <h1>Welcome to the Home Page</h1>
      <p>This is the main content of the home page.</p>
      <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
        <Link to="/contentCardDisplayPage">
          <button>Go to Content Card Display Page</button>
        </Link>
        <Link to="/testimonialCardDisplayPage">
          <button>Go to Testimonial Card Display Page</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
