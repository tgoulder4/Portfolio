import React, { ReactNode } from 'react'
import { Divider } from '../App'
import { padding } from '../lib/spacing'
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
            <Divider className="ml-[-50vw] w-[200vw]" direction="horizontal" mode="thin" />
            <div className="ml-[-50vw] " style={{ backgroundColor: primaryColour, paddingTop: padding.normal, paddingBottom: padding.normal, fontFamily: fontFamily }}>
                <div className="ml-[50vw] flex flex-col gap-5">
                    {Logo}
                    <div className="content font-extrabold text-white text-3xl" style={{ fontFamily: fontFamily }}>{name}</div>
                    <h2 className='text-white'>{description}</h2>
                    <img src="Preview.png" className='object-scale-down w-full' alt="Preview" />
                </div>
            </div>
        </>
    )
}

export default Project