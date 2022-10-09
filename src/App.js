import { NotificationProvider } from "@web3uikit/core";
import { Container } from "react-bootstrap";
import { MoralisProvider } from "react-moralis";
import HomeWrapper from "./components/Homepage/HomeWrapper";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <MoralisProvider initializeOnMount={false}>
      <NotificationProvider>
        <Container fluid>
          <Navbar />
          <HomeWrapper />
        </Container>
      </NotificationProvider>
    </MoralisProvider>
  );
}

export default App;
