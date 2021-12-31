import React from 'react';
import gif from './error-meme.gif';

type ErrorProps = {
  message?: string | undefined;
};

const Error = ({ message = undefined }: ErrorProps) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center py-16">
      <h1 className="font-semibold text-center text-lg">
        Something went wrong
      </h1>
      <img src={gif} alt="error!" className="max-w-[75%]" />
      {message && <p>{message}</p>}
    </div>
  );
};

Error.defaultProps = {
  message: undefined,
};

export default Error;
