import { Col, Container, Row, Jumbotron } from "react-bootstrap";
import NavbarComponent from "../navbar/NavbarComponent";
import { makeStyles } from "@material-ui/core";
import React from 'react';
import logoPoli from "../../../media/logoPoli.png"
import { border, width } from "@material-ui/system";
import { shadows } from '@material-ui/system';
import { BorderBottom } from "@material-ui/icons";


const useStyles = makeStyles({
  container1:{
    display:"flex",
    justifyContent:"center",
    allignItems:"center",
  },
  container2:{
    display: "flex",
    flexDirection: "column",
    borderRadius:"10px",
    width:"500px",
    position: "relative",
    top: "70px",
    background: "linear-gradient(315deg, #BFADA9, #F0E2DD 40%, #ffffff)",
    boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
  },
  icon:{
    width:"55%",
  },
  general:{
    fontFamily:"roboto",
    fontWeight:"400",
    flex:"1",
    order:"1",
    padding:"20px",    
    borderBottom:"0.5px solid white",
  },
  borderless:{
    fontFamily:"roboto",
    fontWeight:"600",
    flex:"1",
    order:"1",
    padding:"20px",    
  }
});

function HomeComponent() {
  const classes = useStyles();
   
  return (
    <div>
      <NavbarComponent />
      <div className={classes.container1}>
        <div className={classes.container2}>
        <div className={classes.general}><p style={{fontSize:'20px'}}>UNIVERSITATEA POLITEHNICA BUCURESTI</p></div>
        <div className={classes.general}><p style={{fontSize:'20px'}}>FACULTATEA DE ELECTRONICA, TELECOMUNICATII SI TEHNOLOGIA INFORMATIEI</p></div>
        <div className={classes.general}><p><img className={classes.icon} src={logoPoli} alt="poli"/></p></div>
        <div className={classes.general}><p style={{fontSize:'30px', textDecorationLine:'underline'}}>LUCRARE DE LICENTA</p></div>
        <div className={classes.general}><p style={{fontSize:'20px'}}>COORDONATOR STIINTIFIC:</p></div>
        <div className={classes.general}><p style={{fontSize:'17px'}}>Asolvent: Ghita Andrei Rafael</p></div>
        <div className={classes.borderless}><p style={{fontSize:'17px'}}>BUCURESTI 2021</p></div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
