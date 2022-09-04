import React, { FC, useState, useEffect, useMemo } from "react";

import { useGetTractsQuery } from "../api/api";
import { DVTLoadingSpinner, Track } from "../../common/components";
import { Box, Divider, Grid } from "@mui/material";
import { ITrack } from "../../common/types";
import { Container } from "@mui/system";
import { DVTTextField } from "../../common/components/DVTTextField";
import { debounce } from "lodash";
import { useStyles } from "./styles";

export const Tracks: FC = () => {
  const [searchTrack, setSearchTrack] = useState<string>("");
  const { data, isLoading, isError, error } = useGetTractsQuery({
    searchTrack,
  });
  const classes = useStyles();

  /**
   *
   * Effects
   *
   */

  useEffect(() => {
    debouncedChangeHandler(searchTrack);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTrack]);

  /**
   *
   * Handlers
   *
   */
  const handleSearch = (text: string) => {
    setSearchTrack(text.trim());
  };

  const debouncedChangeHandler = useMemo(() => debounce(handleSearch, 800), []);

  if (isLoading) {
    return <DVTLoadingSpinner />;
  }

  if (isError) {
    return <p>{(error as Error).message}</p>;
  }

  return (
    <Container className={classes.containter}>
      <Grid container direction="column">
        <Grid item>
          <Grid container alignItems="flex-end">
            <Grid className={classes.logo} item>
              DVT-Deezer
            </Grid>
            <Grid className={classes.search} item xs>
              <DVTTextField
                id="search"
                label="Search"
                textValue={searchTrack}
                setText={setSearchTrack}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.divider} item>
          <Divider />
        </Grid>
        <Grid item>
          <Grid container>
            {data?.data.map((track: ITrack) => {
              return (
                <Grid key={track.id} item xs={12} sm={6} md={4} lg={3}>
                  <Box margin={1}>
                    <Track data={track} />
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
