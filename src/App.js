import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import GameOverview from "./pages/GameOverview";
import GameSingle from "./pages/GameSingle";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";
import Home4 from "./pages/Home4";
import Shop from "./pages/Shop";
import UpcomingGames from "./pages/UpcomingGames";
// import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/blogDetails" component={BlogDetails} />
        <Route path="/community" component={Community} />
        <Route path="/contact" component={Contact} />
        <Route path="/gameOverview" component={GameOverview} />
        <Route path="/gameSingle" component={GameSingle} />
        <Route exact path="/" component={Home} />
        <Route path="/home2" component={Home2} />
        <Route path="/home3" component={Home3} />
        <Route path="/home4" component={Home4} />
        <Route path="/shop" component={Shop} />
        <Route path="/upcomingGames" component={UpcomingGames} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
