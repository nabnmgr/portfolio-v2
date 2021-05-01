import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import './ProjectCard.scss';

const ProjectCard = ({ data }) => {
    const {
        name,
        description: { description },
        image,
        link,
    } = data;

    const pathToImage = getImage(image.gatsbyImageData);

    return (
        <li className="project">
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
