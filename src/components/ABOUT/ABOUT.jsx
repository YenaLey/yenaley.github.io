import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "./ABOUT.css";

function ABOUT() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <Element name="about">
      {/* ABOUT ME */}
      <div id="whitesmoke" className="container">
        <h1>ABOUT ME</h1>
        <div className="underline"></div>
        <div className="content-container">
          <motion.div className="profile-img"
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5 }}>
            <img src="./icon/작업.png"></img>
          </motion.div>
          <motion.div className="about-content"
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5 }}>
            <h1>Hello, I am <span className="name">이예나</span></h1>
            <h2>Front-End 개발자</h2>
            <p>저는 말보다 행동으로 먼저 나아가며, 꿈을 현실로 만들어내는 추진력이 강한 개발자입니다. 프론트엔드 개발에 주력하고 있으며, 팀 내 원활한 협업과 직접적인 의견 반영을 위해 기획, 디자인, 백엔드 분야에도 지속적으로 관심을 가지고 학습하고 있습니다. 특히 인터랙티브 디자인에 큰 관심을 가지고 있으며, 사용자에게 매력적이면서도 실용적인 인터랙션 경험을 제공하기 위해 끊임없이 노력하고 있습니다.</p>
            <div className="about-content--bottom">
              <p>Address: </p><span>서울특별시 동대문구 휘경동</span>
              <p>Email: </p><span>yena.e121@gmail.com</span>
              <p>Github: </p><span><a href="https://github.com/YenaLey">YenaLey</a></span>
              <p>Notion: </p><span><a href="https://github.com/YenaLey">yena's Notion</a></span>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="blank-container"></div>
      {/* MY SKILLS */}
      <div className="container">
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
      <div className="blank-container"></div>
      {/* count */}
      <div className="container">
        <div className="content-container" style={{ backgroundColor: "black" }}>
          <div className="count-box">
            <h1>166 +</h1>
            <div className="underline" style={{ width: "80px", height: "1px", margin: "5px 0", backgroundColor: "white" }}></div>
            <p>coding days</p>
          </div>
          <div className="count-box">
            <h1>5 +</h1>
            <div className="underline" style={{ width: "80px", height: "1px", margin: "5px 0", backgroundColor: "white" }}></div>
            <p>projects completed</p>
          </div>
          <div className="count-box">
            <h1>5 +</h1>
            <div className="underline" style={{ width: "80px", height: "1px", margin: "5px 0", backgroundColor: "white" }}></div>
            <p>side projects</p>
          </div>
          <div className="count-box">
            <h1>171 +</h1>
            <div className="underline" style={{ width: "80px", height: "1px", margin: "5px 0", backgroundColor: "white" }}></div>
            <p>github contributions</p>
          </div>
        </div>
      </div>
      <div className="blank-container"></div>
      {/* RESUME */}
      <div className="container">
        <h1>RESUME</h1>
        <div className="underline"></div>
        <div className="content-container">

          <Resume
            period="2020.03 - 재학 중"
            title="UOS ECE"
            description1="Electrical and Computer Engineering major at the University of Seoul"
            description2="서울시립대 전자전기컴퓨터공학부 전공"
            activitys={[]} />

          <Resume
            period="2023.10 - 2024.02"
            title="QUIPU DEV 1기"
            description1="서울시립대학교 중앙 컴퓨터 학술 동아리 QUIPU의 개발소모임"
            description2="QUIPU의 메인 웹 개발"
            activitys={["디자인, 프론트엔드, 백엔드 팀에 적극적으로 의견을 내며 총괄 관리하였습니다.", "전체적인 웹 방향성 및 구성 등을 기획하였습니다.", "React.js와 Three.js를 사용하여 프론트엔드를 개발하였습니다."]} />

          <Resume
            period="2024.03 - 진행 중"
            title="QUIPU DEV 2기"
            description1="서울시립대학교 중앙 컴퓨터 학술 동아리 QUIPU의 개발소모임"
            description2="QUIPU의 포럼 웹 개발"
            activitys={[]} />

        </div>
        <div className="blank-container"></div>

      </div>
    </Element>
  );
}

export default ABOUT;


function SkillBar(props) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div className="skillBar"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.5 }}>
      <div className="head">
        <p>{props.title}</p>
      </div>
      <div className="body">
        <div className="percentBar" style={{ width: `${props.percent}%` }}>
        </div>
        <p>{props.percent}%</p>
      </div>
    </motion.div>
  )
}

function Resume(props) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div className="resume-block"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.5 }}>
      <div className="resume-img">
        <img src="./icon/경력.png"></img>
      </div>
      <div className="resume-content">
        <h4>{props.period}</h4>
        <h2>{props.title}</h2>
        <p>{props.description1}</p>
        <p style={{ fontWeight: '700' }}>{props.description2}</p>
        <h4>주요 활동</h4>
        {
          props.activitys.map(function (activity, index) {
            return (
              <p>- {activity}</p>
            )
          })
        }
      </div>
    </motion.div>
  )
}