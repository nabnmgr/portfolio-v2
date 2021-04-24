import React, { useEffect, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import gsap, { TimelineMax } from 'gsap';
import './Categories.scss';

const classNames = require('classnames');

const query = graphql`
    {
        allCategoriesJson {
            nodes {
                category
                cover {
                    childImageSharp {
                        gatsbyImageData(
                            layout: FULL_WIDTH
                            placeholder: TRACED_SVG
                        )
                    }
                }
            }
        }
    }
`;

const Categories = ({ onCategorySelect, currentCategory }) => {
    const {
        allCategoriesJson: { nodes: galleries },
    } = useStaticQuery(query);

    const categoriesRef = useRef([]);
    const slideRef = useRef();

    useEffect(() => {
        const timeline = new TimelineMax({});

        timeline.add(
            gsap.from(slideRef.current, {
                delay: 0.2,
                duration: 0.8,
                x: 30,
                autoAlpha: 0,
                ease: 'Power4.easeOut',
            })
        );

        timeline.add(
            gsap.from(categoriesRef.current, {
                duration: 0.7,
                autoAlpha: 0,
                ease: 'Power4.easeOut',
                stagger: 0.08,
            }),
            '-=0.55'
        );
    }, []);

    return (
        <div className="categories flex justify-center">
            <div className="negative-slide" ref={slideRef}>
                {galleries.map(({ category, cover }, i) => {
                    const pathToImage = getImage(
                        cover.childImageSharp.gatsbyImageData
                    );
                    return (
                        <button
                            className={classNames({
                                category: true,
                                active: currentCategory === category,
                            })}
                            key={category}
                            onClick={() => onCategorySelect(category)}
                            disabled={currentCategory === category}
                            type="button"
                            ref={el => {
                                categoriesRef.current[i] = el;
                            }}
                        >
                            <GatsbyImage
                                image={pathToImage}
                                alt={category}
                                className="image"
                            />
                            <div className="text">{category}</div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Categories;
