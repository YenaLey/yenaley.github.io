import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "./PROJECTS.css"

function PROJECTS() {

  return (
    <Element name="projects">
      <div id="whitesmoke" className="container">
        <div className="blank-container"></div>
        <h1>PROJECTS</h1>
        <div className="underline"></div>
        <div className="content-container">
          <Project1
            title="QUIPU main web"
            period="2023.10 - 2024.02"
            description="블라블라"
            img="./icon/퀴푸메인웹.png" />

          <Project2
            title="QUIPU main web"
            period="2023.10 - 2024.02"
            description="블라블라"
            img="./icon/퀴푸메인웹.png" />

          <Project1
            title="QUIPU main web"
            period="2023.10 - 2024.02"
            description="블라블라"
            img="./icon/퀴푸메인웹.png" />

          <Project2
            title="QUIPU main web"
            period="2023.10 - 2024.02"
            description="블라블라"
            img="./icon/퀴푸메인웹.png" />
        </div>
        <div className="blank-container"></div>
      </div>
      <div className="blank-container" style={{ backgroundColor: "#ffc900" }}></div>
      <div className="container" style={{ backgroundColor: "#ffc900" }}>
        <h1>WHY CHOOSE ME</h1>
        <div className="underline"></div>
        <div className="content-container">
          <div className="choose-block" id="reverse">
            <div className="description">
              <h2>강한 추진력</h2>
              <p>재빠른 실행력으로 아이디어를 신속히 현실에 반영합니다. 우선순위 설정을 통해, 목표를 정확하고 빠르게 달성합니다.</p>
            </div>
            <div className="img">
              <img src="./icon/추진력.png"></img>
            </div>
          </div>
          <div className="choose-block">
            <div className="img">
              <img src="./icon/커뮤니케이션.png"></img>
            </div>
            <div className="description">
              <h2>적극적인 커뮤니케이션</h2>
              <p>투명하고 적극적인 소통으로 팀워크를 강화하고, 프로젝트의 비전을 모두와 공유합니다.</p>
            </div>
          </div>
          <div className="choose-block" id="reverse">
            <div className="description">
              <h2>빠른 작업</h2>
              <p>새로운 기술 습득이 빠르며, 배운 내용을 실제 작업에 즉각적으로 적용함으로써 프로젝트를 신속하게 전진시킵니다.</p>
            </div>
            <div className="img">
              <img src="./icon/작업.png"></img>
            </div>
          </div>
          <div className="choose-block">
            <div className="img">
              <img src="./icon/신뢰성.png"></img>
            </div>
            <div className="description">
              <h2>높은 신뢰성</h2>
              <p>맡겨진 일에 대한 높은 책임감을 바탕으로, 약속된 기한과 품질을 엄격히 지키며 일합니다.</p>
            </div>
          </div>
        </div>
        <div className="blank-container"></div>
      </div>
    </Element>
  );
}

export default PROJECTS;

function Project1(props) {
  return (
    <div className="project-block">
      <div className="project-img">
        <img src={props.img}></img>
      </div>
      <div className="project-content">
        <h2>{props.title}</h2>
        <p>{props.period}</p>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

function Project2(props) {
  return (
    <div className="project-block">
      <div className="project-content">
        <h2>{props.title}</h2>
        <p>{props.period}</p>
        <p>{props.description}</p>
      </div>
      <div className="project-img">
        <img src={props.img}></img>
      </div>
    </div>
  )
}