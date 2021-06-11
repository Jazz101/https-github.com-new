import PreLoader from "./../PreLoader";
import LOGOIMAGE from "./../../img/logo/logo.png";
import CARTIMAGE from "./../../img/product/cart_p01.jpg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <PreLoader />
      {/* header-area */}
      <header>
        <div className="header-top-area d-none d-lg-block">
          <div className="container-fluid container-full-padding">
            <div className="row align-items-center">
              <div className="col-lg-6 d-none d-lg-block">
                <div className="header-top-offer">
                  <p>Exclusive Black Friday ! Offer</p>
                  <span className="coming-time" data-countdown="2020/6/20" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="header-top-right">
                  <div className="header-social">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="header-top-action">
                    <ul>
                      <li>
                        <div className="header-top-mail">
                          <p>
                            <span>|</span>
                            <i className="far fa-envelope" />
                            <a href="mailto:info@gmail.com">
                              info@gecoinfo.com
                            </a>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="header-user-login">
                          <a href="#">
                            <i className="fas fa-user" />
                            Login
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="sticky-header" className="main-header">
          <div className="container-fluid container-full-padding">
            <div className="row">
              <div className="col-12">
                <div className="main-menu">
                  <nav>
                    <div className="logo">
                      <NavLink to="home2">
                        <img src={LOGOIMAGE} alt="Logo" />
                      </NavLink>
                    </div>
                    <div
                      id="mobile-menu"
                      className="navbar-wrap d-none d-lg-flex"
                    >
                      <ul>
                        {/* <li className="show">
                          <a href="#">Home</a>
                          <ul className="submenu">
                            <li>
                              <NavLink to="home2">Home One</NavLink>
                            </li>
                            <li>
                              <NavLink to="home3">Home Two</NavLink>
                            </li>
                            <li>
                              <NavLink to="home4">Home Three</NavLink>
                            </li>
                            <li className="active">
                              <NavLink to="/">Home Four</NavLink>
                            </li>
                          </ul>
                        </li> */}
                        {/* <li>
                          <a href="#">Pages</a>
                          <ul className="submenu">
                            <li>
                              <NavLink to="about">About Story</NavLink>
                            </li>
                            <li>
                              <NavLink to="upcomingGames">
                                Upcoming Games
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="gameSingle">Game Single</NavLink>
                            </li>
                          </ul>
                        </li> */}
                        <li className="show">
                          <NavLink to="gameOverview">Play</NavLink>
                        </li>
                        <li>
                          <NavLink to="wallet">Wallet</NavLink>
                        </li>
                        <li>
                          <NavLink to="community">Community</NavLink>
                        </li>
                        {/* <li>
                          <a href="#">Blog</a>
                          <ul className="submenu">
                            <li>
                              <NavLink to="blog">News Page</NavLink>
                            </li>
                            <li>
                              <NavLink to="blogDetails">News Details</NavLink>
                            </li>
                          </ul>
                        </li> */}
                        <li>
                          <NavLink to="support">Support</NavLink>
                        </li>
                        <li>
                          <NavLink to="account">Account</NavLink>
                        </li>
                        <li>
                          <NavLink to="login">Login</NavLink>
                        </li>
                      </ul>
                    </div>
                    <div className="header-action">
                      <ul>
                        <li className="header-shop-cart">
                          <a href="#">
                            <i className="fas fa-shopping-basket" />
                            <span>0</span>
                          </a>
                          <ul className="minicart">
                            <li className="d-flex align-items-start">
                              <div className="cart-img">
                                <a href="#">
                                  <img src={CARTIMAGE} alt="" />
                                </a>
                              </div>
                              <div className="cart-content">
                                <h4>
                                  <a href="#">Xbox One Controller</a>
                                </h4>
                                <div className="cart-price">
                                  <span className="new">$229.9</span>
                                  <span>
                                    <del>$229.9</del>
                                  </span>
                                </div>
                              </div>
                              <div className="del-icon">
                                <a href="#">
                                  <i className="far fa-trash-alt" />
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="total-price">
                                <span className="f-left">Total:</span>
                                <span className="f-right">$239.9</span>
                              </div>
                            </li>
                            <li>
                              <div className="checkout-link">
                                {/* <a href="cart.html">Shopping Cart</a> */}
                                <a href="#">Shopping Cart</a>
                                {/* <a className="red-color" href="checkout.html">
                                  Checkout
                                </a> */}
                                <a className="red-color" href="#">
                                  Checkout
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="header-search">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#search-modal"
                          >
                            <i className="fas fa-search" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="mobile-menu" />
              </div>
              {/* Modal Search */}
              <div
                className="modal fade"
                id="search-modal"
                tabIndex={-1}
                role="dialog"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <form>
                      <input type="text" placeholder="Search here..." />
                      <button>
                        <i className="fa fa-search" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* header-area-end */}
    </>
  );
};

export default Header;
