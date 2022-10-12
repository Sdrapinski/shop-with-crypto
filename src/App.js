import { NotificationProvider } from "@web3uikit/core";
import { Container } from "react-bootstrap";
import { MoralisProvider } from "react-moralis";
import AppProvider from "./appContext";
import HomeWrapper from "./components/Homepage/HomeWrapper";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <MoralisProvider initializeOnMount={false}>
      <NotificationProvider>
        <AppProvider>
          <Container fluid>
            <Navbar />
            <HomeWrapper />
          </Container>
        </AppProvider>
      </NotificationProvider>
    </MoralisProvider>
  );
}

export default App;
