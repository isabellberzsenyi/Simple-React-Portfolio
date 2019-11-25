import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Card,
  CardTitle,
  CardText
} from "reactstrap";
import Header from "./header";
import ProjectCard from "./projectcard";
import Navigation from "./navigation";

import classnames from "classnames";
import simple_res from "./../img/simple_res.JPG";
import easy_animate1 from "./../img/simple-example-with-loopback.svg";
import easy_animate2 from "./../img/toh-at-20.svg";
import marble_solitaire1 from "./../img/marble_solitaire.JPG";
import marble_solitaire2 from "./../img/marble_solitaire2.JPG";
import html_web1 from "./../img/html_website_1.JPG";
import html_web2 from "./../img/html_website_2.JPG";
import calculator from "./../img/calculator.JPG";
import todolist from "./../img/todolist.JPG";
import tictactoe from "./../img/tictactoe.JPG";
import weather from "./../img/weather.JPG";
import ProjectCardReact from "./projectcard_react";

const Projects = props => {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div>
      <Navigation active="projects" />
      <Container style={{ paddingTop: "2.50em" }}>
        <Row style={{ padding: "0", margin: "0", textAlign: "center" }}>
          <Col style={{ padding: "0", margin: "0" }}>
            <h1
              style={{
                textTransform: "uppercase",
                padding: "0",
                margin: "0",
                fontWeight: "bold",
                fontSize: "50px"
              }}
            >
              Projects
            </h1>
          </Col>
        </Row>

        <Row>
          <Col
            md={{ size: 10, offset: 1 }}
            style={{ paddingTop: "1em", paddingBottom: "1em" }}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              tempor nisl vitae erat imperdiet cursus. Phasellus eleifend nisi
              lorem, vitae lobortis arcu ultricies sit amet. Mauris dui ante,
              iaculis nec condimentum id, sodales sit amet orci. Cras mattis
              mauris quis convallis aliquam. Nulla in luctus nunc. Quisque
              commodo ultricies tellus, quis pharetra turpis eleifend at. Sed
              sed orci dignissim, pharetra lectus ac, pulvinar nibh
            </p>
          </Col>
        </Row>

        <Row style={{ margin: "auto", paddingTop: "10px" }}>
          <Col
            md={{ size: 4, offset: 1 }}
            style={{ margin: "auto", paddingTop: "10px" }}
          >
            <ProjectCard
              title="Easy Animator"
              attributes="Group, School"
              image={easy_animate1}
              alt="oops"
              classname="Easy-Animator"
              modalDescription="This program was assigned as a group homework assignment that spanned a couple weeks for my Object-Oriented Design course. Through this assignment the goal was to design a model, controller and view, in Java, to ultimately create an editor animator. The model is created to represent an animation model and all of its functionalities. The view is created to portray the animation in four different ways: svg, text, visual and edit view. The svg and text views output the animations to a file, and the visual and edit views are shown in a popup window to show the animation. The edit view will have a second window popup where all aspects of the animation can be changed (number of shapes, colors, speed, looping, play/ pause, etc). Lastly, the controller was designed to communicate between the model and view. Through this program, I learned how to create a View class and implement it through the text, svg, visual and edit views. The assignment was assigned in a vague manner, giving us room for interpretation and control over how we chose to implement the program."
              modalDescription2="Through this program, I learned how to create a View class and implement it through the text, svg, visual and edit views. The assignment was assigned in a vague manner, giving us room for interpretation and control over how we chose to implement the program."
              modalImg={easy_animate2}
              codeBol={false}
            />
          </Col>
          <Col md={{ size: 4 }} style={{ margin: "auto", paddingTop: "10px" }}>
            <ProjectCard
              title="Marble Solitaire"
              attributes="Solo, School"
              image={marble_solitaire1}
              alt="oops"
              classname="Marble-Solitaire"
              modalDescription="This program was assigned as a homework assignment that spanned a couple weeks for my Object-Oriented Design course. The goal of this assignment was to create a Marble Solitaire game in Java, by designing a model and controller then implementing each. The model represents the solitaire, and is implemented in three ways for three different shapes: European, Triangle and English. The controller was designed to communicate with the user through a Readable and Appendable to allow the user to play the game."
              modalDescription2="Through this assignment I learned how to implement multiple models and better abstract functions to reduce redundancies. In addition, I learned how to create a main function for the program to be run through."
              modalImg={marble_solitaire2}
              codeBol={false}
            />
          </Col>
          <Col md={{ size: 4 }} style={{ margin: "auto", paddingTop: "10px" }}>
            <ProjectCard
              title="Simple HTML Website"
              attributes="Solo, Personal"
              image={simple_res}
              alt="oops"
              classname="Simple-Resume"
              modalDescription="I started this personal side project to portray my resume in a visual manner and to learn how to work in HTML and CSS. This is a simple one page HTML website styled with Bootstrap (Version 3.0) and custom CSS written by me. Through this project I learned what HTML tags are, how they can be used to style the HTML code. Lastly, I learned how to make the most of Boostrap to create a website that is responsive on various screen styles."
              modalImg={simple_res}
              codeBol={true}
              codeLink="https://github.com/isabellberzsenyi/Simple-Resume-HTML"
              demoLink="./../demos/old-html-website/index.html"
            />
          </Col>
        </Row>
        <Row style={{ margin: "auto", paddingTop: "10px" }}>
          <Col
            md={{ size: 4, offset: 1 }}
            style={{ margin: "auto", paddingTop: "10px" }}
          >
            <ProjectCard
              title="HTML Website- Part 2"
              attributes="Solo, Personal"
              image={html_web1}
              alt="oops"
              classname="Simple-Resume"
              modalDescription="BLAH FILL IN THE BLANK"
              modalImg={html_web2}
              codeBol={true}
              codeLink="https://github.com/isabellberzsenyi/Simple-Resume-HTML"
              demoLink="https://isabellberzsenyi.github.io"
            />
          </Col>
          <Col md={{ size: 4 }} style={{ margin: "auto", paddingTop: "10px" }}>
            <ProjectCardReact
              title="Calculator"
              attributes="Solo, Personal"
              image={calculator}
              alt="oops"
              classname="Calculator"
              codeBol={true}
              codeLink="https://github.com/isabellberzsenyi/Simple-Resume-HTML"
              demoLink="https://isabellberzsenyi.github.io"
              project="calculator"
            />
          </Col>
          <Col md={{ size: 4 }} style={{ margin: "auto", paddingTop: "10px" }}>
            <ProjectCardReact
              title="Tic Tac Toe"
              attributes="Solo, Personal"
              image={tictactoe}
              alt="oops"
              classname="Tic-Tac-Toe"
              codeBol={true}
              codeLink="https://github.com/isabellberzsenyi/Simple-Resume-HTML"
              demoLink="https://isabellberzsenyi.github.io"
              project="tictactoe"
            />
          </Col>
        </Row>
        <Row style={{ margin: "auto", paddingTop: "10px" }}>
          <Col md={{ size: 4 }} style={{ margin: "auto", paddingTop: "10px" }}>
            <ProjectCardReact
              title="Weather App"
              attributes="Solo, Personal"
              image={weather}
              alt="oops"
              classname="Weather-App"
              codeBol={true}
              codeLink="https://github.com/isabellberzsenyi/Simple-Resume-HTML"
              demoLink="https://isabellberzsenyi.github.io"
              project="weatherapp"
            />
          </Col>
          <Col md={{ size: 4 }} style={{ margin: "auto", paddingTop: "10px" }}>
            <ProjectCardReact
              title="To Do List"
              attributes="Solo, Personal"
              image={todolist}
              alt="oops"
              classname="To-Do-List"
              codeBol={true}
              codeLink="https://github.com/isabellberzsenyi/Simple-Resume-HTML"
              demoLink="https://isabellberzsenyi.github.io"
              project="todolist"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
