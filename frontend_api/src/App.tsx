import { Routes, Route, Link } from 'react-router-dom'
import { HomePage } from './pages/homePage';
import { AboutPage } from './pages/aboutPage';
import { Container, Navbar } from 'react-bootstrap';
function App() {
  return (
    <>
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Link className="nav-link" to="/">Home</Link>
            <h1>Moviepedia</h1>
            <Link className="nav-link" to="/about">About Me</Link>
          </Container>
        </Navbar><br />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Container>
    </>
  );
}
export default App;
