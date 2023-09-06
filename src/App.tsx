import MyCarousel from "./components/Carousel";
import { itemProps } from "./components/Carousel";
const creations: Array<itemProps["item"]> = [
  {
    id: 1,
    title: "Trainspy",
    roleDescription:
      "I created Trainspy, an API that provides real-time train information for the UK rail network. Reached over 800 downloads in less than 3 days.",
    company: "",
    companyInfo: "",
    img: "./train.png",
    url: "https://tgoulder4.github.io/projects/trainspy/",
  },
  {
    id: 2,
    title: "Learnmate",
    roleDescription:
      "I created Learnmate, a prototype educational tool providing tailored content recommendations, practice questions, and time management tools. Used by many classmates.",
    company: "",
    companyInfo: "",
    img: "./learnmateLogo.png",
    url: "https://tgoulder4.github.io/projects/Learnmate/",
  },
  {
    id: 2,
    title: "Portfolio",
    roleDescription: "I created this portfolio.",
    company: "",
    companyInfo: "",
    img: "./logo.png",
    url: "#",
  },
];

function App() {
  return (
    <>
      <header>
        <div className="topCover z-[4] absolute w-full h-full bg-[var(--secondary\_colour)]"></div>
        <div id="rails" className="">
          {/*auto layout, 'sliding' across rails. width is screen width + 2* size of width of 1 cover. (0.5vw). center by display:flex justify-content: center on html*/}
          <div className="cover" id="coverLeft"></div>
          {/*covers have the highest z-index, and always cover viewport height until reveal. disable scroll while covered*/}
          <div id="mainReveal">
            {/*width goes from zero to vw upon animation*/}
            <div className="accordion partHeight" id="accordionLeft">
              <div
                className="lgAccCont partHeight hidden lg:flex"
                id="lgAccCont"
              >
                <div className="line hLine"></div>
                <div className="line hLine"></div>
                <div className="line hLine"></div>
              </div>
              {/*Holds the 3 lines for the larger column on the left/right*/}
              <div className="vLine line tallVLine hidden lg:flex"></div>
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
                className="flex justify-center p-[var(--standardMargin)]"
              >
                {/*shapeshift group*/}
                <div
                  id="shapeShift"
                  className="h-100 relative min-w-[200px] z-10 flex gap-[5px] flex-col items-center"
                >
                  <div
                    id="topPart"
                    className="flex w-[60%] gap-[1px] justify-between"
                  >
                    <div className="block z-10" id="leftBlock"></div>
                    <div className="block z-10" id="rightBlock"></div>
                  </div>
                  <div
                    className="block w-[7%] left-[calc(43%)]"
                    id="bottomBlock"
                  ></div>
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
              <div className="vLine line tallVLine hidden lg:flex"></div>
              {/*color: difference*/}

              <div
                className="lgAccCont partHeight hidden lg:flex"
                id="lgAccCont2"
              >
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
        <nav
          id="navbar"
          className="position-absolute z-[3] w-100 back-color-primary d-flex justify-content-center align-items-center"
        >
          <ul className="w-100 d-flex justify-items-center items-center justify-content-between">
            <li>
              <a href="#contact">CONTACT</a>
            </li>
            {/* <li>
              <div
                className="p-2 bg-orange-800 items-center text-orange-100 leading-none rounded-full flex"
                role="alert"
              >
                <span className="flex rounded-full bg-orange-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                  ⚠
                </span>
                <span className="font-semibold mr-2 text-left flex-auto">
                  Partially complete - check back later!
                </span>
                <svg
                  className="fill-current opacity-75 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                ></svg>
              </div>
            </li> */}
            <li className="moveLeft">
              <a href="#about">ABOUT</a>
            </li>
          </ul>
        </nav>
      </header>
      <main
        id="green"
        className="analysis  d-flex justify-content-center position-relative"
      >
        <div
          id="red"
          className="analysis  d-flex greyBdr-left flex-column sm:w-3/4 w-full"
        >
          <div
            id="lFiller1"
            className="filler position-absolute hidden sm:block left-0 w-7vw md:w-[12.5vw] bg-[var(--primaryColour)] mt-100 goesToLeft h-[1357px]"
          ></div>
          {/* absolute, move this to the left and down, left 0*/}
          <section
            id="yellow1"
            className="analysis  flex-column pl-ForDesk-0ForMob d-flex align-items-stretch greyBdr-bottom"
          >
            {/*---*/}
            <div
              id="cyan"
              className="cyan analysis  d-flex flex-column-reverse flex-xl-row align-items-xl-end"
            >
              <div className="fullHeightLeftVertGreyLine h-100 position-relative"></div>
              {/*spans the whole height*/}

              <div className="analysis  deskLeftBanner minw-150px h-full ml-[-2px] d-none d-xl-flex greyBdr-left greyBdr-right w-var-greyblw bg-[var(--lighterGrey)] justify-center">
                <div
                  id="greySocials"
                  className="greySocialsContainer flex flex-col justify-between pb-[var(--standardMargin)] mt-[var(--CYANMARGINWIDTH)]"
                >
                  <a
                    href="https://www.linkedin.com/in/tye-goulder-2b59b4256/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-linkedin text-[var(--primaryColour)] text-2xl"></i>
                  </a>
                  <a href="mailto:tcjgoulder@gmail.com" target="_blank">
                    <i className="fa-solid fa-envelope text-[var(--primaryColour)] text-2xl"></i>
                  </a>
                  <a href="tel:+447342159087" target="_blank">
                    <i className="fa-solid fa-phone text-[var(--primaryColour)] text-2xl"></i>
                  </a>
                </div>
              </div>
              <div className="longLeft-RightVertGreyLine h-30px relative"></div>
              {/*spans 1.5 sections*/}
              {/*ml-40 is needed for non analysis alignment*/}
              <article
                id="purple2"
                className="analysis  sm:ml-[52px] sm:mb-[60px] sm:pt-[var(--CYANMARGINWIDTH)] sm:pb-0 py-[calc(var(--mobileStandardMargin)_+_50px)] meFanaticalAndDescription"
              >
                <summary className="whoAndWhatIAm text-[var(--primaryColour)] mb-[40px] d-none d-xl-flex justify-between">
                  <p>TYE GOULDER</p>
                  <p>-</p>
                  <p>SOFTWARE DEVELOPER</p>
                  <p>|</p>
                  <p>LOVES OVERWATCH</p>
                </summary>
                <div className="highlighted relative"></div>
                {/* a */}
                <h1
                  id="fanaticalTitle"
                  className="position-relative lineh-0p9 font-semibold mb-[10px] text-center sm:text-left text-[15vw] lg:text-[90pt] tracking-wide sm:w-[635px]"
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
              <div id="yellow2" className="analysis ">
                <div
                  id="lightGreyDown"
                  className="greybgFiller d-none d-xl-block position-absolute"
                ></div>
              </div>

              {/*current*/}
              <section id="yellow3" className="analysis ">
                <div id="contentS2" className="cyan cyan2 analysis ">
                  {/*grid!*/}
                  <div id="place1" className="analysis "></div>
                  <div
                    id="quoteArea"
                    className="purple3 analysis  greyBdr-left d-flex flex-column align-items-start justify-content-center px-[var(--mobileStandardMargin)] sm:px-[var(--standardMargin)] pb-[70px] pt-[50px]"
                  >
                    <i className="fa-sharp fa-solid fa-quote-left text-2xl text-[var(--grey)]"></i>
                    <p className=" max-w-[520px]">
                      I develop intuitive projects with a strong focus on user
                      experience.
                    </p>
                  </div>
                  <div id="place3" className="analysis  greyBdr-all"></div>
                  <div
                    id="projectArea"
                    className="purple4 analysis px-[var(--mobileStandardMargin)] sm:px-[var(--standardMargin)] d-flex flex-column greyBdr-top"
                  >
                    <div
                      id="ttleProjects"
                      className="green2 analysis  d-flex flex-column"
                    >
                      <div className="legend d-flex justify-content-between"></div>
                      <h2 className="projectTitleText">MY WORK</h2>
                      <h2 className="projectTitleText text-[var(--gray)]">
                        ////////////////
                      </h2>
                    </div>
                    <MyCarousel creations={creations} />
                  </div>
                  <div className="githubWrapper  greyBdr-right">
                    <div className="analysis  shortHeightWrapper d-flex justify-content-center">
                      <a
                        href="https://github.com/tgoulder4"
                        target="_blank"
                        id="purple5"
                      >
                        <i className="fa-brands fa-github fa-3x"></i>
                      </a>
                    </div>
                  </div>
                  <div id="place4" className="analysis  greyBdr-bottom"></div>
                  <div id="place3" className="analysis  greyBdr-all"></div>
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
            <div className="Rfiller absolute h-[617px] lg:h-[443px]"></div>
          </div>
          <section className="analysis " id="yellow4">
            <div id="aboutMeSection" className="analysis  cyan3">
              <div id="bl1" className="greyBdr-right"></div>
              <div id="bl2" className="greyBdr-top"></div>
              <div id="bl3" className="greyBdr-left greyBdr-right"></div>
              <div
                id="titleArea"
                className="d-flex px-[var(--mobileStandardMargin)] sm:px-[var(--standardMargin)] position-relative greyBdr-bottom"
              >
                <h2>ABOUT ME</h2>
              </div>
              <div id="skillSetArea" className="flex flex-col lg:flex-row">
                <div className="myEvolvingSkillset text-xl p-[var(--standardMargin)]">
                  {/* Item */}
                  <div className="flex justify-between space-x-6 items-center pb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col space-y-2">
                        <span className="font-bold">Computer Science</span>
                      </div>
                    </div>
                    <i className="fa-solid fa-network-wired text-2xl text-[var(--primaryColour)]"></i>
                  </div>
                  {/* Item */}

                  {/* Item */}
                  <div className="flex justify-between border-y-2 border-[var(--lighterGrey)] space-x-6 items-center py-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col space-y-2">
                        <span className="font-bold">Mathematics</span>
                      </div>
                    </div>
                    <i className="fa-solid fa-square-root-variable text-2xl text-[var(--primaryColour)]"></i>
                  </div>
                  {/* Item */}

                  {/* Item */}
                  <div className="flex justify-between space-x-6 items-center py-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col space-y-2">
                        <span className="font-bold">Physics</span>
                      </div>
                    </div>
                    <i className="fa-solid fa-atom text-2xl text-[var(--primaryColour)]"></i>
                  </div>
                  {/* Item */}
                  <i className="text-sm">(A-Levels)</i>
                </div>
                <div className="anotherQuote p-[var(--standardMargin)]">
                  <i className="fa-sharp fa-solid fa-quote-left text-2xl text-[var(--grey)]"></i>
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
          <section className="analysis  yellow5 grid" id="contactMeSection">
            <div id="bl1" className="greyBdr-right"></div>
            <div id="bl2" className="greyBdr-left greyBdr-right"></div>
            <div id="bl3" className="greyBdr-right"></div>
            <div
              id="titleArea"
              className="flex px-[var(--mobileStandardMargin)] sm:px-[var(--standardMargin)] pb-[30px] position-relative greyBdr-bottom"
            >
              <h2>CONTACT ME</h2>
            </div>
            <summary
              id="details"
              className="flex flex-wrap gap-2 justify-between px-[var(--mobileStandardMargin)] sm:px-var[(--standardMargin)] py-[var(--standardMargin)] pb-[100px]"
            >
              <div className="contactElement flex flex-column justify-between">
                <i className="fa-solid fa-phone text-[var(--primaryColour)]"></i>
                <a href="tel:+447342159087" target="_blank">
                  <div id="phone">07342159087</div>
                </a>
              </div>
              <div className="contactElement flex flex-column justify-between">
                <i className="fa-solid fa-envelope text-[var(--primaryColour)]"></i>
                <a href="mailto:tcjgoulder@gmail.com" target="_blank">
                  <div id="email">tcjgoulder@gmail.com</div>
                </a>
              </div>
              <div className="contactElement flex flex-column justify-between">
                <i className="fa-brands fa-linkedin text-[var(--primaryColour)]"></i>
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
