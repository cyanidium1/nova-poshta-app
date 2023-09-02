import { Route, Routes } from "react-router-dom";
import { Addresses } from "../pages/Addresses";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Container, Header } from "./App.styled";
import Navigation from "./Navigation/Navigation";

const App = () => {
  return (
    <Container>
      <Header>
        <div className="flex items-center">
          <span className="mr-1" role="img" aria-label="truck icon">
            🚚
          </span>{" "}
          <p className="hidden text-2xl min-[465px]:block">Нова Пошта</p>
        </div>
        <Navigation />
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Addresses />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};

export default App;
