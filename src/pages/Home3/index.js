import THIRDBANNERIMAGE from "./../../img/slider/third_banner_img.png";
import THIRDABOUTIMAGE from "./../../img/images/third_about_img.png";
import THIRDABOUTSHADOWIMAGE from "./../../img/images/third_about_img_shadow.png";
import MYINFOBOXHOVERIMAGE from "./../../img/bg/my_info_box_hover.png";
import ABOUTAWARDIMAGE from "./../../img/images/about_award.png";
import CLANLOGOIMAGE from "./../../img/images/clan_logo.png";
import GAMEGALLERY1IMAGE from "./../../img/images/game_gallery_01.png";
import GAMEGALLERY2IMAGE from "./../../img/images/game_gallery_02.png";
import GAMEGALLERY3IMAGE from "./../../img/images/game_gallery_03.png";
import GAMEGALLERY4IMAGE from "./../../img/images/game_gallery_04.png";
import MYMATCHBOXIMAGE from "./../../img/bg/my_match_box.png";
import MYMATCHCLAN1IMAGE from "./../../img/team/my_match_clan01.png";
import MATCHVS2IMAGE from "./../../img/team/match_vs02.png";
import MYMATCHCLAN2IMAGE from "./../../img/team/my_match_clan02.png";
import MYMATCHCLAN3IMAGE from "./../../img/team/my_match_clan03.png";
import MYMATCHCLAN4IMAGE from "./../../img/team/my_match_clan04.png";
import MYMATCHCLAN5IMAGE from "./../../img/team/my_match_clan05.png";
import MYMATCHCLAN6IMAGE from "./../../img/team/my_match_clan06.png";
import DONATIONIMAGE from "./../../img/images/dontaion_img.png";
import TEAM1IMAGE from "./../../img/team/team_img01.png";
import TEAM2IMAGE from "./../../img/team/team_img02.png";
import TEAM3IMAGE from "./../../img/team/team_img03.png";
import TEAM4IMAGE from "./../../img/team/team_img04.png";
import TBRANDLOGO1IMAGE from "./../../img/brand/t_brand_logo01.png";
import TBRANDLOGO2IMAGE from "./../../img/brand/t_brand_logo02.png";
import TBRANDLOGO3IMAGE from "./../../img/brand/t_brand_logo03.png";
import TBRANDLOGO4IMAGE from "./../../img/brand/t_brand_logo04.png";
import TBRANDLOGO5IMAGE from "./../../img/brand/t_brand_logo05.png";

const Home3 = () => {
  return (
    <>
      {/* main-area */}
      <main>
        {/* slider-area */}
        <section className="third-banner-bg">
          <div className="container custom-container">
            <div className="row">
              <div className="col-12">
                <div
                  className="third-banner-img wow bounceInDown"
                  data-wow-delay=".2s"
                >
                  <img src={THIRDBANNERIMAGE} alt="" />
                </div>
                <div
                  className="third-banner-content text-center wow bounceInUp"
                  data-wow-delay=".2s"
                >
                  <h2>
                    iám stream<span>er</span>
                  </h2>
                  <h6>online streaming media</h6>
                  <a href="#" className="btn rotated-btn">
                    buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* slider-area-end */}
        {/* third-about-area */}
        <section className="third-about-area third-about-bg pt-120 pb-90">
          <div className="container custom-container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-0 order-lg-2">
                <div className="third-about-img text-right position-relative">
                  <img src={THIRDABOUTIMAGE} className="main-img" alt="" />
                  <img src={THIRDABOUTSHADOWIMAGE} className="shadow" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="third-about-content">
                  <div className="third-title-style">
                    <h2>
                      themebey<span>ond</span>
                    </h2>
                    <div className="inner">
                      <h2>skyward sword</h2>
                      <h6 className="vertical-title">themebeyond</h6>
                      <p>
                        The Legend of Zelda: Skyward Sword is an
                        action-adventure game developed and published by
                        Nintendo for the Wii. The six teenth mainline entry in
                        The Legend of Zelda series.
                      </p>
                    </div>
                    <a href="#" className="btn rotated-btn">
                      buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="see-my-info-wrap pt-110">
              <div className="row">
                <div className="col-12">
                  <div className="third-section-title text-center mb-75">
                    <h2>
                      see <span>my</span> information
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-xl-4 col-lg-6 col-sm-8">
                  <div className="my-info-box mb-30">
                    <div className="my-info-box-top">
                      <h6>award winning</h6>
                      <img
                        src={MYINFOBOXHOVERIMAGE}
                        alt=""
                        className="info-box-top-hover"
                      />
                    </div>
                    <div className="my-info-box-content">
                      <div className="mt-award">
                        <img src={ABOUTAWARDIMAGE} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-sm-8">
                  <div className="my-info-box mb-30">
                    <div className="my-info-box-top">
                      <h6>join our team</h6>
                      <img
                        src={MYINFOBOXHOVERIMAGE}
                        alt=""
                        className="info-box-top-hover"
                      />
                    </div>
                    <div className="my-info-box-content">
                      <div className="my-info-social">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fab fa-steam-symbol" /> STEAM
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-square" /> Facebook
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter-square" /> Twitter
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-sm-8">
                  <div className="my-info-box mb-30">
                    <div className="my-info-box-top">
                      <h6>clan members</h6>
                      <img
                        src={MYINFOBOXHOVERIMAGE}
                        alt=""
                        className="info-box-top-hover"
                      />
                    </div>
                    <div className="my-info-box-content">
                      <div className="my-clan-wrap">
                        <div className="clan-logo">
                          <img src={CLANLOGOIMAGE} alt="" />
                        </div>
                        <div className="my-clan-info">
                          <h4>
                            <span>75+</span> members
                          </h4>
                          <span>active Members</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* third-about-area-end */}
        {/* game-gallery-area */}
        <div className="game-gallery-area position-relative">
          <div className="game-gallery-bg" />
          <div className="container-fluid p-0 fix">
            <div className="row game-gallery-active">
              <div className="col-12">
                <div className="game-gallery-item">
                  <img src={GAMEGALLERY1IMAGE} alt="" />
                </div>
              </div>
              <div className="col-12">
                <div className="game-gallery-item">
                  <img src={GAMEGALLERY2IMAGE} alt="" />
                </div>
              </div>
              <div className="col-12">
                <div className="game-gallery-item">
                  <img src={GAMEGALLERY3IMAGE} alt="" />
                </div>
              </div>
              <div className="col-12">
                <div className="game-gallery-item">
                  <img src={GAMEGALLERY4IMAGE} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="slider-nav" />
        </div>
        {/* game-gallery-area-end */}
        {/* my-match-area */}
        <section className="my-match-area my-match-bg pb-120">
          <div className="container custom-container">
            <div className="row">
              <div className="col-12">
                <div className="third-section-title text-center mb-75">
                  <h2>
                    see <span>my</span> MATCHES
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="my-match-wrap">
                  <div
                    className="my-match-box-wrap wow fadeInDown"
                    data-wow-delay=".2s"
                  >
                    <img
                      src={MYMATCHBOXIMAGE}
                      alt=""
                      className="match-box-bg"
                    />
                    <ul>
                      <li>
                        <div className="my-match-team">
                          <div className="team-one">
                            <a href="#">
                              <img src={MYMATCHCLAN1IMAGE} alt="" />
                            </a>
                          </div>
                          <div className="vs">
                            <img src={MATCHVS2IMAGE} alt="" />
                          </div>
                          <div className="team-one">
                            <a href="#">
                              <img src={MYMATCHCLAN2IMAGE} alt="" />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="my-match-info">
                          <a
                            href="https://www.twitch.tv/shroud"
                            target="_blank"
                            className="live-btn"
                          >
                            Live MATCHES
                          </a>
                          <h5>skyward sword</h5>
                          <span>10th Mar 2020.</span>
                        </div>
                      </li>
                      <li>
                        <a
                          href="https://www.twitch.tv/shroud"
                          target="_blank"
                          className="watch-stream"
                        >
                          <i className="fas fa-podcast" /> watch stream
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="my-match-box-wrap wow fadeInDown"
                    data-wow-delay=".4s"
                  >
                    <img
                      src={MYMATCHBOXIMAGE}
                      alt=""
                      className="match-box-bg"
                    />
                    <ul>
                      <li>
                        <div className="my-match-team">
                          <div className="team-one">
                            <a href="#">
                              <img src={MYMATCHCLAN3IMAGE} alt="" />
                            </a>
                          </div>
                          <div className="vs">
                            <img src={MATCHVS2IMAGE} alt="" />
                          </div>
                          <div className="team-one">
                            <a href="#">
                              <img src={MYMATCHCLAN4IMAGE} alt="" />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="my-match-info">
                          <a
                            href="https://www.twitch.tv/shroud"
                            target="_blank"
                            className="live-btn"
                          >
                            Live MATCHES
                          </a>
                          <h5>Call Of Duty Mascot</h5>
                          <span>10th Mar 2020.</span>
                        </div>
                      </li>
                      <li>
                        <a
                          href="https://www.twitch.tv/shroud"
                          target="_blank"
                          className="watch-stream"
                        >
                          <i className="fas fa-podcast" /> watch stream
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="my-match-box-wrap wow fadeInDown"
                    data-wow-delay=".6s"
                  >
                    <img
                      src={MYMATCHBOXIMAGE}
                      alt=""
                      className="match-box-bg"
                    />
                    <ul>
                      <li>
                        <div className="my-match-team">
                          <div className="team-one">
                            <a href="#">
                              <img src={MYMATCHCLAN5IMAGE} alt="" />
                            </a>
                          </div>
                          <div className="vs">
                            <img src={MATCHVS2IMAGE} alt="" />
                          </div>
                          <div className="team-one">
                            <a href="#">
                              <img src={MYMATCHCLAN6IMAGE} alt="" />
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="my-match-info">
                          <a
                            href="https://www.twitch.tv/shroud"
                            target="_blank"
                            className="live-btn"
                          >
                            Live MATCHES
                          </a>
                          <h5>Counter Strike Mascot</h5>
                          <span>10th Mar 2020.</span>
                        </div>
                      </li>
                      <li>
                        <a
                          href="https://www.twitch.tv/shroud"
                          target="_blank"
                          className="watch-stream"
                        >
                          <i className="fas fa-podcast" /> watch stream
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* my-match-area-end */}
        {/* donation-area */}
        <section className="donation-area donation-bg fix pt-65">
          <div className="container custom-container">
            <div className="donation-wrap">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-7">
                  <div className="donation-content">
                    <div className="third-title-style">
                      <h2>
                        themebey<span>ond</span>
                      </h2>
                      <div className="inner">
                        <h2>WORLDS MEET REAL</h2>
                        <h6 className="vertical-title">donation</h6>
                        <p>
                          The Legend of Zelda: Skyward Sword is an
                          action-adventure game developed and publish game real.
                        </p>
                      </div>
                      <a href="#" className="btn rotated-btn">
                        buy Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-5">
                  <div className="donation-img text-center">
                    <img src={DONATIONIMAGE} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* donation-area-end */}
        {/* team-area */}
        <section className="team-area team-bg">
          <div className="container custom-container">
            <div className="row">
              <div className="col-12">
                <div className="third-section-title text-center mb-60">
                  <h2>
                    MEET <span>OUR</span> TEAM
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div className="third-team-item text-center mb-30">
                  <div className="third-team-img">
                    <img src={TEAM1IMAGE} alt="" />
                  </div>
                  <div className="third-team-content">
                    <div className="main-bg" />
                    <div className="hover-bg" />
                    <h5>
                      <a href="#">Jannie Visscher</a>
                    </h5>
                    <span>weapon master</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div className="third-team-item text-center mb-30">
                  <div className="third-team-img">
                    <img src={TEAM2IMAGE} alt="" />
                  </div>
                  <div className="third-team-content">
                    <div className="main-bg" />
                    <div className="hover-bg" />
                    <h5>
                      <a href="#">warren buffett</a>
                    </h5>
                    <span>team leader</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div className="third-team-item text-center mb-30">
                  <div className="third-team-img">
                    <img src={TEAM3IMAGE} alt="" />
                  </div>
                  <div className="third-team-content">
                    <div className="main-bg" />
                    <div className="hover-bg" />
                    <h5>
                      <a href="#">anne hathaway</a>
                    </h5>
                    <span>weapon master</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div className="third-team-item text-center mb-30">
                  <div className="third-team-img">
                    <img src={TEAM4IMAGE} alt="" />
                  </div>
                  <div className="third-team-content">
                    <div className="main-bg" />
                    <div className="hover-bg" />
                    <h5>
                      <a href="#">poll worker</a>
                    </h5>
                    <span>team member</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* team-area-end */}
        {/* contact-area */}
        <section className="contact-area third-contact-bg">
          <div className="container custom-container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="third-contact-wrap">
                  <div className="third-title-style">
                    <h2>
                      contact<span>us</span>
                    </h2>
                    <div className="inner">
                      <h2>MEET oue team</h2>
                      <h6 className="vertical-title">donation</h6>
                      <ul>
                        <li>
                          <span>our location :</span> Central Park Roselle W78
                          New Jersey
                        </li>
                        <li>
                          <span>Phone :</span> + 97 325 6254 324
                        </li>
                      </ul>
                    </div>
                    <a href="#" className="btn rotated-btn">
                      buy Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <form action="#" className="third-contact-form">
                  <div className="row">
                    <div className="col-sm-6">
                      <input type="text" placeholder="Your Name" />
                    </div>
                    <div className="col-sm-6">
                      <input type="text" placeholder="Your Phone" />
                    </div>
                  </div>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Wight Message"
                    defaultValue={""}
                  />
                  <button className="btn rotated-btn">submit</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* contact-area-end */}
        {/* brand-area */}
        <div className="brand-area t-brand-bg">
          <div className="container custom-container">
            <div className="row s-brand-active">
              <div className="col-12">
                <div className="t-brand-item">
                  <img src={TBRANDLOGO1IMAGE} alt="" />
                </div>
              </div>
              <div className="col-12">
                <div className="t-brand-item">
                  <img src={TBRANDLOGO2IMAGE} alt="" />
                </div>
              </div>
              <div className="col-12">
                <div className="t-brand-item">
                  <img src={TBRANDLOGO3IMAGE} alt="" />
                </div>
              </div>
              <div className="col-12">
                <div className="t-brand-item">
                  <img src={TBRANDLOGO4IMAGE} alt="" />
                </div>
              </div>
              <div className="col-12">
                <div className="t-brand-item">
                  <img src={TBRANDLOGO5IMAGE} alt="" />
                </div>
              </div>
              <div className="col-12">
                <div className="t-brand-item">
                  <img src={TBRANDLOGO3IMAGE} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* brand-area-end */}
      </main>
      {/* main-area-end */}
    </>
  );
};

export default Home3;
