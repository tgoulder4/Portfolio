import React, { ReactNode } from 'react'
import { Divider } from '../../App'
import { padding } from '../../lib/spacing'
interface ProjectProps extends React.HTMLAttributes<HTMLDivElement> {
    // You can add other custom props here if needed
    name: string,
    fontFamily: string,
    Logo: ReactNode,
    technologiesUsed: Array<string>,
    primaryColour: string,
    description: string
}

function Project({
    name,
    fontFamily,
    Logo,
    technologiesUsed,
    primaryColour,
    description,
    ...props
}: ProjectProps) {
    return (
        <>
            <Divider className="ml-[-50vw] w-[150vw]" direction="horizontal" mode="thin" />
            <div className="ml-[-50vw] mr-[-20vw] pr-[20vw]" style={{ backgroundColor: primaryColour, paddingTop: padding.normal, paddingBottom: padding.normal, fontFamily: fontFamily }}>
                <div className="ml-[50vw] flex flex-col gap-5">
                    {Logo}
                    <div className="content font-extrabold text-white text-3xl" style={{ fontFamily: fontFamily }}>{name}</div>
                    <h2 className='text-white'>{description}</h2>
                    <div className="media-container">
                        <div className="flex flex-row">
                            <img src="Preview.png" className='object-scale-down w-full flex-2 aspect-video' alt="Preview" />
                            <div className="more-media flex flex-row flex-wrap w-full flex-1">
                                <img src="Preview.png" className='object-scale-down w-full flex-2 aspect-video' alt="Preview" />
                                <img src="Preview.png" className='object-scale-down w-full flex-2 aspect-video' alt="Preview" />
                                <img src="Preview.png" className='object-scale-down w-full flex-2 aspect-video' alt="Preview" />
                                <img src="Preview.png" className='object-scale-down w-full flex-2 aspect-video' alt="Preview" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project