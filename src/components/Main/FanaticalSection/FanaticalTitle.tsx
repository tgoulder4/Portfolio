import React from 'react'

function FanaticalTitle() {
    return (
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
                className="position-relative lineh-0p9 font-semibold mb-[10px] text-center sm:text-left text-[15vw] lg:text-[10vw] xl:text-[100pt] tracking-wide sm:w-[635px]"
            >
                FANATICAL ABOUT <em>CREATIVITY</em>
            </h1>
        </article>
    )
}

export default FanaticalTitle