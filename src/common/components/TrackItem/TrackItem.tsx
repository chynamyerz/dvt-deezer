import { Grid } from "@mui/material";
import React, { FC } from "react";
import { zeroPrefix } from "../../utils/utils";

import { TrackItemProps } from "./types";
import { useStyles } from "./styles";
import clsx from "clsx";

export const TrackItem: FC<TrackItemProps> = ({
  data: { title, duration },
  index,
}) => {
  const classes = useStyles();

  return (
    <Grid className={classes.wrapper} container alignContent="center">
      <Grid className={classes.trackIndex} item xs={1}>
        {index}
      </Grid>
      <Grid
        className={clsx(classes.trackName, classes.textOverflow)}
        item
        xs={9}
      >
        {title}
      </Grid>
      <Grid className={classes.trackDuration} item xs={2}>
        {zeroPrefix(Number((Number(duration) / 60).toFixed(2)))}
      </Grid>
    </Grid>
  );
};
