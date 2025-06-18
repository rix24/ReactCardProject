import ListGroup from "./components/ListGroup";
import ContentCard from "./components/ContentCard";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ContentCard />
      {/* <ListGroup /> */}
    </div>
  );
}

export default App;
