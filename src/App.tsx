import Logo from "@tyeg4/components";
import MyCarousel from "./components/Carousel";
import { itemProps } from "./components/Carousel";
import Project from "./components/Main/ProjectSection/Project";
import AnimatedReveal from "./components/AnimatedReveal";
import Navbar from "./components/Navbar";
import SocialVerticalGreyBanner from "./components/Main/FanaticalSection/SocialVerticalGreyBanner";
import FanaticalTitle from "./components/Main/FanaticalSection/FanaticalTitle";
import FanaticalSection from "./components/Main/FanaticalSection/FanaticalSection";
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
export const Divider = ({ direction, mode, className, ...props }: dividerProps) => {
  if (mode == "thin") return <div {...props} className={`${className} border-[1px] border-[#dddddd]`} />;
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
        <AnimatedReveal />
        <Navbar />
      </header>
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
          <FanaticalSection />
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
                    className="relative purple4 w-[73vw] flex flex-column"
                  >
                    <Divider className="ml-[-50vw] w-[200vw]" direction="horizontal" mode="thin" />
                    <div
                      id="ttleProjects"
                      className="green2 w-full md:px-[50px] flex flex-column"
                    >
                      <div className="legend flex justify-content-between"></div>
                      <h2 className="projectTitleText mt-[50px]">PROJECTS</h2>
                      <h2 className="w-full overflow-hidden projectTitleText mb-[20px] text-[#D9D9D9]">
                        //////////////////////////////////////////////////////////////////
                      </h2>
                    </div>
                    <Project videoIDs={['TscDgdB1nDs', 'TscDgdB1nDs']} technologiesUsed={['RCT']} primaryColour="#2A669E" name="Dunnoyet" fontFamily="Ruda, sans serif" Logo={<svg width="94" height="40" viewBox="0 0 94 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M60.0985 36.5703L60.1074 36.5748L60.1164 36.5791C64.6799 38.7256 69.4402 39.1369 74.1638 37.4897C78.0546 36.1329 81.0956 34.0394 83.2856 31.2552C85.474 28.4723 86.7759 25.0448 87.2611 21.0754C87.3205 20.5894 87.4166 20.4015 87.4972 20.309C87.5688 20.2264 87.7268 20.1085 88.1925 20.0204C88.7486 19.9151 89.3234 19.861 89.9381 19.8048C90.8173 19.7243 91.603 19.4397 92.1689 18.85C92.7412 18.2541 92.9838 17.4574 92.9928 16.574C93.0026 15.6428 93.0001 14.7115 92.9985 13.786C92.9985 13.6483 92.9977 13.5108 92.9977 13.3733C92.996 12.517 92.7616 11.7299 92.186 11.1603C91.6136 10.5937 90.8263 10.3638 89.9682 10.3596C89.6262 10.3579 89.2818 10.3551 88.9358 10.3523C87.6877 10.3421 86.4209 10.3319 85.1581 10.3731C84.922 10.3809 84.8072 10.3409 84.738 10.3024C84.6615 10.26 84.5597 10.1751 84.4172 9.96737C81.2208 5.3157 76.8184 2.4462 71.0424 1.68276C68.0544 1.28776 65.13 1.53205 62.2805 2.45105C57.3167 4.05201 53.813 7.31634 51.4146 11.7191C51.4006 11.7448 51.3873 11.7706 51.3749 11.7958C48.485 10.48 45.5421 10.4721 42.6526 11.7646C42.6327 11.7309 42.6128 11.6973 42.593 11.6637C42.2867 11.1463 41.9892 10.6435 41.6774 10.1635C37.1863 3.25009 29.6844 0.547096 22.1248 1.79433C16.6153 2.70331 12.4537 5.62757 9.49048 10.1566C9.39864 10.2969 9.34678 10.3253 9.33269 10.3325C9.31495 10.3417 9.25543 10.3678 9.07745 10.3655C7.33939 10.3422 5.6023 10.3474 3.86871 10.3659C3.14898 10.3736 2.46501 10.5937 1.94098 11.0466C1.40769 11.5077 1.09426 12.1649 1.06096 12.9242L1.05841 12.9822C0.998673 14.3425 0.934631 15.8008 1.14286 17.258C1.24102 17.945 1.53922 18.5491 2.02222 19.001C2.50252 19.4502 3.12307 19.7096 3.80653 19.7873C4.21877 19.8342 4.64591 19.8651 5.05283 19.8946C5.24015 19.9082 5.42319 19.9215 5.59852 19.9359C6.05917 19.9736 6.32637 20.0998 6.47432 20.2287C6.60761 20.3448 6.71175 20.5206 6.73663 20.8283C6.98925 23.9524 7.95302 26.8661 9.66023 29.5219C13.0501 34.7951 17.9674 37.8596 24.3424 38.3714C29.0102 38.7462 33.3207 37.4726 37.0277 34.6455C41.8208 30.9902 44.3632 26.1302 44.5156 20.1531C44.5414 19.1416 44.5002 18.1251 44.3642 17.1074C44.3592 17.0694 44.3618 17.0513 44.3625 17.0471C44.3626 17.0464 44.3628 17.0457 44.3628 17.0451C44.3633 17.0432 44.3638 17.042 44.3652 17.0394C44.3706 17.0296 44.4025 16.9796 44.5227 16.8993C45.0401 16.5534 45.9431 16.326 46.9439 16.3177C47.9448 16.3093 48.8512 16.5217 49.3758 16.8629C49.5257 16.9604 49.5936 17.0238 49.6245 17.0644C49.6307 17.0727 49.634 17.0782 49.6357 17.0811C49.6372 17.084 49.6377 17.0852 49.6377 17.0854C49.6378 17.0855 49.6381 17.0865 49.6385 17.0892C49.6389 17.0919 49.6396 17.0985 49.6394 17.1098C49.6355 17.2818 49.6354 17.4326 49.6354 17.5715C49.6353 17.8357 49.6351 18.0572 49.6088 18.3016C49.2601 21.5377 49.8563 24.6149 51.2239 27.5303C53.0973 31.5237 56.0491 34.5425 60.0985 36.5703ZM5.90291 15.2539C5.87496 15.2586 5.86469 15.2555 5.8646 15.2555C5.86332 15.2551 5.8552 15.2532 5.83855 15.2412C5.79754 15.212 5.72685 15.1372 5.65238 14.9886C5.64207 14.9679 5.63685 14.9535 5.63428 14.9449C5.64565 14.9229 5.68434 14.8621 5.79544 14.7698C5.85443 14.7208 5.89226 14.7109 5.90464 14.7086C5.91578 14.7065 5.9277 14.7064 5.94778 14.7141C5.98422 14.7282 6.08387 14.7886 6.1808 14.9685C6.16826 15.0996 6.13277 15.1495 6.12331 15.1613C6.11231 15.1752 6.06714 15.2261 5.90291 15.2539ZM87.8286 14.9567C87.8286 14.9523 87.8278 14.9484 87.8278 14.9451C87.8261 14.936 87.8269 14.9313 87.8269 14.9299C87.8278 14.9277 87.8286 14.9229 87.8326 14.9138C87.8432 14.8935 87.875 14.8443 87.9605 14.7805C88.0231 14.7335 88.0834 14.7224 88.1363 14.7291C88.1909 14.7361 88.2576 14.7651 88.3171 14.836C88.3806 14.91 88.3749 14.9482 88.3749 14.9534C88.3741 14.9644 88.3651 15.0296 88.2617 15.129C88.2047 15.1826 88.1542 15.2171 88.1046 15.2388C87.9898 15.2032 87.9344 15.163 87.91 15.1403C87.8847 15.1167 87.8497 15.0737 87.8286 14.9567ZM65.6088 7.30689C72.271 5.92472 78.7561 9.5126 80.9308 15.7337C83.5257 23.7083 77.928 31.1625 71.1023 32.4756C66.3453 33.3906 62.2569 32.2199 58.9057 28.7804C56.1323 25.9339 54.9907 22.5419 55.3159 18.6547C55.799 12.8786 60.1503 8.43934 65.6088 7.30689ZM15.8625 11.1658C16.3845 10.5853 16.986 10.0754 17.6439 9.57204C20.4738 7.55816 23.5416 6.8013 26.9433 7.13101C30.6301 7.48827 33.619 9.04483 35.8947 11.8439C37.5539 13.8848 38.5171 16.1893 38.7337 18.8047C39.1193 23.4596 37.335 27.1701 33.6578 30.097C31.1747 32.0736 28.2444 32.9508 24.9955 32.739C22.0572 32.5475 19.6447 31.6846 17.7279 30.2544C15.8106 28.824 14.3439 26.7921 13.3513 24.1905C11.5552 19.483 12.364 15.0557 15.8625 11.1658Z" fill="white" /><path d="M51.4146 11.7191C53.813 7.31634 57.3167 4.05201 62.2805 2.45105C65.13 1.53205 68.0544 1.28776 71.0425 1.68276C76.8183 2.4462 81.2208 5.3157 84.4172 9.96737C84.5597 10.1751 84.6615 10.26 84.738 10.3024C84.8072 10.3409 84.922 10.3809 85.1581 10.3731C86.4209 10.3319 87.6877 10.3421 88.9358 10.3523C89.2818 10.3551 89.6262 10.3579 89.9682 10.3596C90.8263 10.3638 91.6136 10.5937 92.186 11.1603C92.7616 11.7299 92.996 12.517 92.9977 13.3733C92.9977 13.5108 92.9985 13.6483 92.9985 13.786C93.0001 14.7115 93.0026 15.6428 92.9928 16.574C92.9838 17.4574 92.7412 18.2541 92.1689 18.85C91.603 19.4397 90.8173 19.7243 89.9381 19.8048C89.3234 19.861 88.7486 19.9151 88.1925 20.0204C87.7268 20.1085 87.5688 20.2264 87.4972 20.309C87.4166 20.4015 87.3205 20.5894 87.2611 21.0754C86.7759 25.0448 85.474 28.4723 83.2856 31.2552C81.0956 34.0394 78.0546 36.1329 74.1638 37.4897C69.4402 39.1369 64.6799 38.7256 60.1164 36.5791L60.1074 36.5748L60.0985 36.5703C56.0491 34.5425 53.0973 31.5237 51.2239 27.5303C49.8563 24.6149 49.2601 21.5377 49.6088 18.3016C49.6351 18.0572 49.6353 17.8357 49.6354 17.5715C49.6354 17.4326 49.6355 17.2818 49.6394 17.1098C49.6396 17.0985 49.6389 17.0919 49.6385 17.0892C49.6381 17.0865 49.6378 17.0855 49.6377 17.0854C49.6377 17.0852 49.6372 17.084 49.6357 17.0811C49.634 17.0782 49.6307 17.0727 49.6245 17.0644C49.5936 17.0238 49.5257 16.9604 49.3758 16.8629C48.8512 16.5217 47.9448 16.3093 46.9439 16.3177C45.9431 16.326 45.0401 16.5534 44.5227 16.8993C44.4025 16.9796 44.3706 17.0296 44.3652 17.0394C44.3638 17.042 44.3633 17.0432 44.3628 17.0451C44.3628 17.0457 44.3626 17.0464 44.3625 17.0471C44.3618 17.0513 44.3592 17.0694 44.3642 17.1074C44.5002 18.1251 44.5414 19.1416 44.5156 20.1531C44.3632 26.1302 41.8208 30.9902 37.0277 34.6455C33.3207 37.4726 29.0102 38.7462 24.3424 38.3714C17.9674 37.8596 13.0501 34.7951 9.66023 29.5219C7.95302 26.8661 6.98925 23.9524 6.73663 20.8283C6.71175 20.5206 6.60761 20.3448 6.47432 20.2287C6.32637 20.0998 6.05917 19.9736 5.59852 19.9359C5.42319 19.9215 5.24015 19.9082 5.05283 19.8946C4.64591 19.8651 4.21877 19.8342 3.80653 19.7873C3.12307 19.7096 2.50252 19.4502 2.02222 19.001C1.53922 18.5491 1.24102 17.945 1.14286 17.258C0.934631 15.8008 0.998673 14.3425 1.05841 12.9822L1.06096 12.9242C1.09426 12.1649 1.40769 11.5077 1.94098 11.0466C2.46501 10.5937 3.14898 10.3736 3.86871 10.3659C5.6023 10.3474 7.33939 10.3422 9.07745 10.3655C9.25543 10.3678 9.31495 10.3417 9.33269 10.3325C9.34678 10.3253 9.39864 10.2969 9.49048 10.1566C12.4537 5.62757 16.6153 2.70331 22.1248 1.79433C29.6844 0.547096 37.1863 3.25009 41.6774 10.1635C41.9892 10.6435 42.2867 11.1463 42.593 11.6637C42.6128 11.6973 42.6327 11.7309 42.6526 11.7646C45.5421 10.4721 48.485 10.48 51.3749 11.7958C51.3873 11.7706 51.4006 11.7448 51.4146 11.7191ZM51.4146 11.7191L52.0869 12.0927M5.90291 15.2539L6.03325 16.0395M5.90291 15.2539C5.87496 15.2586 5.86469 15.2555 5.8646 15.2555C5.86332 15.2551 5.8552 15.2532 5.83855 15.2412C5.79754 15.212 5.72685 15.1372 5.65238 14.9886C5.64206 14.9679 5.63685 14.9535 5.63428 14.9449C5.64565 14.9229 5.68434 14.8621 5.79544 14.7698C5.85443 14.7208 5.89226 14.7109 5.90464 14.7086C5.91578 14.7065 5.9277 14.7064 5.94778 14.7141C5.98422 14.7282 6.08387 14.7886 6.1808 14.9685C6.16826 15.0996 6.13277 15.1495 6.12331 15.1613C6.11231 15.1752 6.06714 15.2261 5.90291 15.2539ZM87.8286 14.9567L87.0274 15.0998M87.8286 14.9567C87.8286 14.9523 87.8278 14.9484 87.8278 14.9451C87.8261 14.936 87.8269 14.9313 87.8269 14.9299C87.8278 14.9277 87.8286 14.9229 87.8326 14.9138C87.8432 14.8935 87.875 14.8443 87.9605 14.7805M87.8286 14.9567C87.8497 15.0737 87.8847 15.1167 87.91 15.1403C87.9344 15.163 87.9898 15.2032 88.1046 15.2388C88.1542 15.2171 88.2047 15.1826 88.2617 15.129C88.3651 15.0296 88.3741 14.9644 88.3749 14.9534C88.3749 14.9482 88.3806 14.91 88.3171 14.836C88.2576 14.7651 88.1909 14.7361 88.1363 14.7291C88.0834 14.7224 88.0231 14.7335 87.9605 14.7805M87.9605 14.7805L87.4752 14.1199M65.6088 7.30689C72.271 5.92472 78.7561 9.5126 80.9308 15.7337C83.5257 23.7083 77.9281 31.1625 71.1023 32.4756C66.3453 33.3906 62.2569 32.2199 58.9057 28.7804C56.1323 25.9339 54.9907 22.5419 55.3159 18.6547C55.799 12.8786 60.1503 8.43934 65.6088 7.30689ZM15.8625 11.1658C16.3845 10.5853 16.986 10.0754 17.6439 9.57204C20.4738 7.55816 23.5416 6.8013 26.9433 7.13101C30.6301 7.48827 33.619 9.04483 35.8947 11.8439C37.5539 13.8848 38.5171 16.1893 38.7337 18.8047C39.1193 23.4596 37.335 27.1701 33.6578 30.097C31.1747 32.0736 28.2444 32.9508 24.9955 32.739C22.0572 32.5475 19.6447 31.6846 17.7279 30.2544C15.8106 28.824 14.3439 26.7921 13.3513 24.1905C11.5552 19.483 12.364 15.0557 15.8625 11.1658Z" stroke="white" stroke-width="2" /></svg>} description="It's time to break the traditional boundaries imposed by the current state of education. With Dunnoyet, you’ll learn content linked directly to your existing knowledge to learn 5x faster." />
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
          <section className="font-[300]" id="yellow4">
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
                        <span className="">Computer Science</span>
                      </div>
                    </div>
                    <i className="fa-solid fa-network-wired text-2xl text-[#191919]"></i>
                  </div>
                  {/* Item */}

                  {/* Item */}
                  <div className="flex justify-between border-y-2 border-[var(--lighterGrey)] space-x-6 items-center py-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col space-y-2">
                        <span className="">Mathematics</span>
                      </div>
                    </div>
                    <i className="fa-solid fa-square-root-variable text-2xl text-[#191919]"></i>
                  </div>
                  {/* Item */}

                  {/* Item */}
                  <div className="flex justify-between space-x-6 items-center py-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col space-y-2">
                        <span className="">Physics</span>
                      </div>
                    </div>
                    <i className="fa-solid fa-atom text-2xl text-[#191919]"></i>
                  </div>
                  {/* Item */}
                  {/* <i className="text-sm"></i> */}
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
