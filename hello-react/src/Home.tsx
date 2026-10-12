import React from "react";
import Button from "./Button";
import Test from "./Test";

interface HomeProps {
  avatarImg: string;
  // label: string;
  // updaterFn: () => void;
  // student: {
  //   fName: string;
  // };
}

const Home = (props: HomeProps) => {
  return (
    <div>
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
