import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './TitleBlock.scss';

const TitleBlock = () => {
    const titleNameRef = useRef(null);
    const titleTagRef = useRef(null);

    useEffect(() => {
        const timeline = gsap.timeline();

        timeline.from([titleNameRef.current, titleTagRef.current], {
            duration: 1.8,
            y: 130,
            skewY: 10,
            ease: 'power4.out',
            stagger: {
                amount: 0.2,
            },
        });
    }, []);

    return (
        <div id="title-block" className="container mx-auto">
            <div className="hero overflow-hidden">
                <h1 className="title-name" ref={titleNameRef}>
                    Nabin Purja
                </h1>
                <p className="title-tag" ref={titleTagRef}>
                    Front-end developer
                </p>
            </div>
        </div>
    );
};

export default TitleBlock;
