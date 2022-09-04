import React, { FC } from "react";
import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import clsx from "clsx";

import { AlbumProps } from "./types";
import { useStyles } from "./styles";
import moment from "moment";

export const Album: FC<AlbumProps> = ({
  data: { title, cover_big, release_date },
}) => {
  const classes = useStyles();

  return (
    <Card>
      <CardMedia component="img" height="200" src={cover_big} alt={title} />
      <CardContent>
        <Grid container direction="column">
          <Grid className={clsx(classes.title, classes.textOverflow)} item>
            {title}
          </Grid>

          <Grid
            className={clsx(classes.releaseDate, classes.textOverflow)}
            item
          >
            {moment(release_date).year()}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
