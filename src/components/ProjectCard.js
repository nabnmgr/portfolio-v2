import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import './ProjectCard.scss';

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ data }) => {
    const cardRef = useRef(null);

    const {
        name,
        description: { description },
        image,
        link,
    } = data;

    const pathToImage = getImage(image.gatsbyImageData);

    useEffect(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: cardRef.current,
                start: 'top bottom-=100',
                toggleActions: 'play none none reverse',
                // markers: true,
            },
        });

        timeline.from(cardRef.current, {
            duration: 1,
            scale: 1.05,
            autoAlpha: 0,
            ease: 'power3.out',
        });
    }, []);

    return (
        <li className="project" ref={cardRef}>
            <div className="project-img">
                <GatsbyImage
                    image={pathToImage}
                    fluid="fluid"
                    alt={image.description}
                />
            </div>
            <div className="project-info">
                <h3 className="project-name">{name}</h3>
                <div className="project-description">{description}</div>
                {link && (
                    <a href={link} target="_blank" rel="noreferrer">
                        Live demo
                    </a>
                )}
            </div>
        </li>
    );
};

export default ProjectCard;
