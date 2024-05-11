import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "./ABOUT.css";

function ABOUT() {

  return (
    <Element name="about">
      {/* ABOUT ME */}
      <div className="container">
        <div className="blank-container"></div>
        <h1>ABOUT ME</h1>
        <div className="underline"></div>
        <div className="content-container">
          <div className="profile-img">
            <img src="./img/프로필.jpg"></img>
          </div>
          <div id="whitesmoke" className="about-content">
            <div className="pencil"></div>
            <h1>Hello, I am <span className="name">이예나</span></h1>
            <h2>Front-End 개발자</h2>
            <p>말보다 행동으로 먼저 나아가며, 꿈을 현실로 만들어내는 추진력이 강한 개발자입니다. 인터랙티브 디자인에 큰 관심을 가지고 있으며, 사용자에게 매력적이면서도 실용적인 인터랙션 경험을 제공하기 위해 끊임없이 노력하고 있습니다. 프론트엔드 개발에 주력하고 있으며, 팀 내 원활한 협업과 직접적인 의견 반영을 위해 기획, 디자인, 백엔드 분야에도 지속적으로 관심을 가지고 학습하고 있습니다.</p>
            <div className="about-content--bottom">
              <p>Address: </p><span>서울시립대학교 학생회관 342호</span>
              <p>Email: </p><span>yena.e121@gmail.com</span>
              <p>Instagram: </p><span><a href="https://www.instagram.com/2ye._na/" target="_blank">2ye._na</a></span>
              <p>Github: </p><span><a href="https://github.com/YenaLey" target="_blank">YenaLey</a></span>
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
          <SkillBar title="CSS3" percent={80} />
          <SkillBar title="TypeScript" percent={60} />
          <SkillBar title="React.js" percent={80} />
          <SkillBar title="Next.js" percent={60} />
          <SkillBar title="Python" percent={70} />
          <SkillBar title="C" percent={60} />
        </div>
      </div>
      <div id="whitesmoke" className="blank-container"></div>
      {/* count */}
      <div className="container" style={{ backgroundColor: "black" }}>
        <div className="content-container">
          <div className="blank-container"></div>
          <Count countNum={207} title="coding days" />
          <Count countNum={5} title="projects completed" />
          <Count countNum={386} title="github contributions" />
          <div className="blank-container"></div>
        </div>
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
            description="서울시립대 전자전기컴퓨터공학부 전공"
            activitys={["하드웨어 제어 및 설계 기술을 배우는 전자전기공학", "소프트웨어에 대해 배우는 컴퓨터공학"]}
            projects={[]}
            />

          <Resume
            header="Career"
            period="2023.10 - 진행 중"
            title="QUIPU-DEV"
            description="서울시립대학교 중앙 컴퓨터 학술 동아리 퀴푸의 웹 개발팀"
            activitys={["React.js 기반의 프론트엔드 웹 개발 총괄", "전반적인 웹 페이지 관리 및 기획과 디자인"]} 
            projects={["메인 웹 사이트"]}
            />

          <Resume
            header="Career"
            period="2023.05 - 진행 중"
            title="Cluster23"
            description="서울시립대학교 웹 개발 소모임"
            activitys={["Next.js 기반의 프론트엔드 웹 개발", "웹 기획과 웹 디자인"]} 
            projects={[]}
            />

        </div>
        <div className="blank-container"></div>
        <div className="blank-container"></div>
      </div>
    </Element>
  );
}

export default ABOUT;

function SkillBar({ title, percent }) {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <motion.div className="skillBar"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ y: -5 }}
      variants={variants}>
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
    </motion.div>
  );
}

function Count({ countNum, title }) {

  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start(i => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      }));
      let start = 0;
      const end = countNum;
      if (start === end) return;

      let totalMilSecDur = 3000;
      let delay = totalMilSecDur / end;

      let interval = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(interval);
      }, delay);
    }
  }, [inView, countNum, controls]);

  return (
    <motion.div className="count-box"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}>
      <h1>{count} +</h1>
      <div className="underline" style={{ width: "100px", height: "1px", margin: "5px 0", backgroundColor: "white" }}></div>
      <p>{title}</p>
    </motion.div>
  )
}

function Resume(props) {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <motion.div className="resume-content"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ x: -5 }}
      variants={variants}>
      <div class="resume-header">
        <div className="resume-header-text">
          <p>{props.header}</p>
        </div>
      </div>
      <div class="resume-header-tip-left"></div>
      <div class="resume-header-tip-right"></div>
      <h4>{props.period}</h4>
      <h2>{props.title}</h2>
      <p style={{ color: 'grey' }}>{props.description}</p>
      {
        props.activitys.map(function (activity, index) {
          return (
            <p><span>🎤</span> {activity}</p>
          )
        })
      }
      {
        props.projects.map(function (project, index) {
          return (
            <p><span style={{ fontWeight: '900', fontSize: '17px' }}>🫧</span> {project}</p>
          )
        })
      }
    </motion.div>
  )
}