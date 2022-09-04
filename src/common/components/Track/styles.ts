import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => {
  return {
    track: {
      "&:hover": {
        cursor: "pointer",
      },
    },
    trackTitle: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
    },
    trackArtistName: {
      fontSize: 16,
      marginTop: 10,
    },
    trackAlbumTitle: {
      fontSize: 16,
      fontWeight: "bold",
      marginTop: 10,
    },
    textOverflow: {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      width: "100%",
    },
  };
});
