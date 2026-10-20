import React, { useEffect, useState } from "react";
import Button from "./Button";
import Test from "./Test";
import Counter from "./Counter";

interface HomeProps {
  avatarImg: string;
  // label: string;
  // updaterFn: () => void;
  // student: {
  //   fName: string;
  // };
}

const Home = (props: HomeProps) => {
  const [counter, setCounter] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(true);

  // const filteredItems = [];

  // Logica

  // const handleClick = () => {
  //   setCounter(counter + 1);
  // };

  useEffect(() => {
    const timerId = setInterval(() => {
      console.log("Tick");
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          setIsRefreshing(!isRefreshing);
        }}></button>
      <p>{counter}</p>
      <Counter setCounter={setCounter} />
      <Counter setCounter={setCounter} />
      <Counter setCounter={setCounter} />
      <Button label="Home">
        <div>
          <img />
          <p>Klik mij vanuit Home</p>
        </div>
      </Button>
      {/* Forwarden van props */}
      <Test {...props} isActive={true} />
    </div>
  );
};

export default Home;
