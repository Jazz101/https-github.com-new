import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Account from "./pages/Account";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Community from "./pages/Community";
import Wallet from "./pages/Wallet";
import Contact from "./pages/Contact";
import GameOverview from "./pages/GameOverview";
import GameSingle from "./pages/GameSingle";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";
import Home4 from "./pages/Home4";
import Shop from "./pages/Shop";
import Support from "./pages/Support";
import Terms_Condition from "./pages/Terms_Condition";
import UpcomingGames from "./pages/UpcomingGames";
import Login from "./pages/Login";
// import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/account" component={Account} />
        <Route path="/blog" component={Blog} />
        <Route path="/blogDetails" component={BlogDetails} />
        <Route path="/community" component={Community} />
        <Route path="/wallet" component={Wallet} />
        <Route path="/contact" component={Contact} />
        <Route path="/gameOverview" component={GameOverview} />
        <Route path="/gameSingle" component={GameSingle} />
        <Route exact path="/" component={Home4} />
        <Route path="/home2" component={Home2} />
        <Route path="/home3" component={Home3} />
        <Route path="/home4" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/shop" component={Shop} />
        <Route path="/support" component={Support} />
        <Route path="/terms-condition" component={Terms_Condition} />
        <Route path="/upcomingGames" component={UpcomingGames} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
