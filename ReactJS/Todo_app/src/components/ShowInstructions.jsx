import React from 'react';
import { Typography } from "@material-ui/core";

import styles from './ShowInstructions.module.css';


function ShowInstructions() {
  return (
    <>
      <Typography
        className={styles.instruction}
      >
        ✍️
        Just type in above box and press enter to start saving ToDos!
        ✍️
      </Typography>
    </>
  );
}

export default ShowInstructions;
