import React from 'react';
import { Element } from 'react-scroll';
import "./PROJECTS.css"

function PROJECTS() {
  return (
    <Element name="projects">
      <div className="container">
        <h1>WHY CHOOSE ME</h1>
        <div className="underline"></div>
        <div className="content-container">
          <div className="choose-block">
            <div className="description">
              <h2>빠른 추진력</h2>
              <p>재빠른 실행력으로 아이디어를 신속히 현실에 반영합니다. 우선순위 설정을 통해, 목표를 정확하고 빠르게 달성합니다.</p>
            </div>
            <div className="img">
              <img src="./free-icon-fire-1633308.png"></img>
            </div>
          </div>
          <div className="choose-block">
            <div className="img">
              <img src="./free-icon-conversation-1358039.png"></img>
            </div>
            <div className="description" style={{alignItems:"start"}}>
              <h2>적극적인 커뮤니케이션</h2>
              <p>투명하고 적극적인 소통으로 팀워크를 강화하고, 프로젝트의 비전을 모두와 공유합니다.</p>
            </div>
          </div>
          <div className="choose-block">
            <div className="description">
              <h2>빠른 작업</h2>
              <p>새로운 기술 습득이 빠르며, 배운 내용을 실제 작업에 즉각적으로 적용함으로써 프로젝트를 신속하게 전진시킵니다.</p>
            </div>
            <div className="img">
              <img src="./free-icon-shoes-742704.png"></img>
            </div>
          </div>
          <div className="choose-block">
            <div className="img">
              <img src="./free-icon-circular-alarm-clock-tool-50037.png"></img>
            </div>
            <div className="description" style={{alignItems:"start"}}>
              <h2>높은 신뢰성</h2>
              <p>맡겨진 일에 대한 높은 책임감을 바탕으로, 약속된 기한과 품질 기준을 철저히 준수합니다.</p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default PROJECTS;
