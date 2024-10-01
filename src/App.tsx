import { Container } from "./components/Container/Container";
import { Header } from "./components/Header/Header";
import { SearchBlock } from "./components/SearchBlock/SearchBlock";
import { Banner } from "./components/Banner/Banner";
import { InfoBlock } from "./components/InfoBlock/InfoBlock";
import './App.css'

function App() {

  return (
    <>
      <Container>
        <Header />
        <SearchBlock/>
        <Banner img=""/>
        <InfoBlock/>
      </Container>
    </>
  )
}

export default App
