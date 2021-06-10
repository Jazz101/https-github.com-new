import BRANDLOGO1IMAGE from "./../../img/brand/brand_logo01.png";
import BRANDLOGO2IMAGE from "./../../img/brand/brand_logo02.png";
import BRANDLOGO3IMAGE from "./../../img/brand/brand_logo03.png";
import BRANDLOGO4IMAGE from "./../../img/brand/brand_logo04.png";
import BRANDLOGO5IMAGE from "./../../img/brand/brand_logo05.png";
import BRANDLOGO6IMAGE from "./../../img/brand/brand_logo06.png";
import LATESTGAMESTHUMB1IMAGE from "./../../img/product/latest_games_thumb01.jpg";
import LATESTGAMESTHUMB2IMAGE from "./../../img/product/latest_games_thumb02.jpg";
import LATESTGAMESTHUMB3IMAGE from "./../../img/product/latest_games_thumb03.jpg";
import ABOUTUSIMAGE from "./../../img/images/about_us_img.jpg";
import PLAYBUTTONIMAGE from "./../../img/icon/play_btn.png";
import TEAMLOGO1IMAGE from "./../../img/team/team_logo01.png";
import MATCHVSIMAGE from "./../../img/team/match_vs.png";
import TEAMLOGO2IMAGE from "./../../img/team/team_logo02.png";
import TEAMLOGO3IMAGE from "./../../img/team/team_logo03.png";
import TEAMLOGO4IMAGE from "./../../img/team/team_logo04.png";
import TEAMLOGO5IMAGE from "./../../img/team/team_logo05.png";
import TEAMLOGO6IMAGE from "./../../img/team/team_logo06.png";
import FEATURESTHUMB1IMAGE from "./../../img/images/features_thumb01.jpg";
import FEATURESTHUMB2IMAGE from "./../../img/images/features_thumb02.jpg";
import FEATURESTHUMB3IMAGE from "./../../img/images/features_thumb03.jpg";
import FEATURESTHUMB4IMAGE from "./../../img/images/features_thumb04.jpg";
import FEATURESTHUMB5IMAGE from "./../../img/images/features_thumb05.jpg";
import FEATURESTHUMB6IMAGE from "./../../img/images/features_thumb06.jpg";
import FACTICON1IMAGE from "./../../img/icon/fact_icon01.png";
import FACTICON2IMAGE from "./../../img/icon/fact_icon02.png";
import FACTICON3IMAGE from "./../../img/icon/fact_icon03.png";
import FACTICON4IMAGE from "./../../img/icon/fact_icon04.png";
import PRODUCT1IMAGE from "./../../img/product/product_img01.jpg";
import PRODUCT2IMAGE from "./../../img/product/product_img02.jpg";
import PRODUCT3IMAGE from "./../../img/product/product_img03.jpg";
import PRODUCT4IMAGE from "./../../img/product/product_img04.jpg";
import BLOGTHUMB1IMAGE from "./../../img/blog/blog_thumb01.jpg";
import BLOGTHUMB2IMAGE from "./../../img/blog/blog_thumb02.jpg";
import BLOGTHUMB3IMAGE from "./../../img/blog/blog_thumb03.jpg";
import TESTIAVATARIMAGE from "./../../img/images/testi_avatar.png";
import TESTIQUOTEIMAGE from "./../../img/icon/testi_quote.png";

const Home = () => {
  return (
    <>
      {/* main-area */}
      <main>
        {/* slider-area */}
        <section className="slider-area slider-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-9">
                <div className="slider-content text-center">
                  <h6 className="wow fadeInDown" data-wow-delay=".2s">
                    islands
                  </h6>
                  <h2 className="tlt fix" data-in-effect="fadeInLeft">
                    hunter <span>killer</span>
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="2s">
                    Find technology or people for digital projects in public
                    sector and Find an individual specialist develope
                    researcher.
                  </p>
                  <a
                    href="#"
                    className="btn wow fadeInUp"
                    data-wow-delay="2.2s"
                  >
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* slider-area-end */}
        {/* brand-area */}
        <div className="brand-area brand-bg">
          <div className="container">
            <div className="row brand-active">
              <div className="col-xl-2">
                <div className="brand-item">
                  <img src={BRANDLOGO1IMAGE} alt="" />
                </div>
              </div>
              <div className="col-xl-2">
                <div className="brand-item">
                  <img src={BRANDLOGO2IMAGE} alt="" />
                </div>
              </div>
              <div className="col-xl-2">
                <div className="brand-item">
                  <img src={BRANDLOGO3IMAGE} alt="" />
                </div>
              </div>
              <div className="col-xl-2">
                <div className="brand-item">
                  <img src={BRANDLOGO4IMAGE} alt="" />
                </div>
              </div>
              <div className="col-xl-2">
                <div className="brand-item">
                  <img src={BRANDLOGO5IMAGE} alt="" />
                </div>
              </div>
              <div className="col-xl-2">
                <div className="brand-item">
                  <img src={BRANDLOGO6IMAGE} alt="" />
                </div>
              </div>
              <div className="col-xl-2">
                <div className="brand-item">
                  <img src={BRANDLOGO3IMAGE} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* brand-area-end */}
        {/* area-bg-one */}
        <div className="area-bg-one">
          {/* latest-games-area */}
          <section className="latest-games-area pt-120">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-8">
                  <div className="section-title mb-50">
                    <span>LATEST RELEASES</span>
                    <h2>
                      Create &amp; <span>Manage</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="latest-games-active owl-carousel">
                    <div className="latest-games-items mb-30">
                      <div className="latest-games-thumb">
                        <a href="#">
                          <img src={LATESTGAMESTHUMB1IMAGE} alt="" />
                        </a>
                      </div>
                      <div className="latest-games-content">
                        <div className="lg-tag">
                          <a href="#">racing</a>
                        </div>
                        <h4>
                          <a href="#">
                            Vertical Games <span>Daily</span>
                          </a>
                        </h4>
                        <p>
                          entry fee : <span>free</span>
                        </p>
                      </div>
                    </div>
                    <div className="latest-games-items mb-30">
                      <div className="latest-games-thumb">
                        <a href="#">
                          <img src={LATESTGAMESTHUMB2IMAGE} alt="" />
                        </a>
                      </div>
                      <div className="latest-games-content">
                        <div className="lg-tag">
                          <a href="#">zombie</a>
                        </div>
                        <h4>
                          <a href="#">
                            Hunter Killer <span>ii</span>
                          </a>
                        </h4>
                        <p>
                          entry fee : <span>$25,00</span>
                        </p>
                      </div>
                    </div>
                    <div className="latest-games-items mb-30">
                      <div className="latest-games-thumb">
                        <a href="#">
                          <img src={LATESTGAMESTHUMB3IMAGE} alt="" />
                        </a>
                      </div>
                      <div className="latest-games-content">
                        <div className="lg-tag">
                          <a href="#">creative</a>
                        </div>
                        <h4>
                          <a href="#">
                            Sky Walker <span>Daily</span>
                          </a>
                        </h4>
                        <p>
                          entry fee : <span>$25,00</span>
                        </p>
                      </div>
                    </div>
                    <div className="latest-games-items mb-30">
                      <div className="latest-games-thumb">
                        <a href="#">
                          <img src={LATESTGAMESTHUMB1IMAGE} alt="" />
                        </a>
                      </div>
                      <div className="latest-games-content">
                        <div className="lg-tag">
                          <a href="#">racing</a>
                        </div>
                        <h4>
                          <a href="#">
                            Vertical games <span>daily</span>
                          </a>
                        </h4>
                        <p>
                          entry fee : <span>free</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* latest-games-area-end */}
          {/* about-us-area */}
          <section className="about-us-area pt-90 pb-120">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 order-0 order-lg-2">
                  <div className="about-img">
                    <img src={ABOUTUSIMAGE} alt="" />
                    <a
                      href="https://www.youtube.com/watch?v=_LTiEXMc5J0"
                      className="popup-video"
                    >
                      <img src={PLAYBUTTONIMAGE} alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="section-title title-style-two mb-45">
                    <span>about story</span>
                    <h2>
                      Noob Dia <span>Paradiso</span> Tournament
                    </h2>
                  </div>
                  <div className="about-content">
                    <p>
                      Find technology or people for digital projects in public
                      sector and Find an individual specialist develo
                      researcher.
                    </p>
                    <p>
                      Consectur adipiscing elit, sed do eiusmod tempor
                      incididunt labore dolore mana aliqua. Unimd minim venam
                      quis nostrud exercitation ullamco laboris nisi ut aliquip
                      commodo cpsam.
                    </p>
                    <div className="about-btn">
                      <a href="#" className="btn">
                        READ MORE
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* about-us-area-end */}
        </div>
        {/* area-bg-one-end */}
        {/* game-manage-area */}
        <section className="game-manage-area game-mange-bg pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8">
                <div className="section-title title-style-two text-center mb-60">
                  <span>COME THE END OF THE WORLD</span>
                  <h2>
                    Focus And Game <span>Manage</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="coming-match-item mb-30">
                  <div className="coming-match-team">
                    <div className="match-team-info">
                      <div className="match-team-logo">
                        <a href="#">
                          <img src={TEAMLOGO1IMAGE} alt="" />
                        </a>
                      </div>
                      <div className="match-team-name">
                        <a href="#">Bluster 8</a>
                      </div>
                    </div>
                    <div className="coming-match-status">
                      <img src={MATCHVSIMAGE} alt="" />
                    </div>
                    <div className="match-team-info">
                      <div className="match-team-logo">
                        <a href="#">
                          <img src={TEAMLOGO2IMAGE} alt="" />
                        </a>
                      </div>
                      <div className="match-team-name">
                        <a href="#">kill bill 7</a>
                      </div>
                    </div>
                  </div>
                  <div className="coming-match-info">
                    <h5>
                      Forza <span>Horizon ii</span>
                    </h5>
                    <div className="match-rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="match-info-action">
                      <a href="#" className="btn">
                        view details
                      </a>
                      <a href="#" className="btn transparent-btn">
                        <i className="fas fa-comments" /> Comments
                      </a>
                    </div>
                  </div>
                  <div className="coming-match-time">
                    <div className="coming-time" data-countdown="2021/3/15" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="coming-match-item mb-30">
                  <div className="coming-match-team">
                    <div className="match-team-info">
                      <div className="match-team-logo">
                        <a href="#">
                          <img src={TEAMLOGO3IMAGE} alt="" />
                        </a>
                      </div>
                      <div className="match-team-name">
                        <a href="#">Bluster 8</a>
                      </div>
                    </div>
                    <div className="coming-match-status">
                      <img src={MATCHVSIMAGE} alt="" />
                    </div>
                    <div className="match-team-info">
                      <div className="match-team-logo">
                        <a href="#">
                          <img src={TEAMLOGO4IMAGE} alt="" />
                        </a>
                      </div>
                      <div className="match-team-name">
                        <a href="#">The Champ</a>
                      </div>
                    </div>
                  </div>
                  <div className="coming-match-info">
                    <h5>
                      Thanos <span>Sky ii</span>
                    </h5>
                    <div className="match-rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="match-info-action">
                      <a href="#" className="btn">
                        view details
                      </a>
                      <a href="#" className="btn transparent-btn">
                        <i className="fas fa-comments" /> Comments
                      </a>
                    </div>
                  </div>
                  <div className="coming-match-time">
                    <div className="coming-time" data-countdown="2021/3/30" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="coming-match-item mb-30">
                  <div className="coming-match-team">
                    <div className="match-team-info">
                      <div className="match-team-logo">
                        <a href="#">
                          <img src={TEAMLOGO5IMAGE} alt="" />
                        </a>
                      </div>
                      <div className="match-team-name">
                        <a href="#">Warrior</a>
                      </div>
                    </div>
                    <div className="coming-match-status">
                      <img src={MATCHVSIMAGE} alt="" />
                    </div>
                    <div className="match-team-info">
                      <div className="match-team-logo">
                        <a href="#">
                          <img src={TEAMLOGO6IMAGE} alt="" />
                        </a>
                      </div>
                      <div className="match-team-name">
                        <a href="#">kill bill 7</a>
                      </div>
                    </div>
                  </div>
                  <div className="coming-match-info">
                    <h5>
                      Hunter <span>Killer ii</span>
                    </h5>
                    <div className="match-rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="match-info-action">
                      <a href="#" className="btn">
                        view details
                      </a>
                      <a href="#" className="btn transparent-btn">
                        <i className="fas fa-comments" /> Comments
                      </a>
                    </div>
                  </div>
                  <div className="coming-match-time">
                    <div className="coming-time" data-countdown="2021/3/30" />
                  </div>
                </div>
              </div>
            </div>
            <div className="tournament-area mt-30">
              <div className="row">
                <div className="col-12">
                  <div className="tournament-top-wrap">
                    <div className="section-title tournament-title">
                      <h2>
                        Joining <span>Tournament</span>
                      </h2>
                    </div>
                    <div className="tournament-menu">
                      <button className="active" data-filter="*">
                        All
                      </button>
                      <button className data-filter=".cat-one">
                        GAMER
                      </button>
                      <button className data-filter=".cat-two">
                        PROFESSIONAL
                      </button>
                      <button className data-filter=".cat-three">
                        ADVENTURE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="tournament-schedule-wrap">
                    <div className="tournament-active">
                      <div className="single-tournament mb-15 grid-item cat-three cat-two">
                        <div className="row no-gutters">
                          <div className="col-lg-4">
                            <div className="tournament-schedule-item">
                              <div className="match-team-info">
                                <div className="match-team-logo">
                                  <a href="#">
                                    <img src={TEAMLOGO1IMAGE} alt="" />
                                  </a>
                                </div>
                              </div>
                              <div className="coming-match-status">
                                <img src={MATCHVSIMAGE} alt="" />
                              </div>
                              <div className="match-team-info">
                                <div className="match-team-logo">
                                  <a href="#">
                                    <img src={TEAMLOGO2IMAGE} alt="" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-8">
                            <div className="tournament-schedule-content">
                              <h3>
                                <a href="#">
                                  Forza <span>Horizon ii</span>
                                </a>
                              </h3>
                              <p>
                                Find tecology people for digital projects in
                                public sector.There are many variations of
                                passages of Lorem Ipsu available, but the
                                majority have suffered.
                              </p>
                              <div className="tournament-schedule-meta">
                                <h5>
                                  price : <span>$125,00</span>
                                </h5>
                                <a href="#">Joining</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-tournament mb-15 grid-item cat-one cat-three">
                        <div className="row no-gutters">
                          <div className="col-lg-4">
                            <div className="tournament-schedule-item">
                              <div className="match-team-info">
                                <div className="match-team-logo">
                                  <a href="#">
                                    <img src={TEAMLOGO3IMAGE} alt="" />
                                  </a>
                                </div>
                              </div>
                              <div className="coming-match-status">
                                <img src={MATCHVSIMAGE} alt="" />
                              </div>
                              <div className="match-team-info">
                                <div className="match-team-logo">
                                  <a href="#">
                                    <img src={TEAMLOGO4IMAGE} alt="" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-8">
                            <div className="tournament-schedule-content">
                              <h3>
                                <a href="#">
                                  Thanos <span>Sky ii</span>
                                </a>
                              </h3>
                              <p>
                                Find tecology people for digital projects in
                                public sector.There are many variations of
                                passages of Lorem Ipsu available, but the
                                majority have suffered.
                              </p>
                              <div className="tournament-schedule-meta">
                                <h5>
                                  price : <span>$125,00</span>
                                </h5>
                                <a href="#">Joining</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-tournament mb-15 grid-item cat-two cat-one">
                        <div className="row no-gutters">
                          <div className="col-lg-4">
                            <div className="tournament-schedule-item">
                              <div className="match-team-info">
                                <div className="match-team-logo">
                                  <a href="#">
                                    <img src={TEAMLOGO5IMAGE} alt="" />
                                  </a>
                                </div>
                              </div>
                              <div className="coming-match-status">
                                <img src={MATCHVSIMAGE} alt="" />
                              </div>
                              <div className="match-team-info">
                                <div className="match-team-logo">
                                  <a href="#">
                                    <img src={TEAMLOGO6IMAGE} alt="" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-8">
                            <div className="tournament-schedule-content">
                              <h3>
                                <a href="#">
                                  Call Of <span>Duty ii</span>
                                </a>
                              </h3>
                              <p>
                                Find tecology people for digital projects in
                                public sector.There are many variations of
                                passages of Lorem Ipsu available, but the
                                majority have suffered.
                              </p>
                              <div className="tournament-schedule-meta">
                                <h5>
                                  price : <span>$125,00</span>
                                </h5>
                                <a href="#">Joining</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* game-manage-area-end */}
        {/* features-area */}
        <section className="features-area features-bg pt-120 pb-70">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div className="section-title title-style-two text-center mb-60">
                  <span>what we give players</span>
                  <h2>
                    Why Choose Us <span>Geco</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-4 col-md-6">
                <div className="features-item mb-30">
                  <div className="features-head mb-35">
                    <div className="product-tag">
                      <a href="#">t-shirt</a>
                    </div>
                    <h4>Gamine slim elegant young woman perceived</h4>
                    <p>
                      Consecur adipcig eiusod tempor the inci did dolore mana is
                      aliqsua Unimd minim thats tempor dolore adipcig
                    </p>
                  </div>
                  <div className="features-list-wrap">
                    <ul>
                      <li>
                        <div className="features-list-img">
                          <img src={FEATURESTHUMB1IMAGE} alt="" />
                        </div>
                        <div className="features-list-content">
                          <div className="product-tag">
                            <a href="#">zombie</a>
                          </div>
                          <h6>
                            <a href="#">Who hangs around the streets</a>
                          </h6>
                        </div>
                      </li>
                      <li>
                        <div className="features-list-img">
                          <img src={FEATURESTHUMB2IMAGE} alt="" />
                        </div>
                        <div className="features-list-content">
                          <div className="product-tag">
                            <a href="#">shooter</a>
                          </div>
                          <h6>
                            <a href="#">Design compose copratin</a>
                          </h6>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="features-item mb-30">
                  <div className="features-head mb-35">
                    <div className="product-tag">
                      <a href="#">Cloud</a>
                    </div>
                    <h4>Leading Games Retailer with Great Deals Video</h4>
                    <p>
                      Consecur adipcig eiusod tempor the inci did dolore mana is
                      aliqsua Unimd minim thats tempor dolore adipcig
                    </p>
                  </div>
                  <div className="features-list-wrap">
                    <ul>
                      <li>
                        <div className="features-list-img">
                          <img src={FEATURESTHUMB3IMAGE} alt="" />
                        </div>
                        <div className="features-list-content">
                          <div className="product-tag">
                            <a href="#">zombie</a>
                          </div>
                          <h6>
                            <a href="#">Design compose copratin</a>
                          </h6>
                        </div>
                      </li>
                      <li>
                        <div className="features-list-img">
                          <img src={FEATURESTHUMB4IMAGE} alt="" />
                        </div>
                        <div className="features-list-content">
                          <div className="product-tag">
                            <a href="#">shooter</a>
                          </div>
                          <h6>
                            <a href="#">Who hangs around the streets</a>
                          </h6>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="features-item mb-30">
                  <div className="features-head mb-35">
                    <div className="product-tag">
                      <a href="#">islands</a>
                    </div>
                    <h4>The word gamine is a French word, the feminine</h4>
                    <p>
                      Consecur adipcig eiusod tempor the inci did dolore mana is
                      aliqsua Unimd minim thats tempor dolore adipcig
                    </p>
                  </div>
                  <div className="features-list-wrap">
                    <ul>
                      <li>
                        <div className="features-list-img">
                          <img src={FEATURESTHUMB5IMAGE} alt="" />
                        </div>
                        <div className="features-list-content">
                          <div className="product-tag">
                            <a href="#">zombie</a>
                          </div>
                          <h6>
                            <a href="#">Who hangs around the streets</a>
                          </h6>
                        </div>
                      </li>
                      <li>
                        <div className="features-list-img">
                          <img src={FEATURESTHUMB6IMAGE} alt="" />
                        </div>
                        <div className="features-list-content">
                          <div className="product-tag">
                            <a href="#">shooter</a>
                          </div>
                          <h6>
                            <a href="#">Design compose copratin</a>
                          </h6>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="fact-area pt-90">
              <div className="row justify-content-center">
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="fact-item">
                    <div className="fact-icon">
                      <img src={FACTICON1IMAGE} alt="" />
                    </div>
                    <div className="fact-content">
                      <h2>
                        <span className="odometer" data-count={245}>
                          00
                        </span>
                      </h2>
                      <span>Amazing Feature</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="fact-item">
                    <div className="fact-icon">
                      <img src={FACTICON2IMAGE} alt="" />
                    </div>
                    <div className="fact-content">
                      <h2>
                        <span className="odometer" data-count={1245}>
                          00
                        </span>
                      </h2>
                      <span>Amazing Feature</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="fact-item">
                    <div className="fact-icon">
                      <img src={FACTICON3IMAGE} alt="" />
                    </div>
                    <div className="fact-content">
                      <h2>
                        <span className="odometer" data-count={78}>
                          00
                        </span>
                        K
                      </h2>
                      <span>Amazing Feature</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="fact-item">
                    <div className="fact-icon">
                      <img src={FACTICON4IMAGE} alt="" />
                    </div>
                    <div className="fact-content">
                      <h2>
                        <span className="odometer" data-count={12}>
                          00
                        </span>
                      </h2>
                      <span>Amazing Feature</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* features-area-end */}
        {/* area-bg-two */}
        <div className="area-bg-two">
          {/* shop-area */}
          <section className="shop-area pt-120 pb-90">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-8">
                  <div className="section-title title-style-two text-center mb-30">
                    <span>gaming accessories</span>
                    <h2>
                      Gaming Products <span>Corner</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row product-active">
                <div className="col-xl-3">
                  <div className="shop-item">
                    <div className="product-thumb">
                      <a href="#">
                        <img src={PRODUCT1IMAGE} alt="" />
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
                        <img src={PRODUCT2IMAGE} alt="" />
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
                        <img src={PRODUCT3IMAGE} alt="" />
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
                        <img src={PRODUCT4IMAGE} alt="" />
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
                        <img src={PRODUCT4IMAGE} alt="" />
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
          {/* blog-testimonial-area */}
          <section className="blog-and-testimonial">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8">
                  <div className="blog-area mb-120">
                    <div className="tournament-top-wrap">
                      <div className="section-title tournament-title">
                        <h2>
                          Latest News <span>Articles</span>
                        </h2>
                      </div>
                    </div>
                    <div className="blog-post-wrap">
                      <div className="blog-post-item blog-style-one">
                        <div className="blog-thumb">
                          <a href="#">
                            <img src={BLOGTHUMB1IMAGE} alt="" />
                          </a>
                        </div>
                        <div className="blog-post-content">
                          <h5>
                            <a href="#">Reality can include entertain</a>
                          </h5>
                          <div className="blog-meta">
                            <ul>
                              <li>
                                <i className="far fa-clock" />
                                July 4, 2020
                              </li>
                              <li>
                                <i className="fas fa-comment" />
                                03
                              </li>
                              <li>
                                <i className="fas fa-heart" />
                                26
                              </li>
                            </ul>
                          </div>
                          <p>
                            Game server also sometimes referred to as host
                            server which source
                          </p>
                        </div>
                      </div>
                      <div className="blog-post-item blog-style-one">
                        <div className="blog-thumb">
                          <a href="#">
                            <img src={BLOGTHUMB2IMAGE} alt="" />
                          </a>
                        </div>
                        <div className="blog-post-content">
                          <h5>
                            <a href="#">Simulated experience simila</a>
                          </h5>
                          <div className="blog-meta">
                            <ul>
                              <li>
                                <i className="far fa-clock" />
                                July 4, 2020
                              </li>
                              <li>
                                <i className="fas fa-comment" />
                                03
                              </li>
                              <li>
                                <i className="fas fa-heart" />
                                26
                              </li>
                            </ul>
                          </div>
                          <p>
                            Game server also sometimes referred to as host
                            server which source
                          </p>
                        </div>
                      </div>
                      <div className="blog-post-item blog-style-one">
                        <div className="blog-thumb">
                          <a href="#">
                            <img src={BLOGTHUMB3IMAGE} alt="" />
                          </a>
                        </div>
                        <div className="blog-post-content">
                          <h5>
                            <a href="#">High Performance Server</a>
                          </h5>
                          <div className="blog-meta">
                            <ul>
                              <li>
                                <i className="far fa-clock" />
                                July 4, 2020
                              </li>
                              <li>
                                <i className="fas fa-comment" />
                                03
                              </li>
                              <li>
                                <i className="fas fa-heart" />
                                26
                              </li>
                            </ul>
                          </div>
                          <p>
                            Game server also sometimes referred to as host
                            server which source
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-8">
                  <div className="testimonial-area position-relative mb-120">
                    <div className="tournament-top-wrap">
                      <div className="section-title tournament-title">
                        <h2>
                          Customers <span>Feedback</span>
                        </h2>
                      </div>
                    </div>
                    <div className="testimonial-active owl-carousel">
                      <div className="testimonial-item">
                        <div className="testimonial-content mb-50">
                          <h5>Gaming Server Activation</h5>
                          <div className="testimonial-rating mb-30">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <p>
                            “ Game server also sometimes referred to as host
                            server which is the authoritative source of events
                            in multiplayer video game The server clients mntain
                            their own accurate sometimes referred connected
                            clients to maintain their own accurate version
                            version ”
                          </p>
                        </div>
                        <div className="testimonial-avatar">
                          <div className="testi-avtar-img">
                            <img src={TESTIAVATARIMAGE} alt="" />
                          </div>
                          <div className="testi-avatar-info">
                            <h6>Mark Alexander</h6>
                            <span>Founder Pro</span>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-item">
                        <div className="testimonial-content mb-50">
                          <h5>Gaming Server Activation</h5>
                          <div className="testimonial-rating mb-30">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <p>
                            “ Game server also sometimes referred to as host
                            server which is the authoritative source of events
                            in multiplayer video game The server clients mntain
                            their own accurate sometimes referred connected
                            clients to maintain their own accurate version
                            version ”
                          </p>
                        </div>
                        <div className="testimonial-avatar">
                          <div className="testi-avtar-img">
                            <img src={TESTIAVATARIMAGE} alt="" />
                          </div>
                          <div className="testi-avatar-info">
                            <h6>Mark Alexander</h6>
                            <span>Founder Pro</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="testi-quote">
                      <img src={TESTIQUOTEIMAGE} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* blog-testimonial-area-end */}
        </div>
        {/* area-bg-two-end */}
      </main>
      {/* main-area-end */}
    </>
  );
};

export default Home;
