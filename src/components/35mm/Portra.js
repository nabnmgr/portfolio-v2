import React, { useState, useEffect, useRef } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import gsap from 'gsap';
import PhotoStack from './PhotoStack';
import Categories from './Categories';

const _ = require('lodash');

const query = graphql`
    {
        allPortraJson {
            nodes {
                description
                category
                isVertical
                src {
                    childImageSharp {
                        gatsbyImageData(
                            layout: FULL_WIDTH
                            placeholder: BLURRED
                            aspectRatio: 1.5
                        )
                    }
                }
            }
        }
    }
`;

const Portra = () => {
    const {
        allPortraJson: { nodes: data },
    } = useStaticQuery(query);

    const [gallery, setGallery] = useState(data);
    const [currentCategory, setCurrentCategory] = useState('all');
    const titleRef = useRef();

    const handleCategorySelect = category => {
        const filtered = _.filter(data, photo => photo.category === category);

        if (category === 'all') {
            setGallery(data);
        } else {
            setGallery(filtered);
        }

        setCurrentCategory(category);
    };

    useEffect(() => {
        gsap.from(titleRef.current, {
            duration: 0.5,
            x: 30,
            autoAlpha: 0,
            ease: 'Power2.easeOut',
        });
    }, []);

    return (
        <div className="portra-project">
            <div className="header">
                <div className="title" ref={titleRef}>
                    <Link to="/" className="home-link font-serif">
                        NABIN
                    </Link>
                </div>
                <Categories
                    onCategorySelect={handleCategorySelect}
                    currentCategory={currentCategory}
                />
            </div>

            <PhotoStack photos={gallery} />
        </div>
    );
};

export default Portra;
