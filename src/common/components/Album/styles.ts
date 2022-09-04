import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => {
  return {
    title: {
      fontSize: 18,
      fontWeight: "bold",
      paddingBottom: 10,
    },
    releaseDate: {
      color: "gray",
      paddingBottom: 10,
    },
    textOverflow: {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      width: "100%",
    },
  };
});
