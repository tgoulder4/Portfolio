import React, { ReactNode, useEffect, useRef } from 'react'
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
    imageURLs?: Array<string>,
    expanded?: boolean
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
    expanded,
    ...props
}: ProjectProps) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const videoWidth = useRef<number>(0)
    useEffect(() => {
        videoWidth.current = videoRef.current?.offsetWidth || 0
        console.log(videoWidth)
    }, [])
    return (<> {expanded ?
        <div className="project">
            <div className='grid place-items-center pl-[30vw] ml-[-30vw] pr-[30vw] mr-[-30vw]' style={{ backgroundColor: primaryColour, fontFamily: fontFamily }}>
                <div className="justify-between flex flex-row">
                    <Divider className='DIVIDER h-[89vh] border-black opacity-40' direction='vertical' mode='thin' />
                    <div style={{ marginTop: padding.normal, marginBottom: padding.normal }} className="flex sm:ml-[50px] flex-col gap-5">
                        {Logo}
                        <div className="content font-extrabold text-white text-3xl" style={{ fontFamily: fontFamily }}>{name}</div>
                        <h2 className='text-white pr-[20vw]'>{description}</h2>
                        <div className="media-container overflow-x-auto w-[65vw]">
                            <div className="flex flex-row gap-3">
                                {
                                    videoIDs.map((id, index) => {
                                        return (
                                            // <iframe
                                            //     width="853"
                                            //     height="480"
                                            //     className='shrink-0'
                                            //     src={`https://www.youtube.com/embed/${id}`}
                                            //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            //     allowFullScreen
                                            //     title="Embedded youtube"
                                            // ></iframe>
                                            <video
                                                id="my-player"
                                                className="video-js shrink-0 h-[50vh] aspect-video"
                                                ref={index == 0 ? videoRef : null}
                                                controls
                                                preload="auto"
                                                poster="WhatIsDNY.png"
                                                data-setup='{}'>
                                                <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
                                                <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm"></source>
                                                <source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg"></source>
                                                <p className="vjs-no-js">
                                                    To view this video please enable JavaScript, and consider upgrading to a
                                                    web browser that
                                                    <a href="https://videojs.com/html5-video-support/" target="_blank">
                                                        supports HTML5 video
                                                    </a>
                                                </p>
                                            </video>
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
                        <button className='h-12 bg-gray-900 drop-shadow-[0_0_35px_rgba(0,0,0,0.25)]' style={{ width: videoWidth.current }}>Test button</button>
                    </div>
                    <Divider className='h-[89vh] border-black opacity-40' direction='vertical' mode='thin' />
                </div>
            </div>
            {
                technologiesUsed.map((techCode) => <TechnologyUsed techCode={techCode} />)
            }
        </div> : <div style={{ backgroundColor: primaryColour, fontFamily: fontFamily }}>
            <div style={{ marginTop: padding.normal, marginBottom: padding.normal }} className="flex sm:ml-[50px] flex-col gap-5">
                {Logo}
                <div className="content font-extrabold text-white text-3xl" style={{ fontFamily: fontFamily }}>{name}</div>
            </div>
        </div>} </>
    )
}

export default Project