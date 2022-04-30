/*
 *
 * HomePage
 *
 */

import React, { memo } from "react";
import { MainMenu } from "../../components/MainMenu";

const HomePage = () => {
  return (
    <div>
      <MainMenu />
    </div>
  );
};

export default memo(HomePage);
