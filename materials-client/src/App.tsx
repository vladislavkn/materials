import Button from "./ui/Button/Button";
import Card from "./ui/Card/Card";
import Heading from "./ui/Heading/Heading";

function App() {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Heading level="h1">Heading h1</Heading>
      <Heading level="h2">Heading h2</Heading>
      <Heading>Heading h3</Heading>
      <Button>Log in</Button>
      <Button variant="secondary">Log in</Button>
      <Button variant="text">Log in</Button>
      <Card>
        <Heading level="h3" center>
          Card
        </Heading>
      </Card>
    </div>
  );
}

export default App;
