import { useEffect } from "react";
import BRANDLOGO1IMAGE from "./../../img/brand/brand_logo01.png";
import BRANDLOGO2IMAGE from "./../../img/brand/brand_logo02.png";
import BRANDLOGO3IMAGE from "./../../img/brand/brand_logo03.png";
import BRANDLOGO4IMAGE from "./../../img/brand/brand_logo04.png";
import BRANDLOGO5IMAGE from "./../../img/brand/brand_logo05.png";
import BRANDLOGO6IMAGE from "./../../img/brand/brand_logo06.png";

const Contact = () => {
  useEffect(() => {
    loadMap();
  }, []);

  const loadMap = () => {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
      // How zoomed in you want the map to start at (always required)
      zoom: 11,
      scrollwheel: false,
      // The latitude and longitude to center the map (always required)
      center: new google.maps.LatLng(40.67, -73.94), // New York
      // This is where you would paste any style found on Snazzy Maps.
      styles: [
        {
          featureType: "all",
          elementType: "geometry.fill",
          stylers: [{ weight: "2.00" }],
        },
        {
          featureType: "all",
          elementType: "geometry.stroke",
          stylers: [{ color: "#9c9c9c" }],
        },
        {
          featureType: "all",
          elementType: "labels.text",
          stylers: [{ visibility: "on" }],
        },
        {
          featureType: "landscape",
          elementType: "all",
          stylers: [{ color: "#f2f2f2" }],
        },
        {
          featureType: "landscape",
          elementType: "geometry.fill",
          stylers: [{ color: "#ffffff" }],
        },
        {
          featureType: "landscape.man_made",
          elementType: "geometry.fill",
          stylers: [{ color: "#ffffff" }],
        },
        {
          featureType: "poi",
          elementType: "all",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "road",
          elementType: "all",
          stylers: [{ saturation: -100 }, { lightness: 45 }],
        },
        {
          featureType: "road",
          elementType: "geometry.fill",
          stylers: [{ color: "#eeeeee" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#7b7b7b" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#ffffff" }],
        },
        {
          featureType: "road.highway",
          elementType: "all",
          stylers: [{ visibility: "simplified" }],
        },
        {
          featureType: "road.arterial",
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "transit",
          elementType: "all",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "water",
          elementType: "all",
          stylers: [{ color: "#46bcec" }, { visibility: "on" }],
        },
        {
          featureType: "water",
          elementType: "geometry.fill",
          stylers: [{ color: "#c8d7d4" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#070707" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#ffffff" }],
        },
      ],
    };
    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById("contact-map");

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(40.67, -73.94),
      map: map,
      icon: "./../../img/icon/map_marker.png",
      title: "Geco",
    });
  };

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
                    contact <span>info</span>
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
                        contact
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb-area-end */}
        {/* contact-area */}
        <section className="contact-area pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div id="contact-map" />
              </div>
              <div className="col-lg-6 pl-45">
                <div className="section-title title-style-three mb-20">
                  <h2>
                    CONTACT US ABOUT <span>PRESS</span>
                  </h2>
                </div>
                <div className="contact-info-list mb-40">
                  <ul>
                    <li>
                      <i className="fas fa-map-marker-alt" />
                      Walking Park, Los Angeles, Brockland, USA
                    </li>
                    <li>
                      <i className="fas fa-envelope" />
                      info@cloux.com
                    </li>
                  </ul>
                </div>
                <div className="contact-form">
                  <form action="#">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Write Message..."
                      defaultValue={""}
                    />
                    <div className="row">
                      <div className="col-md-6">
                        <input type="text" placeholder="Your Name" />
                      </div>
                      <div className="col-md-6">
                        <input type="email" placeholder="Your Mail" />
                      </div>
                    </div>
                    <button>SUBMIT MESSAGE</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contact-area-end */}
        {/* brand-area */}
        <div className="brand-area lite-gray-bg pb-170 pt-120">
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
      </main>
      {/* main-area-end */}
    </>
  );
};

export default Contact;
