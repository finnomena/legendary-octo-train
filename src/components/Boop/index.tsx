import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import cx from 'classnames';

import boopSrc from './pop-cat-original-meme_3ObdYkj.mp3';

type BoopProps = {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  scale?: number;
  timing?: number;
};

const Boop = (props: BoopProps) => {
  const { children, className, onClick, timing, scale } = props;
  const [state, setState] = useState<boolean>(false);
  const boopSound = new Audio(boopSrc);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const springProps: any = useSpring({
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    transform: state
      ? `translate(0px, 0px)
         rotate(0deg)
         scale(${scale})`
      : `translate(0px, 0px)
         rotate(0deg)
         scale(1)`,
    config: {
      tension: 300,
      friction: 10,
    },
  });

  useEffect(() => {
    if (!state) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setState(false);
    }, timing);

    // eslint-disable-next-line consistent-return
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [state, timing]);

  const trigger = () => {
    setState(true);
    onClick();
    // Boop Sound
    boopSound.play();
  };

  return (
    <animated.span
      className={cx('will-change-auto', className)}
      onClick={trigger}
      style={springProps}
    >
      {children}
    </animated.span>
  );
};

Boop.defaultProps = {
  className: '',
  scale: 1,
  timing: 150,
};

export default Boop;
