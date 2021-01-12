import { withStyles, InputBase } from "@material-ui/core";

export const CustomInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    position: "relative",
    fontSize: "13pt",
    fontWeight: "bold",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderBottom: `3px solid #222 `,
    },
  },
}))(InputBase);
