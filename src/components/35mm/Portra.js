import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
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

    const handleCategorySelect = category => {
        const filtered = _.filter(data, photo => photo.category === category);

        if (category === 'all') {
            setGallery(data);
        } else {
            setGallery(filtered);
        }

        setCurrentCategory(category);
    };

    return (
        <div>
            <Categories
                onCategorySelect={handleCategorySelect}
                currentCategory={currentCategory}
            />
            <PhotoStack photos={gallery} />
        </div>
    );
};

export default Portra;
