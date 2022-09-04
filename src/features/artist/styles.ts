import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => {
  return {
    albumsWrapper: {
      [theme.breakpoints.up("md")]: {
        paddingLeft: "10%",
        paddingRight: "10%",
      },
    },
    albumsHeader: {
      fontSize: 20,
      fontWeight: "bold",
      paddingTop: "2%",
      paddingBottom: "2%",
      paddingLeft: 10,
    },
    topTracks: {
      padding: "1%",
      [theme.breakpoints.up("md")]: {
        padding: "5%",
      },
    },
    topTracksHeader: {
      fontSize: 20,
      fontWeight: "bold",
      paddingTop: "2%",
      paddingBottom: "2%",
    },
    artistInfo: {
      position: "relative",
      top: "-70%",
      left: "25%",
      color: "white",
    },
    artistName: {
      fontSize: 32,
      fontWeight: "bolder",
    },
    img: {
      backgroundColor: "black",
    },
  };
});
