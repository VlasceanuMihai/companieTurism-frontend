import React from "react";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
// import { Link } from "react-router-dom";

const useStyles = makeStyles({
  button: {
    position: "relative",
    top: 80,
    marginRight: 10,
    float: "right",
    background: "linear-gradient(45deg, #F1CDB9 10%, #b6aeab 90%)",
    borderRadius: 5,
    border: 0,
    color: "black",
    fontWeight: "bolder",
    height: 30,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px #989898",
    fontFamily: "roboto",
  },
});

function AddButtonComponent(props, ...rest) {
  const classes = useStyles();
  let history = useHistory();

  const pushTo = (path) => {
    history.push(path);
  };

  return (
    <Button
      component={Paper}
      className={classes.button}
      onClick={() => pushTo(props.path)}
    >
      {/* <Link to={props.path} className="btn btn-sm"></Link> */}
      {props.name}
    </Button>
  );
}

export default AddButtonComponent;
