/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Box, Container, makeStyles } from "@material-ui/core";
import NavbarComponent from "../navbar/NavbarComponent";
import UpdatePasswordComponent from "./UpdatePasswordComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(1),
  },
}));

function ProfileComponent() {
  const classes = useStyles();

  return (
    <div>
          <NavbarComponent/>
      <Container maxWidth="lg">
        <Box mt={3}>
          <UpdatePasswordComponent />
        </Box>
      </Container>
    </div>
  );
}

export default ProfileComponent;
