import { makeStyles } from "@mui/styles";
import { blueGrey } from "@mui/material/colors";

export const useStyles = makeStyles(() => {
  return {
    wrapper: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    circularProgress: {
      "&.MuiCircularProgress-root": {
        "&.MuiCircularProgress-colorPrimary": {
          color: "#144973",
        },
      },
    },
  };
});
