import React, { ReactNode } from 'react'
import { Divider } from '../../../App'
import { padding } from '../../../lib/spacing'
import TechnologyUsed from './TechnologyUsed'
interface ProjectProps extends React.HTMLAttributes<HTMLDivElement> {
    // You can add other custom props here if needed
    name: string,
    fontFamily: string,
    Logo: ReactNode,
    technologiesUsed: Array<string>,
    primaryColour: string,
    description: string,
    videoIDs: Array<string>,
    imageURLs: Array<string>,
}

function Project({
    name,
    fontFamily,
    Logo,
    technologiesUsed,
    primaryColour,
    description,
    videoIDs,
    imageURLs,
    ...props
}: ProjectProps) {
    return (
        <div className='grid place-items-center'>
            <Divider className="ml-[-50vw] w-[150vw]" direction="horizontal" mode="thin" />
            <div className="ml-[-50vw] justify-between mr-[-20vw] md:pr-[16.5vw] flex flex-row" style={{ backgroundColor: primaryColour, fontFamily: fontFamily }}>
                <Divider className='DIVIDER h-[89vh] border-black opacity-20' direction='vertical' mode='thin' />
                <div style={{ marginTop: padding.normal, marginBottom: padding.normal }} className="ml-[50vw] w-1/2 flex flex-col gap-5">
                    {Logo}
                    <div className="content font-extrabold text-white text-3xl" style={{ fontFamily: fontFamily }}>{name}</div>
                    <h2 className='text-white '>{description}</h2>
                    <div className="media-container overflow-x-auto">
                        <div className="flex flex-row ">
                            {
                                videoIDs.map((id, index) => {
                                    return (
                                        <iframe
                                            width="853"
                                            height="480"
                                            className='shrink-0'
                                            src={`https://www.youtube.com/embed/${id}`}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            title="Embedded youtube"
                                        ></iframe>
                                    )
                                }
                                )
                            }
                            <div className="more-media flex flex-row flex-wrap w-full flex-1">
                                <img src="Preview.png" className='object-scale-down w-full flex-2 aspect-video' alt="Preview" />
                                <img src="Preview.png" className='object-scale-down w-full flex-2 aspect-video' alt="Preview" />
                                <img src="Preview.png" className='object-scale-down w-full flex-2 aspect-video' alt="Preview" />
                                <img src="Preview.png" className='object-scale-down w-full flex-2 aspect-video' alt="Preview" />
                            </div>
                        </div>
                    </div>
                </div>
                <Divider className='h-[89vh] border-black opacity-20' direction='vertical' mode='thin' />
            </div>
            {
                technologiesUsed.map((techCode) => <TechnologyUsed techCode={techCode} />)
            }
        </div>
    )
}

export default Project