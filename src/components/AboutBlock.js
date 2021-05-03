import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import {
    HtmlIcon,
    CssIcon,
    JavascriptIcon,
    ReactIcon,
    GatsbyIcon,
    GsapIcon,
    TypescriptIcon,
    NextjsIcon,
    ThreeIcon,
    FolderIcon,
} from './DevIcons';
import './AboutBlock.scss';

const AboutBlock = () => {
    const aboutBlockRef = useRef(null);
    const backgroundRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.set(aboutBlockRef.current, { visibility: 'visible' });
        const timeline = gsap.timeline({
            delay: 1.5,
        });

        timeline.from(
            backgroundRef.current,
            {
                duration: 1.8,
                y: '45vh',
                ease: 'power4.out',
            },
            0
        );

        timeline.from(
            containerRef.current,
            {
                duration: 1.8,
                y: '45vh',
                scale: 0.8,
                ease: 'power4.out',
            },
            0.2
        );
    }, []);

    return (
        <div id="about-block" className="overflow-hidden" ref={aboutBlockRef}>
            <div className="solid-background" ref={backgroundRef} />
            <div className="container mx-auto" ref={containerRef}>
                <div className="explorer">
                    <div className="skills">
                        <div className="explorer-title">
                            <div className="icon">
                                <FolderIcon />
                            </div>
                            <div className="label">skills</div>
                        </div>
                        <ul>
                            <li className="tech">
                                <div className="icon">
                                    <HtmlIcon />
                                </div>
                                <div className="label">HTML</div>
                            </li>
                            <li className="tech">
                                <div className="icon">
                                    <CssIcon />
                                </div>
                                <div className="label">CSS</div>
                            </li>
                            <li className="tech">
                                <div className="icon">
                                    <JavascriptIcon />
                                </div>
                                <div className="label">JavaScript</div>
                            </li>
                            <li className="tech">
                                <div className="icon">
                                    <ReactIcon />
                                </div>
                                <div className="label">React</div>
                            </li>
                            <li className="tech">
                                <div className="icon">
                                    <GatsbyIcon />
                                </div>
                                <div className="label">Gatsby</div>
                            </li>
                            <li className="tech">
                                <div className="icon">
                                    <GsapIcon />
                                </div>
                                <div className="label">GSAP</div>
                            </li>
                        </ul>
                    </div>
                    <div className="learning-plans">
                        <div className="explorer-title">
                            <div className="icon">
                                <FolderIcon />
                            </div>
                            <div className="label">learning_plans</div>
                        </div>
                        <ul>
                            <li className="tech">
                                <div className="icon">
                                    <TypescriptIcon />
                                </div>
                                <div className="label">TypeScript</div>
                            </li>
                            <li className="tech">
                                <div className="icon">
                                    <NextjsIcon />
                                </div>
                                <div className="label">Next.js</div>
                            </li>
                            <li className="tech">
                                <div className="icon">
                                    <ThreeIcon />
                                </div>
                                <div className="label">Three.js</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="description font-mono">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Perferendis eius dignissimos qui dicta earum
                        aperiam non atque unde obcaecati sint, ea, tempora
                        pariatur excepturi corrupti rerum inventore, molestias
                        optio! Deserunt.
                    </p>
                    <br />
                    <p>
                        Nulla repellendus deserunt molestias atque. Odit, non?
                        Ratione modi aspernatur praesentium doloribus
                        consequuntur voluptates ducimus veniam inventore
                        voluptate suscipit? Aut, in eos.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutBlock;
