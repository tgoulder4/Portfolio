import Logo from "@tyeg4/components";
import MyCarousel from "./components/Carousel";
import { itemProps } from "./components/Carousel";
const creations: Array<itemProps["item"]> = [
  {
    id: 1,
    title: "Product Designer",
    roleDescription:
      "I am re-designing and developing a website for a youth-led mental health charity. The website is being designed and tested to be accessible and easy to use for all visitors, positively impacting hundreds of lives.", //The website was designed to be accessible and easy to use for all users.
    company: "ALBOS UK",
    companyURL: "https://albos.org.uk/",
    companyInfo: "A youth-led mental health charity",
    img: "./logo_light_short.png",
    url: "#",
  },
  {
    id: 2,
    title: "Trainspy",
    roleDescription:
      "I created Trainspy, an API that provides real-time train information for the UK rail network. Reached over 800 downloads in less than 3 days.",
    company: "",
    companyInfo: "",
    companyURL: "",
    img: "./train.png",
    url: "https://tgoulder4.github.io/projects/trainspy/",
  },
  {
    id: 3,
    title: "Light-Remote",
    roleDescription:
      "I created Light-Remote, a web app that allows you to control your smart lights from anywhere with WiFi. Combined my engineering and problem-solving skills to create a solution to a broken light bulb, using an NodeMCU (microcontroller) and a NRF2401 (transciever).",
    company: "",
    companyInfo: "",
    companyURL: "",
    img: "./github.png",
    url: "https://github.com/tgoulder4/light-remote",
  },
  {
    id: 4,
    title: "greenlens",
    roleDescription:
      "I am creating greenlens - Learn tailored content to your knowledge powered by AI, opposing the traditional one size fits all education style.",
    company: "",
    companyInfo: "",
    companyURL: "",
    img: "./glasses_green.png",
    url: "https://tgoulder4.github.io/projects/greenlens/",
  },
  {
    id: 5,
    title: "Learnmate",
    roleDescription:
      "I created Learnmate, a prototype educational tool providing tailored content recommendations, practice questions, and time management tools. Used by many classmates.",
    company: "",
    companyInfo: "",
    companyURL: "",
    img: "./learnmateLogo.png",
    url: "https://tgoulder4.github.io/projects/Learnmate/",
  },
  {
    id: 6,
    title: "Portfolio",
    roleDescription: "I created this portfolio.",
    company: "",
    companyInfo: "",
    companyURL: "",
    img: "./logo.png",
    url: "#",
  },
];
interface dividerProps extends React.HTMLAttributes<HTMLDivElement> {
  // You can add other custom props here if needed
  direction?: "horizontal" | "vertical";
  mode?: "thick" | "thin";
  className?: string;

}
const Divider = ({ direction, mode, className, ...props }: dividerProps) => {
  if (mode == "thin") return <div {...props} className={`${className} border-[1px] border-[#dddddd] ${direction == "horizontal" ? "w-full " : "h-full "}`} />;
  else if (mode == "thick") return <div {...props}
    id="lFiller1"
    className={`${className} filler absolute hidden sm:block left-0 w-7vw md:w-[12.5vw] bg-[#191919] goesToLeft h-[calc(1006px-var(--CYANMARGINWIDTH))]`}
  />
}
function App() {
  return (
    <>
      <header>
        <div className="topCover z-[4] absolute w-full h-full bg-[var(--secondary\_colour)]"></div>
        <div id="rails" className="w-full flex z-[1] justify-center border-b-[#191919] border-b-[15px]">
          {/*auto layout, 'sliding' across rails. width is screen width + 2* size of width of 1 cover. (0.5vw). center by display:flex justify-content: center on html*/}
          <div className="cover" id="coverLeft"></div>
          {/*covers have the highest z-index, and always cover viewport height until reveal. disable scroll while covered*/}
          <div id="mainReveal">
            {/*width goes from zero to vw upon animation*/}
            <div className="accordion h-full" id="accordionLeft">
              <div
                className="lgAccCont h-full hidden lg:flex"
                id="lgAccCont"
              >
                <div className="line hLine"></div>
                <div className="line hLine"></div>
                <div className="line hLine"></div>
              </div>
              {/*Holds the 3 lines for the larger column on the left/right*/}
              <div className="vLine line tallVLine hidden lg:flex"></div>
              {/*color: difference*/}
              <div className="smAccCont flex">
                <div className="line hLine"></div>
                <div className="line hLine"></div>
                <div className="line hLine"></div>
              </div>
              {/*Holds the 3 lines for the smaller column on the left/right*/}
              <div className="line vLine"></div>
            </div>
            <div id="center" className="h-full">
              {/*flex downwards*/}
              <div className="centerAccordion mt-[5%]">
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
                <div
                  id="shapeShift"
                  className="h-full relative min-w-[200px] z-10 flex gap-[5px] flex-col items-center"
                >
                  <Logo />
                </div>
              </div>
              <div className="centerAccordion mb-[5%]">
                {/*flex downwards*/}
                <div className="centAccCont">
                  {/*used to keep the line centered always*/}
                  <div className="line vLine"></div>
                </div>
                <div className="line hLine"></div>
              </div>
            </div>
            <div className="accordion h-full" id="accordionRight">
              <div className="line vLine"></div>
              <div className="smAccCont flex">
                {/*Holds the 3 lines for the smaller column on the left/right*/}
                <div className="line hLine"></div>
                <div className="line hLine"></div>
                <div className="line hLine"></div>
              </div>
              <div className="vLine line tallVLine hidden lg:flex"></div>
              {/*color: difference*/}

              <div
                className="lgAccCont h-full hidden lg:flex"
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
          className="position-absolute z-[3] w-100 back-color-primary flex justify-content-center align-items-center"
        >
          <ul className="w-100 flex justify-items-center items-center justify-content-between">
            <li>
              <a href="#contactMeSection">CONTACT</a>
            </li>
            <li className="moveLeft">
              <a href="#aboutMeSection">ABOUT</a>
            </li>
          </ul>
        </nav>
      </header>
      {/* REBUILD---------------------- */}
      {/* <main className="analysis-Green flex flex-col">
        <section className="analysis-Red flex flex-row w-full">
          <div className="filler h-full w-10"></div>
          <Divider direction="vertical" />
          <div className="h-full w-10 constGreyFiller"></div>
          <Divider direction="vertical" />
          <div className="flex-col">
            <article className="flex-col analysis-Cyan">
              <summary className=" text-[#191919] mb-[40px] hidden xl:flex justify-between">
                <p>TYE</p>
                <p>-</p>
                <p>SOFTWARE DEVELOPER</p>
                <p>|</p>
                <p>LOVES OVERWATCH</p>
              </summary>
              <h1
                id="fanaticalTitle"
                className="relative tracking-[0.9] font-bold mb-[10px] text-center sm:text-left text-[15vw]"
              >
                FANATICAL ABOUT CREATIVITY
                <div className="h-24 bg-[#dddddd] absolute top-0 left-0" />
              </h1>
            </article>
            <div className="flex flex-col items-start justify-center gap-2">
              <i className="fa-sharp fa-solid fa-quote-left text-2xl text-[#dddddd]"></i>
              <p className=" w-[60%]">
                I’m Tye, a self-taught software developer & designer from Birmingham UK. With a keen eye for user experience, I continually refine my product design skills while practicing my development abilities to create unique projects I’m passionate about.
              </p>
            </div>
          </div>
        </section>
      </main> */}
      {/* REBUILD is above-------------------- */}
      <main
        id="green"
        className="analysis-Green flex justify-content-center relative text-2xl" style={{ fontFamily: "Roboto, sans-serif", fontWeight: 300 }}
      >
        <div
          id="red"
          className="analysis-Red flex greyBdr-left flex-column sm:w-3/4 w-full"
        >
          <div
            id="lFiller1"
            className="filler absolute hidden sm:block left-0 w-7vw md:w-[12.5vw] bg-[#191919] goesToLeft h-[calc(1006px-var(--CYANMARGINWIDTH))]"
          />
          {/* absolute, move this to the left and down, left 0*/}
          <section
            id="yellow1"
            className=" flex-column pl-ForDesk-0ForMob flex align-items-stretch greyBdr-bottom"
          >
            {/*-------------------------------------------------------*/}
            <div
              id="cyan"
              className="cyan analysis-Cyan flex flex-col-reverse flex-xl-row align-items-xl-end"
            >
              <div className="fullHeightLeftVertGreyLine h-full position-relative"></div>
              {/*spans the whole height*/}

              <div className=" deskLeftBanner min-w-[150px] h-full ml-[-2px] d-none d-xl-flex greyBdr-left greyBdr-right w-var-greyblw bg-[var(--lighterGrey)] justify-center">
                <div
                  id="greySocials"
                  className="greySocialsContainer flex flex-col justify-between pb-[50px] mt-[var(--CYANMARGINWIDTH)]"
                >
                  <a
                    href="https://www.linkedin.com/in/tye-goulder-2b59b4256/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-linkedin text-[#191919] text-2xl"></i>
                  </a>
                  <a href="mailto:tcjgoulder@gmail.com" target="_blank">
                    <i className="fa-solid fa-envelope text-[#191919] text-2xl"></i>
                  </a>
                  <a href="tel:+447342159087" target="_blank">
                    <i className="fa-solid fa-phone text-[#191919] text-2xl"></i>
                  </a>
                </div>
              </div>
              <div className="longLeft-RightVertGreyLine h-[30px] relative"></div>
              {/*spans 1.5 sections*/}
              {/*ml-40 is needed for non alignment*/}
              <article
                id="purple2"
                className=" sm:ml-[52px] sm:mb-[60px] sm:pt-[var(--CYANMARGINWIDTH)] sm:pb-0 py-[calc(var(--mobileStandardMargin)_+_50px)] meFanaticalAndDescription"
              >
                <summary className="whoAndWhatIAm text-[#191919] mb-[40px] d-none d-xl-flex justify-between">
                  <p>TYE</p>
                  <p>-</p>
                  <p>SOFTWARE DEVELOPER</p>
                  <p>|</p>
                  <p>LOVES OVERWATCH</p>
                </summary>
                <div className="highlighted relative"></div>
                {/* a */}
                <h1
                  id="fanaticalTitle"
                  className="position-relative lineh-0p9 font-semibold mb-[10px] text-center sm:text-left text-[15vw] lg:text-[140pt] tracking-wide sm:w-[635px]"
                >
                  FANATICAL ABOUT <em>CREATIVITY</em>
                </h1>
              </article>
            </div>
          </section>
          {/*-------------------------------------------------------*/}

          <div className="HigherContForRightFiller">
            <div
              id="firstDivider"
              className="divider thiccDivider position-absolute goesToRight"
            ></div>
            <div className="LowerContForLeftFiller position-relative">
              <div id="yellow2" className="">
                <div
                  id="lightGreyDown"
                  className="greybgFiller d-none d-xl-block position-absolute"
                ></div>
              </div>

              <section id="yellow3" className="">
                <div id="contentS2" className="cyan cyan2 ">
                  <div id="place1" className=""></div>
                  <div id="quoteArea"
                    className="purple3 flex flex-col md:flex-row gap-12 justify-between greyBdr-left  px-[var(--mobileStandardMargin)] sm:px-[50px] pb-[70px] pt-[50px]"
                  >
                    <div className="flex flex-col items-start justify-center gap-2">
                      <i className="fa-sharp fa-solid fa-quote-left text-2xl text-[#dddddd]"></i>
                      <p className=" w-[60%]">
                        I’m Tye, a self-taught software developer & designer from Birmingham UK. With a keen eye for user experience, I continually refine my product design skills while practicing my development abilities to create unique projects I’m passionate about.
                      </p>
                    </div>
                  </div>
                  <div id="place3" className=" greyBdr-all"></div>
                  <div id="projectArea"
                    className="relative purple4 px-[var(--mobileStandardMargin)] sm:px-[50px] flex flex-column"
                  >
                    <Divider style={{ width: '200vw' }} className="absolute left-[-50vw] top-0" direction="horizontal" mode="thin" />
                    <div
                      id="ttleProjects"
                      className="green2 w-full flex flex-column"
                    >
                      <div className="legend flex justify-content-between"></div>
                      <h2 className="projectTitleText">MY WORK</h2>
                      <h2 className="w-full overflow-hidden projectTitleText text-[#D9D9D9]">
                        //////////////////////////////////////////////////////////////////
                      </h2>
                      <Divider style={{ width: '200vw' }} className="absolute left-[-50vw] top-0" direction="horizontal" mode="thin" />
                    </div>
                    <MyCarousel creations={creations} />
                  </div>
                  <div className="githubWrapper  greyBdr-right">
                    <div className=" shortHeightWrapper flex justify-content-center">
                      <a
                        href="https://github.com/tgoulder4"
                        target="_blank"
                        id="purple5"
                      >
                        <i className="fa-brands fa-github fa-3x"></i>
                      </a>
                    </div>
                  </div>
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
          <section className="" id="yellow4">
            <div id="aboutMeSection" className=" cyan3">
              <div id="bl1" className="greyBdr-right"></div>
              <div id="bl2" className="greyBdr-top"></div>
              <div id="bl3" className="greyBdr-left greyBdr-right"></div>
              <div
                id="titleArea"
                className="flex px-[var(--mobileStandardMargin)] sm:px-[50px] position-relative greyBdr-bottom"
              >
                <h2>ABOUT ME</h2>
              </div>
              <div id="skillSetArea" className="flex flex-col lg:flex-row">
                <div className="myEvolvingSkillset text-xl p-[50px]">
                  {/* Item */}
                  <div className="flex justify-between space-x-6 items-center pb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col space-y-2">
                        <span className="font-bold">Computer Science</span>
                      </div>
                    </div>
                    <i className="fa-solid fa-network-wired text-2xl text-[#191919]"></i>
                  </div>
                  {/* Item */}

                  {/* Item */}
                  <div className="flex justify-between border-y-2 border-[var(--lighterGrey)] space-x-6 items-center py-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col space-y-2">
                        <span className="font-bold">Mathematics</span>
                      </div>
                    </div>
                    <i className="fa-solid fa-square-root-variable text-2xl text-[#191919]"></i>
                  </div>
                  {/* Item */}

                  {/* Item */}
                  <div className="flex justify-between space-x-6 items-center py-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col space-y-2">
                        <span className="font-bold">Physics</span>
                      </div>
                    </div>
                    <i className="fa-solid fa-atom text-2xl text-[#191919]"></i>
                  </div>
                  {/* Item */}
                  <i className="text-sm">(A-Levels)</i>
                </div>
                <div className="anotherQuote p-[50px] flex flex-col gap-[var(--mobileStandardMargin)] sm:gap-[50px]">
                  <div className="flex flex-col">
                    <i className="fa-sharp fa-solid fa-quote-left text-2xl text-[#dddddd]"></i>
                    <p>
                      I excel in problem-solving and attention to detail, gained
                      from my passion for maths, physics and computer science.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="dividerContainer">
            <div className="Divider position-absolute goesToRight goesToLeft w-100"></div>
          </div>
          <section className=" yellow5 grid" id="contactMeSection">
            <div id="bl1" className="greyBdr-right"></div>
            <div id="bl2" className="greyBdr-left greyBdr-right"></div>
            <div id="bl3" className="greyBdr-right"></div>
            <div
              id="titleArea"
              className="flex px-[var(--mobileStandardMargin)] sm:px-[50px] pb-[30px] position-relative greyBdr-bottom"
            >
              <h2>CONTACT ME</h2>
            </div>
            <summary
              id="details"
              className="flex flex-wrap gap-2 justify-between px-[var(--mobileStandardMargin)] sm:px-var[(--standardMargin)] py-[50px] pb-[100px]"
            >
              <div className="contactElement flex flex-column justify-between">
                <i className="fa-solid fa-phone text-[#191919]"></i>
                <a href="tel:+447342159087" target="_blank">
                  <div id="phone">07342159087</div>
                </a>
              </div>
              <div className="contactElement flex flex-column justify-between">
                <i className="fa-solid fa-envelope text-[#191919]"></i>
                <a href="mailto:tcjgoulder@gmail.com" target="_blank">
                  <div id="email">tcjgoulder@gmail.com</div>
                </a>
              </div>
              <div className="contactElement flex flex-column justify-between">
                <i className="fa-brands fa-linkedin text-[#191919]"></i>
                <a
                  href="https://linkedin.com/in/tye-goulder-2b59b4256/"
                  target="_blank"
                  id="linkedIn"
                >
                  Tye G.
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
