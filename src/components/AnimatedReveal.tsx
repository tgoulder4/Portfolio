
import Logo from '@tyeg4/components'
function AnimatedReveal() {
    return (
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
    )
}

export default AnimatedReveal