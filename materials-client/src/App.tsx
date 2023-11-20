import Button from "./ui/Button/Button";
import Card from "./ui/Card/Card";
import Field from "./ui/Field/Field";
import Form from "./ui/Form/Form";
import Heading from "./ui/Heading/Heading";
import Text from "./ui/Text/Text";

function App() {
  return (
    <div
      style={{
        display: "flex",
        gap: "3rem",
        flexWrap: "wrap",
        alignItems: "flex-start",
      }}
    >
      <Heading level="h1">Heading h1</Heading>
      <Heading level="h2">Heading h2</Heading>
      <Heading level="h3">Heading h3</Heading>
      <Button>Log in</Button>
      <Button variant="secondary">Log in</Button>
      <Button variant="text">Log in</Button>
      <Card>
        <Heading level="h3" center>
          Card
        </Heading>
        <Field type="text" placeholder="Field" />
      </Card>
      <Text>Body</Text>
      <Text variant="error">Error</Text>
      <Text variant="muted">Muted</Text>
      <Card>
        <Heading level="h3" center>
          Form
        </Heading>
        <Form
          config={{
            email: { type: "email", placeholder: "Email", required: true },
            password: {
              type: "password",
              placeholder: "Password",
              required: true,
            },
          }}
          onSubmit={console.log}
        />
      </Card>
    </div>
  );
}

export default App;
