import React from 'react';
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
    return (
        <div id="about-block" className="">
            <div className="container mx-auto">
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