import React, { useEffect, useMemo, useState } from 'react';

import Header from '../components/Header';
import Heading from '../components/Heading';
import GridContainer from '../components/GridContainer';

const Home = () => {
  const texts = useMemo(
    () => ['Primeiro Texto', 'Segundo Texto', 'Terceiro Texto', 'Quarto Texto'],
    []
  );
  const [activeGrid, setActiveGrid] = useState(0);
  const [animation, setAnimation] = useState([
    ...Array(texts.length).fill('animate-before'),
  ]);

  // animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveGrid((prev) => {
        return (prev + 1) % texts.length;
      });
    }, 2000 + 200 * 7);

    return () => clearInterval(interval);
  }, [texts]);

  useEffect(() => {
    setAnimation((prev) => {
      let newAnimation = [...prev];
      newAnimation[activeGrid] = '';
      return newAnimation;
    });
    setTimeout(
      () =>
        setAnimation((prev) => {
          let newAnimation = [...prev];
          newAnimation[activeGrid] = 'animate-after';
          return newAnimation;
        }),
      2000
    );
  }, [activeGrid]);

  return (
    <>
      <Header />
      <Heading activeTextIndex={activeGrid} texts={texts} />
      <GridContainer activeGridIndex={activeGrid} transition={animation} />
    </>
  );
};

export default Home;
