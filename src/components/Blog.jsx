import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img from "./ma.PNG";
import Test from "./Test";



const Blog = () => {
  return (
    <div>
      <br />
      <br />
      <h1 className="h1">Ibiza Token Magazine</h1>
      <br />
      <br />
      <br />
      <p className="p">
        Ibiza Token Magazine is an online publication that focuses on the
        different aspects of Web3 with the aims to educate those <br />
        interested in this space and increase adoption both in Ibiza and
        internationally. From global to local Web3 topics in Ibiza, the <br />{" "}
        magazine provides feature stories and interviews with artists, industry
        experts, project developers, and more.
      </p>
      <br />
      
      <Test/>
    </div>
  );
};

export default Blog;
