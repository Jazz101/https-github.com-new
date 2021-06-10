import INNERABOUTIMAGE1 from "./../../img/images/inner_about_img01.png";
import INNERABOUTIMAGE2 from "./../../img/images/inner_about_img02.png";
import INNERABOUTIMAGE3 from "./../../img/images/inner_about_img03.png";
import MEDALESHAPEIMAGE from "./../../img/images/medale_shape.png";
import LATESTMATCHTHUMB1 from "./../../img/images/latest_match_thumb01.jpg";
import LATESTMATCHTHUMB2 from "./../../img/images/latest_match_thumb02.jpg";
import LATESTMATCHTHUMB3 from "./../../img/images/latest_match_thumb03.jpg";
import LATESTMATCHTHUMB4 from "./../../img/images/latest_match_thumb04.jpg";
import TEAMMEMBER1 from "./../../img/team/team_member01.jpg";
import TEAMMEMBER2 from "./../../img/team/team_member02.jpg";
import TEAMMEMBER3 from "./../../img/team/team_member03.jpg";
import TEAMMEMBER4 from "./../../img/team/team_member04.jpg";

const About = () => {
  return (
    <>
      {/* main-area */}
      <main>
        {/* breadcrumb-area */}
        <section className="breadcrumb-area breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb-content text-center">
                  <h2>
                    about <span>story</span>
                  </h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index-2.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">pages</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        About stroy
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb-area-end */}
        {/* inner-about-area */}
        <section className="inner-about-area fix">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
                <div className="inner-about-img">
                  <img
                    src={INNERABOUTIMAGE1}
                    className="wow fadeInRight"
                    data-wow-delay=".3s"
                    alt=""
                  />
                  <img
                    src={INNERABOUTIMAGE2}
                    className="wow fadeInLeft"
                    data-wow-delay=".6s"
                    alt=""
                  />
                  <img
                    src={INNERABOUTIMAGE3}
                    className="wow fadeInUp"
                    data-wow-delay=".6s"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="section-title title-style-three mb-25">
                  <h2>
                    released <span>GAMES</span>
                  </h2>
                </div>
                <div className="inner-about-content">
                  <h5>Monica Global Publishing for Marketing</h5>
                  <p>
                    Compete with 100 players on a remote Lorem Ipsn gravida. Pro
                    ain gravida nibh vel velit an auctor aliqueenean ollicitudin
                    ain gravida nibh vel version an ipsum.
                  </p>
                  <p>
                    Lorem Ipsn gravida. Pro ain gravida nibh vevelit auctor
                    aliqueenean ollicitudin ain gravida nibh vel version an
                    ipsum.
                  </p>
                  <a href="#" className="btn btn-style-two">
                    BUY THEME
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="inner-about-shape">
            <img src={MEDALESHAPEIMAGE} alt="" />
          </div>
        </section>
        {/* inner-about-area-end */}
        {/* latest-match-area */}
        <section className="latest-match-area latest-match-bg pt-115 pb-90">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div className="section-title title-style-three white-title text-center mb-70">
                  <h2>
                    gaming Latest <span>matches</span>
                  </h2>
                  <p>
                    Compete with 100 players on a remote island for winner takes
                    showdown known issue where certain skin strategic
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="latest-match-box mb-30">
                  <div className="latest-match-thumb">
                    <img src={LATESTMATCHTHUMB1} alt="" />
                  </div>
                  <div className="tournament-schedule-content">
                    <h3>
                      <a href="#">
                        Forza <span>Horizon ii</span>
                      </a>
                    </h3>
                    <p>
                      Find tecology people for digital projects in public There
                      are many variations.
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
              <div className="col-lg-6">
                <div className="latest-match-box mb-30">
                  <div className="latest-match-thumb">
                    <img src={LATESTMATCHTHUMB2} alt="" />
                  </div>
                  <div className="tournament-schedule-content">
                    <h3>
                      <a href="#">
                        shooting <span>land</span>
                      </a>
                    </h3>
                    <p>
                      Find tecology people for digital projects in public There
                      are many variations.
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
              <div className="col-lg-6">
                <div className="latest-match-box mb-30">
                  <div className="latest-match-thumb">
                    <img src={LATESTMATCHTHUMB3} alt="" />
                  </div>
                  <div className="tournament-schedule-content">
                    <h3>
                      <a href="#">
                        Thanos <span>Sky ii</span>
                      </a>
                    </h3>
                    <p>
                      Find tecology people for digital projects in public There
                      are many variations.
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
              <div className="col-lg-6">
                <div className="latest-match-box mb-30">
                  <div className="latest-match-thumb">
                    <img src={LATESTMATCHTHUMB4} alt="" />
                  </div>
                  <div className="tournament-schedule-content">
                    <h3>
                      <a href="#">
                        Call Of <span>Duty ii</span>
                      </a>
                    </h3>
                    <p>
                      Find tecology people for digital projects in public There
                      are many variations.
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
        </section>
        {/* latest-match-area-end */}
        {/* team-member */}
        <section className="team-member-area pt-115 pb-125">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div className="section-title title-style-three text-center mb-70">
                  <h2>
                    Our team <span>member</span>
                  </h2>
                  <p>
                    Compete with 100 players on a remote island for winner takes
                    showdown known issue where certain skin strategic
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="team-member-box text-center mb-50">
                  <div className="team-member-thumb">
                    <img src={TEAMMEMBER1} alt="" />
                    <div className="team-member-social">
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
                  </div>
                  <div className="team-member-content">
                    <h4>
                      <a href="#">tomas aleman</a>
                    </h4>
                    <span>Marketing CEO</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="team-member-box text-center mb-50">
                  <div className="team-member-thumb">
                    <img src={TEAMMEMBER2} alt="" />
                    <div className="team-member-social">
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
                  </div>
                  <div className="team-member-content">
                    <h4>
                      <a href="#">james wiseman</a>
                    </h4>
                    <span>Marketing CEO</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="team-member-box text-center mb-50">
                  <div className="team-member-thumb">
                    <img src={TEAMMEMBER3} alt="" />
                    <div className="team-member-social">
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
                  </div>
                  <div className="team-member-content">
                    <h4>
                      <a href="#">emily watson</a>
                    </h4>
                    <span>Head of Iaea</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="team-member-box text-center mb-50">
                  <div className="team-member-thumb">
                    <img src={TEAMMEMBER4} alt="" />
                    <div className="team-member-social">
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
                  </div>
                  <div className="team-member-content">
                    <h4>
                      <a href="#">alexandra paol</a>
                    </h4>
                    <span>Web Developer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* team-member-end */}
      </main>
      {/* main-area-end */}
    </>
  );
};

export default About;
