import React from 'react'
import SocialVerticalGreyBanner from './SocialVerticalGreyBanner'
import FanaticalTitle from './FanaticalTitle'

function FanaticalSection() {
  return (
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

        <SocialVerticalGreyBanner />
        <div className="longLeft-RightVertGreyLine h-[30px] relative"></div>
        {/*spans 1.5 sections*/}
        {/*ml-40 is needed for non alignment*/}
        <FanaticalTitle />
      </div>
    </section>
  )
}

export default FanaticalSection