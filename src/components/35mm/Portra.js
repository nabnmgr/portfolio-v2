import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PhotoStack from './PhotoStack';
// import data from '../../data/photos.json';
import Categories from './Categories';

const _ = require('lodash');

const query = graphql`
    {
        allPortraJson {
            nodes {
                description
                src {
                    childImageSharp {
                        gatsbyImageData(
                            layout: CONSTRAINED
                            placeholder: BLURRED
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
    console.log('data', data);

    // const [gallery, setGallery] = useState(data.photos);
    // const [currentCategory, setCurrentCategory] = useState('all');

    // const handleCategorySelect = category => {
    //     const filtered = _.filter(
    //         data.photos,
    //         photo => photo.category === category
    //     );

    //     if (category === 'all') {
    //         setGallery(data.photos);
    //     } else {
    //         setGallery(filtered);
    //     }
    //     setCurrentCategory(category);
    // };

    return (
        <div>
            {/* <Categories
                onCategorySelect={handleCategorySelect}
                currentCategory={currentCategory}
            />*/}
            {/* <PhotoStack photos={gallery} /> */}
            <PhotoStack photos={data} />
        </div>
    );
};

export default Portra;
