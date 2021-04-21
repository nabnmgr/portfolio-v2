import React, { useEffect, useRef } from 'react';
import gsap, { TimelineMax } from 'gsap';
import './Categories.css';

const classNames = require('classnames');

const galleries = [
    {
        category: 'all',
        cover: 'images/categories/all.jpg',
    },
    {
        category: 'nature',
        cover: 'images/categories/nature.jpg',
    },
    {
        category: 'street',
        cover: 'images/categories/street.jpg',
    },
    {
        category: 'portrait',
        cover: 'images/categories/portrait.jpg',
    },
];

const Categories = ({ onCategorySelect, currentCategory }) => {
    const categoriesRef = useRef([]);
    const slideRef = useRef();

    useEffect(() => {
        const timeline = new TimelineMax({});

        timeline.add(
            gsap.from(slideRef.current, {
                delay: 1.5,
                duration: 0.6,
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
                {galleries.map(({ category, cover }, i) => (
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
                        <img src={cover} alt="" className="image" />
                        <div className="text">{category}</div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Categories;
