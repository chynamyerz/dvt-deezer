import React, { FC, useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Grid } from "@mui/material";

import { TrackProps } from "./types";
import { useStyles } from "./styles";
import { getWindowSize, zeroPrefix } from "../../utils/utils";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { ARTIST } from "../../utils/constants";

export const Track: FC<TrackProps> = ({
  data: { title, duration, artist, album },
}) => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const navigate = useNavigate();
  const classes = useStyles();
  const isMobile = windowSize.innerWidth <= 600;

  /**
   *
   * Effects
   *
   */
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  /**
   *
   * Handlers
   *
   */

  const viewArtistHandler = (artistId: string | number) => {
    navigate(encodeURI(`${ARTIST.toLowerCase()}/${artistId}`));
  };

  return (
    <Card
      className={classes.track}
      onClick={() => viewArtistHandler(artist.id)}
    >
      <CardMedia
        component="img"
        height="200"
        src={album.cover_big}
        alt={title}
      />
      <CardContent>
        <Grid container direction="column">
          <Grid item>
            <Grid container>
              <Grid
                className={clsx(classes.trackTitle, classes.textOverflow)}
                item
                xs
              >
                {title}
              </Grid>
              <Grid item>
                {zeroPrefix(Number((Number(duration) / 60).toFixed(2)))}
              </Grid>
            </Grid>
          </Grid>
          <Grid
            className={clsx(classes.trackArtistName, classes.textOverflow)}
            item
          >{`By ${artist.name}`}</Grid>
          {!isMobile && (
            <Grid
              className={clsx(classes.trackAlbumTitle, classes.textOverflow)}
              item
            >
              {album.title}
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};
