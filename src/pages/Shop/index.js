import SHOPITEM1IMAGE from "./../../img/product/shop_item01.jpg";
import SHOPITEM2IMAGE from "./../../img/product/shop_item02.jpg";
import SHOPITEM3IMAGE from "./../../img/product/shop_item03.jpg";
import SHOPITEM4IMAGE from "./../../img/product/shop_item04.jpg";
import SHOPITEM5IMAGE from "./../../img/product/shop_item05.jpg";
import SHOPITEM6IMAGE from "./../../img/product/shop_item06.jpg";
import SHOPITEM7IMAGE from "./../../img/product/shop_item07.jpg";
import SHOPITEM8IMAGE from "./../../img/product/shop_item08.jpg";
import SHOPITEM9IMAGE from "./../../img/product/shop_item09.jpg";

const Shop = () => {
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
                    accessories <span>store</span>
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
                        store
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb-area-end */}
        {/* shop-area */}
        <section className="shop-area pt-120 pb-90">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="accessories-item text-center mb-80">
                  <div className="accessories-thumb mb-30">
                    <a href="#">
                      <img src={SHOPITEM1IMAGE} alt="" />
                    </a>
                  </div>
                  <div className="accessories-content">
                    <h5>
                      <a href="#">Gaming T-Shirt</a>
                    </h5>
                    <span>Price: $12.00</span>
                    <a href="#" className="shop-add-action">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="accessories-item text-center mb-80">
                  <div className="accessories-thumb mb-30">
                    <a href="#">
                      <img src={SHOPITEM2IMAGE} alt="" />
                    </a>
                  </div>
                  <div className="accessories-content">
                    <h5>
                      <a href="#">Gaming backpack</a>
                    </h5>
                    <span>Price: $19.00</span>
                    <a href="#" className="shop-add-action">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="accessories-item text-center mb-80">
                  <div className="accessories-thumb mb-30">
                    <a href="#">
                      <img src={SHOPITEM3IMAGE} alt="" />
                    </a>
                  </div>
                  <div className="accessories-content">
                    <h5>
                      <a href="#">xbox one controller</a>
                    </h5>
                    <span>Price: $14.00</span>
                    <a href="#" className="shop-add-action">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="accessories-item text-center mb-80">
                  <div className="accessories-thumb mb-30">
                    <a href="#">
                      <img src={SHOPITEM4IMAGE} alt="" />
                    </a>
                  </div>
                  <div className="accessories-content">
                    <h5>
                      <a href="#">Gaming T-Shirt</a>
                    </h5>
                    <span>Price: $12.00</span>
                    <a href="#" className="shop-add-action">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="accessories-item text-center mb-80">
                  <div className="accessories-thumb mb-30">
                    <a href="#">
                      <img src={SHOPITEM5IMAGE} alt="" />
                    </a>
                  </div>
                  <div className="accessories-content">
                    <h5>
                      <a href="#">Gaming backpack</a>
                    </h5>
                    <span>Price: $19.00</span>
                    <a href="#" className="shop-add-action">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="accessories-item text-center mb-80">
                  <div className="accessories-thumb mb-30">
                    <a href="#">
                      <img src={SHOPITEM6IMAGE} alt="" />
                    </a>
                  </div>
                  <div className="accessories-content">
                    <h5>
                      <a href="#">Joy‑Con controllers</a>
                    </h5>
                    <span>Price: $14.00</span>
                    <a href="#" className="shop-add-action">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="accessories-item text-center mb-80">
                  <div className="accessories-thumb mb-30">
                    <a href="#">
                      <img src={SHOPITEM7IMAGE} alt="" />
                    </a>
                  </div>
                  <div className="accessories-content">
                    <h5>
                      <a href="#">nintendo switch</a>
                    </h5>
                    <span>Price: $12.00</span>
                    <a href="#" className="shop-add-action">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="accessories-item text-center mb-80">
                  <div className="accessories-thumb mb-30">
                    <a href="#">
                      <img src={SHOPITEM8IMAGE} alt="" />
                    </a>
                  </div>
                  <div className="accessories-content">
                    <h5>
                      <a href="#">xbox one controller</a>
                    </h5>
                    <span>Price: $19.00</span>
                    <a href="#" className="shop-add-action">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="accessories-item text-center mb-80">
                  <div className="accessories-thumb mb-30">
                    <a href="#">
                      <img src={SHOPITEM9IMAGE} alt="" />
                    </a>
                  </div>
                  <div className="accessories-content">
                    <h5>
                      <a href="#">MaxGreen 5902 Blue</a>
                    </h5>
                    <span>Price: $14.00</span>
                    <a href="#" className="shop-add-action">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* shop-area-end */}
      </main>
      {/* main-area-end */}
    </>
  );
};

export default Shop;
