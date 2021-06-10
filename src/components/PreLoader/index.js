import PreLoaderSVGIcon from "./../../img/icon/preloader.svg";

const PreLoader = () => {
  return (
    <>
      {/* preloader */}
      <div id="preloader">
        <div id="loading-center">
          <div id="loading-center-absolute">
            <img src={PreLoaderSVGIcon} alt="" />
          </div>
        </div>
      </div>
      {/* preloader-end */}
    </>
  );
};

export default PreLoader;
