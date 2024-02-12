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
      <div id="whitesmoke" className="container">
        <h1>ABOUT ME</h1>
        <div className="underline"></div>
        <div className="content-container">
          <motion.div className="profile-img"
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5 }}>
            <img src="./free-icon-shoes-742704.png"></img>
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
      <div className="container">
        <h1>RESUME</h1>
        <div className="underline"></div>
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