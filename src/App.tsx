import Carousel from "./components/Carousel";
import { CarouselItemProps } from "./components/CarouselItem";
const items: CarouselItemProps = [{
  title: "Creator of Trainspy",
  roleDescription: "Created Trainspy API, a RESTful API that provides real-time train information for the UK rail network. Reached over 800 downloads in less than a week.",
}]

function App() {
  return (
    <>
      <header>
        <div id="rails" className="">
          {/*auto layout, 'sliding' across rails. width is screen width + 2* size of width of 1 cover. (0.5vw). center by display:flex justify-content: center on html*/}
          <div className="cover" id="coverLeft"></div>
          {/*covers have the highest z-index, and always cover viewport height until reveal. disable scroll while covered*/}
          <div id="mainReveal">
            {/*width goes from zero to vw upon animation*/}
            <div className="accordion partHeight" id="accordionLeft">
              <div className="lgAccCont partHeight" id="lgAccCont">
                <div className="line hLine"></div>
                <div className="line hLine"></div>
                <div className="line hLine"></div>
              </div>
              {/*Holds the 3 lines for the larger column on the left/right*/}
              <div className="vLine line tallVLine d-none d-sm-flex"></div>
              {/*color: difference*/}
              <div className="smAccCont d-flex">
                <div className="line hLine"></div>
                <div className="line hLine"></div>
                <div className="line hLine"></div>
              </div>
              {/*Holds the 3 lines for the smaller column on the left/right*/}
              <div className="line vLine"></div>
            </div>
            <div id="center" className="partHeight">
              {/*flex downwards*/}
              <div className="centerAccordion mt-5per">
                {/*flex downwards*/}
                <div className="line hLine"></div>
                <div className="centAccCont">
                  {/*used to keep the lines centered always*/}
                  <div className="line vLine"></div>
                  <div className="line vLine"></div>
                  <div className="line vLine"></div>
                </div>
              </div>
              <div
                id="shapeShift-container"
                className="flex justify-center p-[50px]"
              >
                {/*shapeshift group*/}
                <div id="shapeShift" className="h-100 relative w-[300px]">
                  <div
                    id="topPart"
                    className="absolute flex h-1/5 w-full justify-between"
                  >
                    <div className="block" id="leftBlock"></div>
                    <div className="block" id="rightBlock"></div>
                  </div>
                  <div className="block" id="bottomBlock"></div>
                </div>
              </div>
              <div className="centerAccordion mb-5per">
                {/*flex downwards*/}
                <div className="centAccCont">
                  {/*used to keep the line centered always*/}
                  <div className="line vLine"></div>
                </div>
                <div className="line hLine"></div>
              </div>
            </div>
            <div className="accordion partHeight" id="accordionRight">
              <div className="line vLine"></div>
              <div className="smAccCont d-flex">
                {/*Holds the 3 lines for the smaller column on the left/right*/}
                <div className="line hLine"></div>
                <div className="line hLine"></div>
                <div className="line hLine"></div>
              </div>
              <div className="vLine line tallVLine d-none d-sm-flex"></div>
              {/*color: difference*/}

              <div className="lgAccCont partHeight" id="lgAccCont2">
                <div className="line hLine"></div>
                <div className="line hLine"></div>
                <div className="line hLine"></div>
              </div>
              {/*Holds the 3 lines for the larger column on the left/right*/}
            </div>
          </div>

          <div className="cover" id="coverRight"></div>
          {/*covers have the highest z-index, and always cover viewport height until reveal. disable scroll while covered*/}
        </div>
        <nav className="position-absolute w-100 back-color-primary d-flex justify-content-center align-items-center">
          <ul className="w-100 d-flex justify-items-center justify-content-between">
            <li>
              <a href="#contact">CONTACT</a>
            </li>
            <li className="moveLeft">
              <a href="#about">ABOUT</a>
            </li>
          </ul>
        </nav>
      </header>
      {/*overall recreated layout*/}
      <main
        id="green"
        className="analysis analysis-Green d-flex justify-content-center position-relative"
      >
        <div
          id="red"
          className="analysis analysis-Red d-flex greyBdr-left flex-column w-3/4"
        >
          <div
            id="lFiller1"
            className="filler position-absolute d-none d-md-block left-0 w-7vw w-12vw-xl bg-black mt-100 goesToLeft h-full"
          ></div>
          {/* absolute, move this to the left and down, left 0*/}
          <section
            id="yellow1"
            className="analysis analysis-Yellow flex-column pl-ForDesk-0ForMob d-flex align-items-stretch greyBdr-bottom"
          >
            {/*---*/}
            <div
              id="cyan"
              className="cyan analysis analysis-Cyan d-flex flex-column-reverse flex-xl-row align-items-xl-end"
            >
              <div className="fullHeightLeftVertGreyLine h-100 position-relative"></div>
              {/*spans the whole height*/}

              <div className="analysis analysis-Purple deskLeftBanner minw-150px h-full ml-[-2px] d-none d-xl-flex greyBdr-all w-var-greyblw">
                <div
                  id="greySocials"
                  className="greySocialsContainer d-flex flex-row flex-xl-column"
                >
                  {/*linkedIn icon*/}
                  {/*mail icon*/}
                  {/*phone icon*/}
                </div>
              </div>
              <div className="longLeft-RightVertGreyLine h-30px relative"></div>
              {/*spans 1.5 sections*/}
              {/*ml-40 is needed for non analysis alignment*/}
              <article
                id="purple2"
                className="analysis analysis-Purple ml-[52px] mb-[60px] meFanaticalAndDescription"
              >
                <summary className="whoAndWhatIAm mb-[40px] d-none d-xl-flex justify-between">
                  <h3>TYE GOULDER</h3>
                  <h3>BACK-END DEVELOPER</h3>
                  <h3>|</h3>
                  <h3>LOVES OVERWATCH</h3>
                </summary>
                <div className="highlighted relative"></div>
                <h1
                  id="fanaticalTitle"
                  className="position-relative lineh-0p9 font-semibold mb-[10px]"
                >
                  FANATICAL ABOUT <em>CREATIVITY</em>
                </h1>
              </article>
            </div>
          </section>
          {/*---*/}

          <div className="HigherContForRightFiller">
            <div
              id="firstDivider"
              className="divider thiccDivider position-absolute goesToRight"
            ></div>
            <div className="LowerContForLeftFiller position-relative">
              <div id="yellow2" className="analysis analysis-Yellow">
                <div
                  id="lightGreyDown"
                  className="greybgFiller d-none d-xl-block position-absolute"
                ></div>
              </div>

              {/*current*/}
              <section id="yellow3" className="analysis analysis-Yellow">
                <div
                  id="contentS2"
                  className="cyan greyBdr-left cyan2 analysis analysis-Cyan"
                >
                  {/*grid!*/}
                  <div id="place1" className="analysis analysis-Purple"></div>
                  <div
                    id="quoteArea"
                    className="purple3 analysis analysis-Purple greyBdr-left d-flex flex-column align-items-start justify-content-center"
                  >
                    <i className="fa-sharp fa-solid fa-quote-left"></i>
                    <p>
                      With a keen eye for user experience, I continually refine
                      my product design skills while practicing my front-end
                      development abilities to create intuitive projects.
                    </p>
                  </div>
                  <div
                    id="place3"
                    className="analysis analysis-Purple greyBdr-all"
                  ></div>
                  <div
                    id="projectArea"
                    className="purple4 analysis analysis-Purple p-10 d-flex flex-column greyBdr-top"
                  >
                    <div
                      id="ttleProjects"
                      className="green2 analysis analysis-Red d-flex flex-column"
                    >
                      <div className="legend d-flex justify-content-between">
                        <p>TOP</p>
                        {/* <p>View all</p> */}
                      </div>
                      <h2>CREATIONS</h2>
                      <h2 className="text-[var(--gray)]">//////////////////</h2>
                    </div>
                     <Carousel(items) /> {/* how do I pass items to Carousel? */}
                  </div>
                  <div className="githubWrapper greyBdr-left greyBdr-right greyBdr-bottom">
                    <div className="analysis analysis-Purple shortHeightWrapper">
                      <a
                        href="https://github.com/tgoulder4"
                        target="_blank"
                        id="purple5"
                        className="d-flex justify-content-center pt-12vh"
                      >
                        <i className="fa-brands fa-github fa-3x"></i>
                      </a>
                    </div>
                  </div>
                  <div
                    id="place4"
                    className="analysis analysis-Purple greyBdr-bottom"
                  ></div>
                  <div
                    id="place3"
                    className="analysis analysis-Purple greyBdr-all"
                  ></div>
                </div>
              </section>
            </div>
          </div>
          <div className="dividerContainer">
            <div className="Divider position-absolute goesToRight goesToLeft w-100"></div>
          </div>
          <div className="filler relative goesToRight" id="secondFiller"></div>

          {/* CURRENT */}
          <div className="fillerContainer" id="abtMeLFiller">
            <div className="Lfiller absolute"></div>
          </div>
          <div className="fillerContainer">
            <div className="Rfiller absolute"></div>
          </div>
          <section className="analysis analysis-Yellow" id="yellow4">
            <div id="aboutMeSection" className="analysis analysis-Cyan cyan3">
              <div id="bl1" className="greyBdr-right"></div>
              <div id="bl2" className="greyBdr-top"></div>
              <div id="bl3" className="greyBdr-left greyBdr-right"></div>
              <div
                id="titleArea"
                className="d-flex pb-[30px] position-relative greyBdr-bottom"
              >
                <h2>ABOUT ME</h2>
              </div>
              <div
                id="skillSetArea"
                className="d-flex flex-column text-xl flex-lg-row"
              >
                <div className="myEvolvingSkillset p-[50px]">
                  {/* Item */}
                  <div className="flex justify-between space-x-6 items-center pb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col space-y-2">
                        <span className="font-bold">Computer Science</span>
                      </div>
                    </div>
                    <i className="fa-solid fa-network-wired text-3xl text-[#000000]"></i>
                  </div>
                  {/* Item */}

                  {/* Item */}
                  <div className="flex justify-between border-y-2 border-[#c8c8c8] space-x-6 items-center py-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col space-y-2">
                        <span className="font-bold">Mathematics</span>
                      </div>
                    </div>
                    <i className="fa-solid fa-square-root-variable text-3xl text-[#000000]"></i>
                  </div>
                  {/* Item */}

                  {/* Item */}
                  <div className="flex justify-between space-x-6 items-center py-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col space-y-2">
                        <span className="font-bold">Physics</span>
                      </div>
                    </div>
                    <i className="fa-solid fa-atom text-3xl text-[#000000]"></i>
                  </div>
                  {/* Item */}
                  <i className="text-sm">(A-Levels)</i>
                </div>
                <div className="anotherQuote p-[50px]">
                  <i className="fa-sharp fa-solid fa-quote-left"></i>
                  <p>
                    I excel in problem-solving and attention to detail, gained
                    from my passion for maths, physics and computer science.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="dividerContainer">
            <div className="Divider position-absolute goesToRight goesToLeft w-100"></div>
          </div>
          <section
            className="analysis analysis-Yellow yellow5 grid"
            id="contactMeSection"
          >
            <div id="bl1" className="greyBdr-right"></div>
            <div id="bl2" className="greyBdr-left greyBdr-right"></div>
            <div id="bl3" className="greyBdr-right"></div>
            <div
              id="titleArea"
              className="d-flex pb-[30px] position-relative greyBdr-bottom"
            >
              <h2>CONTACT ME</h2>
            </div>
            <summary
              id="details"
              className="flex flex-wrap justify-between text-xl px-[50px] py-[15px] pb-[100px]"
            >
              <div className="contactElement flex flex-column justify-between">
                <i className="fa-solid fa-phone text-[#000000]"></i>
                <div id="phone">07342159087</div>
              </div>
              <div className="contactElement flex flex-column justify-between">
                <i className="fa-solid fa-envelope text-[#000000]"></i>
                <div id="email">tcjgoulder@gmail.com</div>
              </div>
              <div className="contactElement flex flex-column justify-between">
                <i className="fa-brands fa-linkedin text-[#000000]"></i>
                <a
                  href="https://www.linkedin.com/in/tye-goulder-2b59b4256/"
                  target="_blank"
                  id="linkedIn"
                >
                  Tye Goulder
                </a>
              </div>
            </summary>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
