import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => {
  return {
    wrapper: {
      borderBottom: "1px solid lightgray",
      height: 50,
    },
    trackIndex: {
      fontWeight: "bold",
    },
    trackName: {
      color: "gray",
    },
    trackDuration: {
      color: "gray",
      textAlign: "end",
    },
    textOverflow: {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      width: "100%",
    },
  };
});
