import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import Button from '../../components/Button';
import { textState } from '../../store/atoms';
import { charCountState } from '../../store/selectors';

const ExamplePage = () => {
  const [text, setText] = useRecoilState(textState);
  const count = useRecoilValue(charCountState);

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  };

  return (
    <div className="m-3">
      <input
        type="text"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={text}
        onChange={onChange}
      />
      <br />
      Echo: {text}
      <br />
      Character Count: {count}
      <hr />
      <div className="button">
        <Button type="button" color="green" size="md">
          HI, Copter Phanuwat
        </Button>
      </div>
    </div>
  );
};

export default ExamplePage;
