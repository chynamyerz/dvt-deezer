import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => {
  return {
    containter: {
      marginTop: 10,
      marginBottom: 10,
    },
    logo: {
      paddingLeft: 10,
      paddingRight: 10,
      fontSize: 32,
      fontWeight: "bolder",
      color: "#144973",
    },
    divider: {
      paddingLeft: 10,
      paddingRight: 10,
    },
    search: {
      paddingRight: 10,
    },
  };
});
