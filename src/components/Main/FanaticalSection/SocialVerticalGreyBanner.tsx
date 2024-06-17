import React from 'react'

function SocialVerticalGreyBanner() {
    return (
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
    )
}

export default SocialVerticalGreyBanner