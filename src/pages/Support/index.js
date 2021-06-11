const Support = () => {
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
                    Our <span>Support</span>
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
                        Support
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
              <div className="col-md-6"></div>
              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
        {/* community-area-end */}
      </main>
      {/* main-area-end */}
    </>
  );
};

export default Support;
