import React from "react";

interface TestProps {
  avatarImg: string;
  isActive: boolean;
}

const Test = ({ avatarImg, isActive }: TestProps) => {
  // if (isActive) {
  //   return (
  //     <div>
  //       <p>Actief</p>
  //       <img src={avatarImg} alt="" />
  //     </div>
  //   );
  // }

  return (
    <div>
      {/* {isActive ? <p>Actief</p> : null} */}
      {isActive && <p>Actief</p>}
      <p>{isActive ? "Actief" : "Niet Actief"}</p>
      <img src={avatarImg} alt="" />
    </div>
  );
};

export default Test;
