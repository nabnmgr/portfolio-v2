import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ProjectCard from './ProjectCard';

const query = graphql`
    {
        allContentfulPortfolioProjects(sort: { fields: order }) {
            nodes {
                name
                description {
                    description
                }
                image {
                    gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
                    description
                }
                link
            }
        }
    }
`;

const ProjectsBlock = () => {
    const {
        allContentfulPortfolioProjects: { nodes: data },
    } = useStaticQuery(query);

    return (
        <div id="projects-block" className="container mx-auto px-4">
            <h2 className="my-24 text-center">Projects</h2>
            <ul className="projects-list">
                {data.map((project, index) => (
                    <ProjectCard key={index} data={project} />
                ))}
            </ul>
        </div>
    );
};

export default ProjectsBlock;
