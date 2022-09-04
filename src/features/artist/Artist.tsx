import { Box, Card, CardMedia, Divider, Grid } from "@mui/material";
import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { isEmpty } from "lodash";
import { Album, DVTLoadingSpinner, TrackItem } from "../../common/components";
import {
  useGetArtistQuery,
  useGetArtistAlbumsQuery,
  useGetArtistTopTracksQuery,
} from "../api/api";
import { IArtistProps } from "./types";
import { useStyles } from "./styles";
import { formatNumber } from "../../common/utils/utils";
import { NO_DECIMAL } from "../../common/utils/constants";

export const Artist: FC<IArtistProps> = () => {
  const { artistId = "" }: { artistId?: string } = useParams();
  const classes = useStyles();

  /**
   *
   * Custom hooks
   *
   */
  const {
    data: artistData,
    isLoading: artistIsLoading,
    isError: artistHasError,
    error: artistError,
  } = useGetArtistQuery({ artistId }, { skip: isEmpty(artistId) });
  const {
    data: artistAlbumsData,
    isLoading: artistAlbumsIsLoading,
    isError: artistAlbumsHasError,
    error: artistAlbumsError,
  } = useGetArtistAlbumsQuery({ artistId }, { skip: isEmpty(artistId) });
  const {
    data: artistTopTracksData,
    isLoading: artistTopTracksIsLoading,
    isError: artistTopTracksHasError,
    error: artistTopTracksError,
  } = useGetArtistTopTracksQuery({ artistId }, { skip: isEmpty(artistId) });

  if (artistIsLoading || artistAlbumsIsLoading || artistTopTracksIsLoading) {
    return <DVTLoadingSpinner />;
  }

  if (artistHasError) {
    return <p>{(artistError as Error).message}</p>;
  }

  if (artistAlbumsHasError) {
    return <p>{(artistAlbumsError as Error).message}</p>;
  }

  if (artistTopTracksHasError) {
    return <p>{(artistTopTracksError as Error).message}</p>;
  }

  return (
    <Grid container direction="column">
      <Grid item>
        <Grid container spacing={1}>
          <Grid item xs={12} md={7}>
            <Card>
              <CardMedia
                className={classes.img}
                component="img"
                height="400"
                src={artistData?.picture_big}
                alt={artistData?.name}
              />
            </Card>
            <Grid className={classes.artistInfo} container direction="column">
              <Grid className={classes.artistName} item>
                {artistData?.name}
              </Grid>
              <Grid item>{`${formatNumber(
                artistData?.nb_fan ?? 0,
                NO_DECIMAL
              )} fans`}</Grid>
              <Grid item>______</Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5}>
            <Grid className={classes.topTracks} container direction="column">
              <Grid className={classes.topTracksHeader} item>
                Top tracks
              </Grid>
              {artistTopTracksData?.data.map((topTrack, index) => {
                return (
                  <Grid key={topTrack.id} item>
                    <TrackItem data={topTrack} index={index + 1} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
      <Grid className={classes.albumsWrapper} item>
        <Grid container direction="column">
          <Grid className={classes.albumsHeader} item>
            Albums
          </Grid>
          <Grid item>
            <Grid container>
              {artistAlbumsData?.data.map((album) => {
                return (
                  <Grid key={album.id} item xs={12} sm={6} md={4} lg={3}>
                    <Box margin={1}>
                      <Album data={album} />
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
