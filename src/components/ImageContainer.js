import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

// container for an image on the grid
// only loads an image if it's close to be visible
const ImageContainer = ({ src }) => {
  const ref = React.useRef();
  const [isVisible, setIsVisible] = React.useState(false);

  useIntersectionObserver({
    target: ref,
    onIntersect: ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        setIsVisible(true);
        observerElement.unobserve(ref.current);
      }
    },
    rootMargin: '100px',
  });

  return (
    <div
      className='item'
      ref={ref}
      style={{ background: `${isVisible ? `url(${src})` : 'none'}` }}
    />
  );
};

export default ImageContainer;
