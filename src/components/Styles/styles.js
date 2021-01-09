import { makeStyles } from "@material-ui/core";

export const Styles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "transparent",
    pointerEvents: "none",
    color: "#363b58",
  },
  header: {
    backgroundColor: "#fcfcfc",
    pointerEvents: "auto",
  },
  sideBar: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "14rem",
    backgroundColor: "#31427a",
    pointerEvents: "auto",
    color: "#fff",
    padding: "1rem",
  },
  sideBarLinkContainer: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
  },
}));
