import React, { useRef, useState, useEffect } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useDrag } from 'react-use-gesture';
import gsap from 'gsap';
import './PhotoStack.css';

const classNames = require('classnames');

const PhotoStack = ({ photos }) => {
    // const [stack, setStack] = useState(photos);
    // const [currentIndex, setCurrentIndex] = useState(photos.length - 1);
    // const [dragging, setDragging] = useState(false);
    // const [dragOut, setDragOut] = useState(false);
    // const [verticalMode, setVerticalMode] = useState(false);
    // const [disabled, setDisabled] = useState(true);
    // const photosRef = useRef([]);
    // const bind = useDrag(state => {
    //     const {
    //         active,
    //         args: [index],
    //         movement: [x, y],
    //         direction: [directionX],
    //         vxvy: [velocityX],
    //     } = state;
    //     if (index !== currentIndex || disabled) return;
    //     setDragOut(velocityX < -0.5 || velocityX > 0.5);
    //     setDragging(active);
    //     // Prevent wrong direction slide
    //     const velocityFromOpposite =
    //         (x > 0 && velocityX < 0) || (x < 0 && velocityX > 0);
    //     if (!active && dragOut && !velocityFromOpposite) {
    //         moveOutside(state.event.target, directionX);
    //     } else {
    //         const rotateVal = verticalMode ? 90 : 0;
    //         gsap.to(state.event.target, {
    //             duration: 0.6,
    //             x: active ? x : 0,
    //             y: active ? y : 0,
    //             scale: active ? 1.05 : 1,
    //             rotate: active ? x * 0.03 + rotateVal : rotateVal,
    //             ease: 'power4.out',
    //         });
    //     }
    // });
    // const moveOutside = (target, directionX) => {
    //     setCurrentIndex(currentIndex - 1);
    //     const endX = directionX < 0 ? '-100vw' : '100vw';
    //     gsap.to(target, {
    //         duration: 0.8,
    //         x: endX,
    //         ease: 'power2.out',
    //         onComplete: () => {
    //             setDragOut(false);
    //             if (currentIndex === 0) {
    //                 reGroup();
    //                 setCurrentIndex(photos.length - 1);
    //                 return;
    //             }
    //         },
    //     });
    // };
    // const reGroup = () => {
    //     gsap.to(photosRef.current, {
    //         duration: 1,
    //         y: i => Math.sin(i + 2) * -15,
    //         x: i => Math.sin(i + 2) * -15,
    //         rotate: i => Math.sin(i + 3) * 2,
    //         ease: 'Power4.easeOut',
    //         stagger: 0.1,
    //     });
    // };
    // const checkOrientation = () => {
    //     if (typeof stack[currentIndex] === 'undefined') return;
    //     if (stack[currentIndex].vertical) {
    //         setVerticalMode(true);
    //     } else {
    //         setVerticalMode(false);
    //     }
    // };
    // const stackIn = () => {
    //     gsap.fromTo(
    //         photosRef.current,
    //         {
    //             y: i => '800' - (i + 1) * 10,
    //             x: i => 100 * Math.sin((i + 1) * 45),
    //             rotate: i => 20 * Math.sin((i + 1) * 45),
    //             autoAlpha: 0.02,
    //         },
    //         {
    //             duration: 1.2,
    //             y: i => Math.sin(i + 2) * -15,
    //             x: i => Math.sin(i + 2) * -15,
    //             rotate: i => Math.sin(i + 3) * 2,
    //             autoAlpha: 1,
    //             ease: 'Power4.easeOut',
    //             stagger: 0.05,
    //             onStart: () => {
    //                 document.body.classList.add('overflow-hidden');
    //             },
    //             onComplete: onStackAnimationComplete,
    //         }
    //     );
    // };
    // const onStackAnimationComplete = () => {
    //     setDisabled(false);
    //     checkOrientation();
    //     document.body.classList.remove('overflow-hidden');
    // };
    // useEffect(() => {
    //     gsap.killTweensOf(photosRef.current);
    //     setStack(photos);
    //     setCurrentIndex(photos.length - 1);
    // }, [photos]);
    // useEffect(() => {
    //     setDisabled(true);
    //     setVerticalMode(false);
    //     stackIn();
    // }, [stack]);
    // useEffect(() => {
    //     if (currentIndex === photos.length - 1) return;
    //     checkOrientation();
    // }, [currentIndex]);
    // useEffect(() => {
    //     const remainingEl = photosRef.current.slice(0, currentIndex + 1);
    //     const rotateVal = verticalMode ? 90 : 0;
    //     gsap.to(verticalMode ? remainingEl : photosRef.current, {
    //         duration: 0.6,
    //         rotate: i => Math.sin(i + 3) * 2 + rotateVal,
    //         yPercent: verticalMode ? 25 : 0,
    //         ease: 'Power4.easeOut',
    //         stagger: 0.009,
    //     });
    // }, [verticalMode]);
    // return (
    //     <div
    //         className={classNames({
    //             'photo-stack flex justify-center': true,
    //             landscape: verticalMode,
    //             disabled,
    //         })}
    //     >
    //         <div className="photos">
    //             {stack.map((photo, i) => (
    //                 <img
    //                     src={photo.source}
    //                     ref={el => {
    //                         photosRef.current[i] = el;
    //                     }}
    //                     key={photo.source}
    //                     alt={photo.description}
    //                     className={classNames({
    //                         photo: true,
    //                         current: i === currentIndex,
    //                         dragging: dragging && i === currentIndex,
    //                     })}
    //                     draggable={false}
    //                     {...bind(i)}
    //                 />
    //             ))}
    //         </div>
    //     </div>
    // );

    return (
        <div>
            {photos.map((photo, index) => {
                console.info('photo', photo);
                const pathToImage = getImage(
                    photo.src.childImageSharp.gatsbyImageData
                );
                return (
                    <div key={index}>
                        <p>{photo.description}</p>
                        <GatsbyImage
                            image={pathToImage}
                            alt={photo.description}
                            className="img"
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default PhotoStack;
