import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "./PROJECTS.css"

function PROJECTS() {

  return (
    <Element name="projects">
      <div className="container">
        <div className="blank-container"></div>
        <h1>PROJECTS</h1>
        <div className="underline"></div>
        <div className="content-container">
          <Project1
            role="웹 기획, 웹 디자인, 프론트엔드 개발"
            title="QUIPU main web"
            period="2023.10 - 2024.02"
            description="서울시립대학교 중앙동아리 퀴푸의 메인 웹사이트 기획을 맡았으며, 'home'과 'about' 페이지의 디자인을 Figma 도구를 사용하여 구성했습니다. React.js와 Three.js를 기반으로 하여 전체적인 레이아웃 및 라우팅 구성, 네비게이션 바, 'home', 'about', 'activity' 섹션의 프론트엔드 개발을 하였습니다."
            img="./icon/퀴푸메인웹.png"
            link="https://front-end-zeta-five.vercel.app/"
            github="https://github.com/YenaLey"
            notion="https://github.com/YenaLey" />

          <Project2
            role="웹 기획, 웹 디자인, 프런트엔드 개발"
            title="QUIPU main web"
            period="2023.10 - 2024.02"
            description="서울시립대학교 중앙동아리 퀴푸의 메인 웹사이트 기획을 맡았으며, 'home'과 'about' 페이지의 디자인을 Figma 도구를 사용하여 구성했습니다. React.js와 Three.js를 기반으로 하여 전체적인 레이아웃 및 라우팅 구성, 네비게이션 바, 'home', 'about', 'activity' 섹션의 프론트엔드 개발을 주도했습니다."
            img="./icon/퀴푸메인웹.png"
            link="https://front-end-zeta-five.vercel.app/"
            github="https://github.com/YenaLey"
            notion="https://github.com/YenaLey" />

          <Project1
            role="웹 기획, 웹 디자인, 프론트엔드 개발"
            title="QUIPU main web"
            period="2023.10 - 2024.02"
            description="서울시립대학교 중앙동아리 퀴푸의 메인 웹사이트 기획을 맡았으며, 'home'과 'about' 페이지의 디자인을 Figma 도구를 사용하여 구성했습니다. React.js와 Three.js를 기반으로 하여 전체적인 레이아웃 및 라우팅 구성, 네비게이션 바, 'home', 'about', 'activity' 섹션의 프론트엔드 개발을 주도했습니다."
            img="./icon/퀴푸메인웹.png"
            link="https://front-end-zeta-five.vercel.app/"
            github="https://github.com/YenaLey"
            notion="https://github.com/YenaLey" />

        </div>
        <div className="blank-container"></div>
      </div>
      <div className="container">
        <div className="blank-container"></div>
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
        <div className="blank-container"></div>
      </div>
    </Element>
  );
}

export default PROJECTS;

function Project1(props) {
  return (
    <div className="project-block">
      <div className="laptop">
        <div className="keyboard">
          <div className="keyboard-top"></div>
          <div className="keyboard-bottom"></div>
        </div>
        <img src={props.img}></img>
      </div>
      <div className="project-content">
        <p>{props.period}</p>
        <h3 style={{ fontWeight: '500' }}>{props.role}</h3>
        <h2 style={{ color: "#ffc900" }}>{props.title}</h2>
        <p>{props.description}</p>
        <div className="icon-container">
          <a href={props.link}>
            <div className="icon">
              <img src="./icon/링크아이콘.png"></img>
            </div>
          </a>
          <a href={props.github}>
            <div className="icon">
              <img src="./icon/깃허브아이콘.png"></img>
            </div>
          </a>
          <a href={props.notion}>
            <div className="icon">
              <img src="./icon/기록아이콘.png"></img>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

function Project2(props) {
  return (
    <div id="reverse" className="project-block">
      <div className="project-content">
        <p>{props.period}</p>
        <h3 style={{ fontWeight: '500' }}>{props.role}</h3>
        <h2 style={{ color: "#ffc900" }}>{props.title}</h2>
        <p>{props.description}</p>
        <div className="icon-container">
          <a href={props.link}>
            <div className="icon">
              <img src="./icon/링크아이콘.png"></img>
            </div>
          </a>
          <a href={props.github}>
            <div className="icon">
              <img src="./icon/깃허브아이콘.png"></img>
            </div>
          </a>
          <a href={props.notion}>
            <div className="icon">
              <img src="./icon/기록아이콘.png"></img>
            </div>
          </a>
        </div>
      </div>
      <div className="laptop">
        <div className="keyboard">
          <div className="keyboard-top"></div>
          <div className="keyboard-bottom"></div>
        </div>
        <img src={props.img}></img>
      </div>
    </div>
  )
}