import ONEIMAGE from "./../../img/wallet/One.jpeg";
import TWOIMAGE from "./../../img/wallet/Two.jpeg";
import THREEIMAGE from "./../../img/wallet/Three.jpeg";
import FOURIMAGE from "./../../img/wallet/Four.jpeg";

const Wallet = () => {
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
                    Our <span>Wallet</span>
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
                        Wallet
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb-area-end */}
        {/* community-area */}
        <div className="community-area primary-bg pt-120 pb-175">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src={ONEIMAGE} alt="" className="img-fluid" />
              </div>
              <div className="col-md-6">
                <img src={TWOIMAGE} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <img src={THREEIMAGE} alt="" className="img-fluid" />
              </div>
              <div className="col-md-6">
                <img src={FOURIMAGE} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        {/* community-area-end */}
      </main>
      {/* main-area-end */}
    </>
  );
};

export default Wallet;
