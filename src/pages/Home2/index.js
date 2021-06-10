import SLIDER1IMAGE from "./../../img/slider/slider_img01.png";
import SLIDER2IMAGE from "./../../img/slider/slider_img02.png";
import SLIDERCIRCLE from "./../../img/slider/slider_circle.png";
import RELEASEDGAME1IMAGE from "./../../img/images/released_game_img01.jpg";
import RELEASEDGAME2IMAGE from "./../../img/images/released_game_img02.jpg";
import RELEASEDGAME3IMAGE from "./../../img/images/released_game_img03.jpg";
import RELEASEDGAMENAV1IMAGE from "./../../img/images/release_game_nav01.jpg";
import RELEASEDGAMENAV2IMAGE from "./../../img/images/release_game_nav02.jpg";
import RELEASEDGAMENAV3IMAGE from "./../../img/images/release_game_nav03.jpg";
import GAMERLISTICON1IMAGE from "./../../img/icon/gamer_list_icon01.png";
import GAMERLISTICON2IMAGE from "./../../img/icon/gamer_list_icon02.png";
import GAMERLISTICON3IMAGE from "./../../img/icon/gamer_list_icon03.png";
import JUSTGAMERSIMAGE from "./../../img/images/just_gamers_img.png";
import GAMERSCIRCLELINEIMAGE from "./../../img/images/gamers_circle_line.png";
import GAMERSCIRCLESHAPEIMAGE from "./../../img/images/gamers_circle_shape.png";
import JUSTGAMERSCHARTIMAGE from "./../../img/images/just_gamers_chart.png";
import FEATUREDGAMETHUMB1IMAGE from "./../../img/images/featured_game_thumb01.jpg";
import FEATUREDGAMEICONIMAGE from "./../../img/icon/featured_game_icon.png";
import FEATUREDGAMETHUMB2IMAGE from "./../../img/images/featured_game_thumb02.jpg";
import FEATUREDGAMETHUMB3IMAGE from "./../../img/images/featured_game_thumb03.jpg";
import FEATUREDGAMETHUMB4IMAGE from "./../../img/images/featured_game_thumb04.jpg";
import FEATUREDGAMETHUMB6IMAGE from "./../../img/images/featured_game_thumb06.jpg";
import FEATUREDGAMETHUMB5IMAGE from "./../../img/images/featured_game_thumb05.jpg";
import CTAIMAGE from "./../../img/images/cta_img.png";
import CTAICONIMAGE from "./../../img/icon/cta_icon.png";
import SPRODUCT1IMAGE from "./../../img/product/s_product_img01.jpg";
import SPRODUCT2IMAGE from "./../../img/product/s_product_img02.jpg";
import SPRODUCT3IMAGE from "./../../img/product/s_product_img03.jpg";
import SPRODUCT4IMAGE from "./../../img/product/s_product_img04.jpg";
import SBLOGTHUMB1IMAGE from "./../../img/blog/s_blog_thumb01.jpg";
import SBLOGTHUMB2IMAGE from "./../../img/blog/s_blog_thumb02.jpg";
import SBLOGTHUMB3IMAGE from "./../../img/blog/s_blog_thumb03.jpg";

const Home2 = () => {
  return (
    <>
      {/* main-area */}
      <main>
        {/* slider-area */}
        <section className="slider-area">
          <div className="slider-active">
            <div className="single-slider slider-bg slider-style-two">
              <div className="container-fluid container-full-padding">
                <div className="row">
                  <div className="col-xl-6 col-lg-7 col-md-11">
                    <div className="slider-content">
                      <h6 data-animation="fadeInUp" data-delay=".4s">
                        world gaming
                      </h6>
                      <h2 data-animation="fadeInUp" data-delay=".4s">
                        Create <span>Manage</span> Matches
                      </h2>
                      <p data-animation="fadeInUp" data-delay=".6s">
                        Find technology or people for digital projects in public
                        sector and Find an individual specialist develope
                        researcher.
                      </p>
                      <a
                        href="#"
                        className="btn btn-style-two"
                        data-animation="fadeInUp"
                        data-delay=".8s"
                      >
                        READ MORE
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="slider-img"
                data-animation="slideInRightS"
                data-delay=".6s"
              >
                <img src={SLIDER1IMAGE} alt="" />
              </div>
              <div
                className="slider-img slider-img2"
                data-animation="slideInLeftS"
                data-delay=".6s"
              >
                <img src={SLIDER2IMAGE} alt="" />
              </div>
              <div className="slider-circle-shape">
                <img src={SLIDERCIRCLE} alt="" className="rotateme" />
              </div>
            </div>
            <div
              className="single-slider slider-bg slider-style-two"
              style={{
                backgroundImage: "url(./../../../img/slider/slider_bg.jpg)",
              }}
            >
              <div className="container-fluid container-full-padding">
                <div className="row">
                  <div className="col-xl-6 col-lg-7 col-md-11">
                    <div className="slider-content">
                      <h6 data-animation="fadeInUp" data-delay=".4s">
                        world gaming
                      </h6>
                      <h2 data-animation="fadeInUp" data-delay=".4s">
                        Cod <span>Modern</span> Warfare
                      </h2>
                      <p data-animation="fadeInUp" data-delay=".6s">
                        Find technology or people for digital projects in public
                        sector and Find an individual specialist develope
                        researcher.
                      </p>
                      <a
                        href="#"
                        className="btn btn-style-two"
                        data-animation="fadeInUp"
                        data-delay=".8s"
                      >
                        READ MORE
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="slider-img"
                data-animation="slideInRightS"
                data-delay=".6s"
              >
                <img src={SLIDER1IMAGE} alt="" />
              </div>
              <div
                className="slider-img slider-img2"
                data-animation="slideInLeftS"
                data-delay=".6s"
              >
                <img src={SLIDER2IMAGE} alt="" />
              </div>
              <div className="slider-circle-shape">
                <img src={SLIDERCIRCLE} alt="" className="rotateme" />
              </div>
            </div>
          </div>
        </section>
        {/* slider-area-end */}
        {/* new-games-area */}
        <section className="released-games-area gray-bg pt-115 pb-70">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div className="section-title title-style-three text-center mb-20">
                  <h2>
                    released <span>GAMES</span>
                  </h2>
                  <p>
                    Compete with 100 players on a remote island for winner takes
                    showdown known issue where certain skin strategic
                  </p>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-12">
                <div className="released-game-active">
                  <div className="released-game-carousel">
                    <div className="released-game-item">
                      <div className="released-game-item-bg" />
                      <div className="released-game-img">
                        <img src={RELEASEDGAME1IMAGE} alt="" />
                      </div>
                      <div className="released-game-content">
                        <div className="released-game-rating">
                          <h5>Rating :</h5>
                          <div className="released-rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                        <h4>
                          Call <span>of Duty</span>
                        </h4>
                        <div className="released-game-list mb-15">
                          <ul>
                            <li>
                              <span>Category :</span>Virtual Game
                            </li>
                            <li>
                              <span>Model :</span>Compete 100 players
                            </li>
                            <li>
                              <span>Controller :</span>Playstation 5 , Xbox ,
                              PS4
                            </li>
                          </ul>
                        </div>
                        <p>
                          Compete with 100 players on a remote thats island for
                          winner takes showdown known issue
                        </p>
                        <a href="#" className="btn btn-style-two">
                          buy now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="released-game-carousel">
                    <div className="released-game-item">
                      <div className="released-game-item-bg" />
                      <div className="released-game-img">
                        <img src={RELEASEDGAME2IMAGE} alt="" />
                      </div>
                      <div className="released-game-content">
                        <div className="released-game-rating">
                          <h5>Rating :</h5>
                          <div className="released-rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                        <h4>
                          Battle <span>Grounds</span>
                        </h4>
                        <div className="released-game-list mb-15">
                          <ul>
                            <li>
                              <span>Category :</span>Virtual Game
                            </li>
                            <li>
                              <span>Model :</span>Compete 100 players
                            </li>
                            <li>
                              <span>Controller :</span>Playstation 5 , Xbox ,
                              PS4
                            </li>
                          </ul>
                        </div>
                        <p>
                          Compete with 100 players on a remote thats island for
                          winner takes showdown known issue
                        </p>
                        <a href="#" className="btn btn-style-two">
                          buy now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="released-game-carousel">
                    <div className="released-game-item">
                      <div className="released-game-item-bg" />
                      <div className="released-game-img">
                        <img src={RELEASEDGAME3IMAGE} alt="" />
                      </div>
                      <div className="released-game-content">
                        <div className="released-game-rating">
                          <h5>Rating :</h5>
                          <div className="released-rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                        <h4>
                          Apex <span>Legends</span>
                        </h4>
                        <div className="released-game-list mb-15">
                          <ul>
                            <li>
                              <span>Category :</span>Virtual Game
                            </li>
                            <li>
                              <span>Model :</span>Compete 100 players
                            </li>
                            <li>
                              <span>Controller :</span>Playstation 5 , Xbox ,
                              PS4
                            </li>
                          </ul>
                        </div>
                        <p>
                          Compete with 100 players on a remote thats island for
                          winner takes showdown known issue
                        </p>
                        <a href="#" className="btn btn-style-two">
                          buy now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="released-game-carousel">
                    <div className="released-game-item">
                      <div className="released-game-item-bg" />
                      <div className="released-game-img">
                        <img src={RELEASEDGAME3IMAGE} alt="" />
                      </div>
                      <div className="released-game-content">
                        <div className="released-game-rating">
                          <h5>Rating :</h5>
                          <div className="released-rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                        <h4>
                          Monster <span>Hunter</span>
                        </h4>
                        <div className="released-game-list mb-15">
                          <ul>
                            <li>
                              <span>Category :</span>Virtual Game
                            </li>
                            <li>
                              <span>Model :</span>Compete 100 players
                            </li>
                            <li>
                              <span>Controller :</span>Playstation 5 , Xbox ,
                              PS4
                            </li>
                          </ul>
                        </div>
                        <p>
                          Compete with 100 players on a remote thats island for
                          winner takes showdown known issue
                        </p>
                        <a href="#" className="btn btn-style-two">
                          buy now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-12">
                <div className="released-game-nav">
                  <div className="released-game-nav-item">
                    <img src={RELEASEDGAMENAV1IMAGE} alt="" />
                  </div>
                  <div className="released-game-nav-item">
                    <img src={RELEASEDGAMENAV2IMAGE} alt="" />
                  </div>
                  <div className="released-game-nav-item">
                    <img src={RELEASEDGAMENAV3IMAGE} alt="" />
                  </div>
                  <div className="released-game-nav-item">
                    <img src={RELEASEDGAMENAV2IMAGE} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* new-games-area-end */}
        {/* gamers-area */}
        <section className="just-gamers-area just-gamers-bg pt-115 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-6 col-md-10">
                <div className="section-title title-style-three white-title mb-70">
                  <h2>
                    JUST FOR <span>GAMERS</span>
                  </h2>
                  <p>
                    Compete with 100 player on a remote island for winner known
                    issue where certain strategic
                  </p>
                </div>
                <div className="just-gamers-list">
                  <ul>
                    <li>
                      <div className="just-gamers-list-icon">
                        <img src={GAMERLISTICON1IMAGE} alt="" />
                      </div>
                      <div className="just-gamers-list-content fix">
                        <h5>VR Development</h5>
                        <p>
                          See how well critics rating new video game release
                          with 100 players
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="just-gamers-list-icon">
                        <img src={GAMERLISTICON2IMAGE} alt="" />
                      </div>
                      <div className="just-gamers-list-content fix">
                        <h5>Design &amp; Strategy</h5>
                        <p>
                          Village and the subline of her own road, the Line
                          Lane. Pityful a rethoric question
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="just-gamers-list-icon">
                        <img src={GAMERLISTICON3IMAGE} alt="" />
                      </div>
                      <div className="just-gamers-list-content fix">
                        <h5>Jungle Pharaoh</h5>
                        <p>
                          Village and the subline of her own road, the Line
                          Lane. Pityful a rethoric question
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6 d-none d-lg-block">
                <div className="just-gamers-img">
                  <img
                    src={JUSTGAMERSIMAGE}
                    alt=""
                    className="just-gamers-character"
                  />
                  <div className="just-gamers-circle-shape">
                    <img src={GAMERSCIRCLELINEIMAGE} alt="" />
                    <img
                      src={GAMERSCIRCLESHAPEIMAGE}
                      alt=""
                      className="rotateme"
                    />
                  </div>
                  <img
                    src={JUSTGAMERSCHARTIMAGE}
                    alt=""
                    className="gamers-chart-shape"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* gamers-area-end */}
        {/* featured-game-area */}
        <section className="featured-game-area position-relative pt-115 pb-90">
          <div className="featured-game-bg" />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div className="section-title title-style-three text-center mb-70">
                  <h2>
                    JUST FEATURED <span>GAMES</span>
                  </h2>
                  <p>
                    Compete with 100 players on a remote island for winner takes
                    showdown known issue where certain skin strategic
                  </p>
                </div>
              </div>
            </div>
            <div className="row featured-active">
              <div className="col-lg-4 col-sm-6 grid-item">
                <div className="featured-game-item mb-30">
                  <div className="featured-game-thumb">
                    <img src={FEATUREDGAMETHUMB1IMAGE} alt="" />
                  </div>
                  <div className="featured-game-content">
                    <h4>
                      <a href="#">
                        JUST FOR <span>GAMERS</span>
                      </a>
                    </h4>
                    <div className="featured-game-meta">
                      <i className="fas fa-bell" />
                      <span>Playstation 5 , Xbox</span>
                    </div>
                  </div>
                  <div className="featured-game-content featured-game-overlay-content">
                    <div className="featured-game-icon">
                      <img src={FEATUREDGAMEICONIMAGE} alt="" />
                    </div>
                    <h4>
                      <a href="#">
                        JUST FOR <span>GAMERS</span>
                      </a>
                    </h4>
                    <div className="featured-game-meta">
                      <i className="fas fa-bell" />
                      <span>Playstation 5 , Xbox</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 grid-item">
                <div className="featured-game-item mb-30">
                  <div className="featured-game-thumb">
                    <img src={FEATUREDGAMETHUMB2IMAGE} alt="" />
                  </div>
                  <div className="featured-game-content">
                    <h4>
                      <a href="#">
                        JUST FOR <span>GAMERS</span>
                      </a>
                    </h4>
                    <div className="featured-game-meta">
                      <i className="fas fa-bell" />
                      <span>Playstation 5 , Xbox</span>
                    </div>
                  </div>
                  <div className="featured-game-content featured-game-overlay-content">
                    <div className="featured-game-icon">
                      <img src={FEATUREDGAMEICONIMAGE} alt="" />
                    </div>
                    <h4>
                      <a href="#">
                        JUST FOR <span>GAMERS</span>
                      </a>
                    </h4>
                    <div className="featured-game-meta">
                      <i className="fas fa-bell" />
                      <span>Playstation 5 , Xbox</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 grid-item">
                <div className="featured-game-item mb-30">
                  <div className="featured-game-thumb">
                    <img src={FEATUREDGAMETHUMB3IMAGE} alt="" />
                  </div>
                  <div className="featured-game-content">
                    <h4>
                      <a href="#">
                        JUST FOR <span>GAMERS</span>
                      </a>
                    </h4>
                    <div className="featured-game-meta">
                      <i className="fas fa-bell" />
                      <span>Playstation 5 , Xbox</span>
                    </div>
                  </div>
                  <div className="featured-game-content featured-game-overlay-content">
                    <div className="featured-game-icon">
                      <img src={FEATUREDGAMEICONIMAGE} alt="" />
                    </div>
                    <h4>
                      <a href="#">
                        JUST FOR <span>GAMERS</span>
                      </a>
                    </h4>
                    <div className="featured-game-meta">
                      <i className="fas fa-bell" />
                      <span>Playstation 5 , Xbox</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 grid-item">
                <div className="featured-game-item mb-30">
                  <div className="featured-game-thumb">
                    <img src={FEATUREDGAMETHUMB4IMAGE} alt="" />
                  </div>
                  <div className="featured-game-content">
                    <h4>
                      <a href="#">
                        JUST FOR <span>GAMERS</span>
                      </a>
                    </h4>
                    <div className="featured-game-meta">
                      <i className="fas fa-bell" />
                      <span>Playstation 5 , Xbox</span>
                    </div>
                  </div>
                  <div className="featured-game-content featured-game-overlay-content">
                    <div className="featured-game-icon">
                      <img src={FEATUREDGAMEICONIMAGE} alt="" />
                    </div>
                    <h4>
                      <a href="#">
                        JUST FOR <span>GAMERS</span>
                      </a>
                    </h4>
                    <div className="featured-game-meta">
                      <i className="fas fa-bell" />
                      <span>Playstation 5 , Xbox</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 grid-item">
                <div className="featured-game-item mb-30">
                  <div className="featured-game-thumb">
                    <img src={FEATUREDGAMETHUMB6IMAGE} alt="" />
                  </div>
                  <div className="featured-game-content">
                    <h4>
                      <a href="#">
                        JUST FOR <span>GAMERS</span>
                      </a>
                    </h4>
                    <div className="featured-game-meta">
                      <i className="fas fa-bell" />
                      <span>Playstation 5 , Xbox</span>
                    </div>
                  </div>
                  <div className="featured-game-content featured-game-overlay-content">
                    <div className="featured-game-icon">
                      <img src={FEATUREDGAMEICONIMAGE} alt="" />
                    </div>
                    <h4>
                      <a href="#">
                        JUST FOR <span>GAMERS</span>
                      </a>
                    </h4>
                    <div className="featured-game-meta">
                      <i className="fas fa-bell" />
                      <span>Playstation 5 , Xbox</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 grid-item">
                <div className="featured-game-item mb-30">
                  <div className="featured-game-thumb">
                    <img src={FEATUREDGAMETHUMB5IMAGE} alt="" />
                  </div>
                  <div className="featured-game-content">
                    <h4>
                      <a href="#">
                        JUST FOR <span>GAMERS</span>
                      </a>
                    </h4>
                    <div className="featured-game-meta">
                      <i className="fas fa-bell" />
                      <span>Playstation 5 , Xbox</span>
                    </div>
                  </div>
                  <div className="featured-game-content featured-game-overlay-content">
                    <div className="featured-game-icon">
                      <img src={FEATUREDGAMEICONIMAGE} alt="" />
                    </div>
                    <h4>
                      <a href="#">
                        JUST FOR <span>GAMERS</span>
                      </a>
                    </h4>
                    <div className="featured-game-meta">
                      <i className="fas fa-bell" />
                      <span>Playstation 5 , Xbox</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* featured-game-area-end */}
        {/* cta-area */}
        <section className="cta-area cta-bg">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-5 col-lg-6">
                <div className="cta-img">
                  <img src={CTAIMAGE} alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="cta-content">
                  <div className="cta-icon mb-15">
                    <img src={CTAICONIMAGE} alt="" />
                  </div>
                  <div className="section-title title-style-three white-title mb-50">
                    <h2>
                      WORLDS MEET <span>Real</span>
                    </h2>
                    <p>
                      Compete with 100 player on a remote island for winner
                      known issue where certain strategic
                    </p>
                  </div>
                  <div className="cta-btn">
                    <a href="#" className="btn btn-style-two">
                      VIEW SCHEDULE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* cta-area-end */}
        {/* shop-area */}
        <section className="shop-area black-bg pt-115 pb-90">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div className="section-title title-style-three white-title text-center mb-40">
                  <h2>
                    Gaming Products <span>Corner</span>
                  </h2>
                  <p>
                    Compete with 100 players on a remote island for winner takes
                    showdown known issue where certain skin strategic
                  </p>
                </div>
              </div>
            </div>
            <div className="row product-active">
              <div className="col-xl-3">
                <div className="shop-item">
                  <div className="product-thumb">
                    <a href="#">
                      <img src={SPRODUCT1IMAGE} alt="" />
                    </a>
                  </div>
                  <div className="product-content">
                    <div className="product-tag">
                      <a href="#">t-shirt</a>
                    </div>
                    <h4>
                      <a href="#">Women Black T-shirt</a>
                    </h4>
                    <div className="product-meta">
                      <div className="product-price">
                        <h5>$29.00</h5>
                      </div>
                      <div className="product-cart-action">
                        <a href="#">
                          <i className="fas fa-shopping-basket" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="shop-item">
                  <div className="product-thumb">
                    <a href="#">
                      <img src={SPRODUCT2IMAGE} alt="" />
                    </a>
                  </div>
                  <div className="product-content">
                    <div className="product-tag">
                      <a href="#">x-box</a>
                    </div>
                    <h4>
                      <a href="#">Gears 5 Xbox Controller</a>
                    </h4>
                    <div className="product-meta">
                      <div className="product-price">
                        <h5>$29.00</h5>
                      </div>
                      <div className="product-cart-action">
                        <a href="#">
                          <i className="fas fa-shopping-basket" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="shop-item">
                  <div className="product-thumb">
                    <a href="#">
                      <img src={SPRODUCT3IMAGE} alt="" />
                    </a>
                  </div>
                  <div className="product-content">
                    <div className="product-tag">
                      <a href="#">graphics</a>
                    </div>
                    <h4>
                      <a href="#">GeForce RTX 2070</a>
                    </h4>
                    <div className="product-meta">
                      <div className="product-price">
                        <h5>$29.00</h5>
                      </div>
                      <div className="product-cart-action">
                        <a href="#">
                          <i className="fas fa-shopping-basket" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="shop-item">
                  <div className="product-thumb">
                    <a href="#">
                      <img src={SPRODUCT4IMAGE} alt="" />
                    </a>
                  </div>
                  <div className="product-content">
                    <div className="product-tag">
                      <a href="#">VR-Box</a>
                    </div>
                    <h4>
                      <a href="#">Virtual Reality Smiled</a>
                    </h4>
                    <div className="product-meta">
                      <div className="product-price">
                        <h5>$29.00</h5>
                      </div>
                      <div className="product-cart-action">
                        <a href="#">
                          <i className="fas fa-shopping-basket" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="shop-item">
                  <div className="product-thumb">
                    <a href="#">
                      <img src={SPRODUCT4IMAGE} alt="" />
                    </a>
                  </div>
                  <div className="product-content">
                    <div className="product-tag">
                      <a href="#">VR-Box</a>
                    </div>
                    <h4>
                      <a href="#">Virtual Reality Smiled</a>
                    </h4>
                    <div className="product-meta">
                      <div className="product-price">
                        <h5>$29.00</h5>
                      </div>
                      <div className="product-cart-action">
                        <a href="#">
                          <i className="fas fa-shopping-basket" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* shop-area-end */}
        {/* blog-area */}
        <section className="blog-area pt-115 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div className="section-title title-style-three text-center mb-70">
                  <h2>
                    Latest News <span>Articles</span>
                  </h2>
                  <p>
                    Compete with 100 players on a remote island for winner takes
                    showdown known issue where certain skin strategic
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="blog-post blog-style-two mb-50">
                  <div className="blog-thumb mb-30">
                    <a href="#">
                      <img src={SBLOGTHUMB1IMAGE} alt="" />
                    </a>
                  </div>
                  <div className="blog-post-content">
                    <h4>
                      <a href="#">Shooter action video game</a>
                    </h4>
                    <div className="blog-meta">
                      <ul>
                        <li>
                          <i className="far fa-clock" />
                          July 4, 2020
                        </li>
                        <li>
                          <i className="fas fa-tag" />
                          <a href="#">Shooter</a>
                        </li>
                      </ul>
                    </div>
                    <p>
                      Compete with 100 players on a remote island for winner
                      takes showdown known for issue where certain skin
                      strategic [...]
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="blog-post blog-style-two mb-50">
                  <div className="blog-thumb mb-30">
                    <a href="#">
                      <img src={SBLOGTHUMB2IMAGE} alt="" />
                    </a>
                  </div>
                  <div className="blog-post-content">
                    <h4>
                      <a href="#">multiplayer environments</a>
                    </h4>
                    <div className="blog-meta">
                      <ul>
                        <li>
                          <i className="far fa-clock" />
                          July 4, 2020
                        </li>
                        <li>
                          <i className="fas fa-tag" />
                          <a href="#">Shooter</a>
                        </li>
                      </ul>
                    </div>
                    <p>
                      Compete with 100 players on a remote island for winner
                      takes showdown known for issue where certain skin
                      strategic [...]
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="blog-post blog-style-two mb-50">
                  <div className="blog-thumb mb-30">
                    <a href="#">
                      <img src={SBLOGTHUMB3IMAGE} alt="" />
                    </a>
                  </div>
                  <div className="blog-post-content">
                    <h4>
                      <a href="#">Bullet Force Multiplayer</a>
                    </h4>
                    <div className="blog-meta">
                      <ul>
                        <li>
                          <i className="far fa-clock" />
                          July 4, 2020
                        </li>
                        <li>
                          <i className="fas fa-tag" />
                          <a href="#">Shooter</a>
                        </li>
                      </ul>
                    </div>
                    <p>
                      Compete with 100 players on a remote island for winner
                      takes showdown known for issue where certain skin
                      strategic [...]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* blog-area-end */}
      </main>
      {/* main-area-end */}
    </>
  );
};

export default Home2;
