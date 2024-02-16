import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "./ABOUT.css";

function ABOUT() {

  return (
    <Element name="about">
      {/* ABOUT ME */}
      <div className="container">
        <h1>ABOUT ME</h1>
        <div className="underline"></div>
        <div className="content-container">
          <div className="profile-img">
            <img src="./icon/프로필.jpg"></img>
          </div>
          <div id="whitesmoke" className="about-content">
            <div className="pencil"></div>
            <h1>Hello, I am <span className="name">이예나</span></h1>
            <h2>Front-End 개발자</h2>
            <p>말보다 행동으로 먼저 나아가며, 꿈을 현실로 만들어내는 추진력이 강한 개발자입니다. 인터랙티브 디자인에 큰 관심을 가지고 있으며, 사용자에게 매력적이면서도 실용적인 인터랙션 경험을 제공하기 위해 끊임없이 노력하고 있습니다. 프론트엔드 개발에 주력하고 있으며, 팀 내 원활한 협업과 직접적인 의견 반영을 위해 기획, 디자인, 백엔드 분야에도 지속적으로 관심을 가지고 학습하고 있습니다.</p>
            <div className="about-content--bottom">
              <p>Address: </p><span>서울특별시 동대문구 휘경동</span>
              <p>Email: </p><span>yena.e121@gmail.com</span>
              <p>Instagram: </p><span><a href="https://www.instagram.com/2ye._na/">2ye._na</a></span>
              <p>Github: </p><span><a href="https://github.com/YenaLey">YenaLey</a></span>
            </div>
          </div>
        </div>
      </div>
      <div className="blank-container"></div>
      {/* MY SKILLS */}
      <div id="whitesmoke" className="container">
        <div className="blank-container"></div>
        <h1>MY SKILLS</h1>
        <div className="underline"></div>
        <div className="content-container">
          <SkillBar title="CSS3" percent={70} />
          <SkillBar title="Python" percent={80} />
          <SkillBar title="JS" percent={50} />
          <SkillBar title="React.js" percent={50} />
          <SkillBar title="Three.js" percent={60} />
          <SkillBar title="C" percent={70} />
        </div>
      </div>
      <div id="whitesmoke" className="blank-container"></div>
      {/* count */}
      <div className="content-container" style={{ backgroundColor: "black" }}>
        <div className="blank-container"></div>
        <Count countNum={166} title="coding days" />
        <Count countNum={5} title="projects completed" />
        <Count countNum={171} title="github contributions" />
        <div className="blank-container"></div>
      </div>
      {/* RESUME */}
      <div id="whitesmoke" className="container">
        <div className="blank-container"></div>
        <h1>RESUME</h1>
        <div className="underline"></div>
        <div className="content-container">

          <Resume
            header="Education"
            period="2020.03 - 재학 중"
            title="UOS ECE"
            description1="Electrical and Computer Engineering major at the University of Seoul"
            description2="서울시립대 전자전기컴퓨터공학부 전공"
            activitys={[]} />

          <Resume
            header="Career"
            period="2022.12 - 2023.06"
            title="BDAA 5기"
            description1="빅데이터 분석 학회"
            description2="Jupyter Notebook을 활용한 Pandas와 Numpy 기반의 타이타닉호 데이터 분석"
            activitys={[]} />

          <Resume
            header="Career"
            period="2023.10 - 2024.02"
            title="QUIPU DEV 1기"
            description1="서울시립대학교 중앙 컴퓨터 학술 동아리 QUIPU의 개발팀"
            description2="QUIPU의 메인 웹 제작"
            activitys={["전체적인 기획 및 React.js와 Three.js 기반 프론트엔드 개발"]} />

          <Resume
            header="Career"
            period="2024.03 - 진행 중"
            title="QUIPU DEV 2기"
            description1="서울시립대학교 중앙 컴퓨터 학술 동아리 QUIPU의 개발팀"
            description2="QUIPU의 포럼 웹 제작"
            activitys={[]} />

        </div>
        <div className="blank-container"></div>

      </div>
    </Element>
  );
}

export default ABOUT;

function SkillBar({ title, percent }) {
  return (
    <div className="skillContainer">
      <div className="skillTitle">{title}</div>
      <div className="flask">
        <div className="flaskBody">
          <div className="lava" style={{ height: `${percent}%` }}>
            <p>{parseFloat((0.01 * percent).toFixed(1))}</p>
          </div>
          {Array.from({ length: 10 }, (_, index) => (
            <div className="tick" style={{ bottom: `${index * 10}%` }} key={index}></div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Count(props) {
  return (
    <div class="count-box">

      <h1>{props.countNum} +</h1>
      <div className="underline" style={{ width: "100px", height: "1px", margin: "5px 0", backgroundColor: "white" }}></div>
      <p>{props.title}</p>
    </div>
  )
}

function Resume(props) {

  return (
    <div className="resume-content">
      <div class="resume-header">
        <div className="resume-header-text">
          <p>{props.header}</p>
        </div>
      </div>
      <div class="resume-header-tip-left"></div>
      <div class="resume-header-tip-right"></div>
      <h4>{props.period}</h4>
      <h2>{props.title}</h2>
      <p>{props.description1}</p>
      <p style={{ fontWeight: '700' }}>{props.description2}</p>
      {
        props.activitys.map(function (activity, index) {
          return (
            <p>- {activity}</p>
          )
        })
      }
    </div>
  )
}