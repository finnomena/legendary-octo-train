import React from 'react';
import cx from 'classnames';

type LoadingProps = {
  message?: string | undefined;
  full?: boolean;
};

const Loading = ({ message, full }: LoadingProps) => {
  return (
    <div
      className={cx('flex flex-col gap-2 justify-center items-center', {
        'h-screen': full,
      })}
    >
      <div
        style={{ borderTopColor: 'transparent' }}
        className="w-6 h-6 border-4 border-blue-500 border-solid rounded-full animate-spin"
      ></div>
      {message && <span className="text-center">{message}</span>}
    </div>
  );
};

Loading.defaultProps = {
  message: undefined,
  full: false,
};

export default Loading;
