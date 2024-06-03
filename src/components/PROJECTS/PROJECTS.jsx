import React, { useState } from 'react';
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

          {/* QUIPU-DEV */}
          <div className="project-category">
            <h1>QUIPU-DEV</h1>
            <div></div>
            <p>서울시립대학교 컴퓨터 학술 중앙동아리에서 웹개발 팀을 구성하였습니다.</p>
            <p>동아리 <span style={{ fontWeight: '900' }}>니즈</span>를 찾아 만든 작업물입니다.</p>
          </div>

          <Project
            title="QUIPU Main Web"
            period="2023.10 - 2024.02"
            goal="동아리 소개 및 부원 모집 시스템 구축을 목적으로 하였습니다. 웹 개발 작업물들에 대한 피드백에 따른 History를 담는 프로젝트 쇼케이스를 표현합니다."
            part="부분적인 디자인과 전반적인 기획 및 프론트엔드 개발과 유지보수를 하였습니다."
            skillList={["React.js", "Three.js", "Figma"]}
            img="./img/project/퀴푸메인웹.png"
            link="https://quipu-developers.github.io/quipu-main-frontend/"
            github="https://github.com/Quipu-Developers/quipu-main-frontend"
          />

          {/* personal */}
          <div className="project-category">
            <h1>PERSONAL</h1>
            <div></div>
            <p><span style={{ fontWeight: '900' }}>개성</span>을 표현하는 개인적인 작업물입니다.</p>
          </div>

          <Project
            title="Portfolio Web"
            period="2024.02 - 2024.02"
            goal="저를 소개하기 위한 웹 페이지입니다. 피드백을 반영하며 퍼블리싱 실력 변화를 비교하는 것을 목적으로 하였습니다."
            part="전반적인 기획과 디자인 그리고 프론트엔드를 개발하였습니다."
            skillList={["React.js", "Three.js"]}
            img="./img/project/포트폴리오1.png"
            link="https://yena.info/"
            github="https://github.com/YenaLey/portfolio"
            reverse
          />

          <Project
            title="Luxo 램프 인터랙티브 시뮬레이션"
            period="2023.09 - 2023.10"
            goal="Three.js를 활용하여 인터랙티브한 시뮬레이션 기능을 적용시켜 보는 것을 목적으로 하였습니다."
            part="시뮬레이션 기능에 대한 기획과 구현을 하였습니다"
            skillList={["Three.js"]}
            img="./img/project/컴퓨터그래픽스프젝2.png"
            link="https://yenaley.github.io/computer-graphics/"
          />

        </div>
        <div className="blank-container"></div>
        <div className="blank-container"></div>
      </div>

      <div className="container">
        <div className="blank-container"></div>
        <h1>SIDE PROJECTS</h1>
        <div className="underline"></div>
        <div className="content-container sideProject">
          <SideProject
            img="./img/project/기획.jpg"
            title="기획 및 디자인"
            description="전체적인 프로세스를 이해하고 적극적으로 아이디어를 내기 위해 기획과 디자인을 공부하고 있습니다."
          />
          <SideProject
            img="./img/project/외주.png"
            title="외주"
            description="다양한 문제 상황을 경험하고 기술 역량을 넓히기 위해 FE 개발 분야에서 외주 작업을 진행하고 있습니다."
          />
          <SideProject
            img="./img/project/스터디2.jpg"
            title="세미나"
            description="FE 개발 지식을 공유하고 피드백을 받기 위해 FE 개발 관련 세미나를 열고 있습니다."
          />
          <SideProject
            img="./img/project/코딩테스트스터디.jpg"
            title="스터디"
            description="코딩을 지치지 않고 꾸준히 하는 습관을 들이기 위해 여러 사람들과 스터디를 하고 있습니다."
          />
          <SideProject
            img="./img/project/스터디3.jpg"
            title="코드 리뷰"
            description="여러 사람과 코드 리뷰를 통해 같은 기능에 대한 여러 코드를 경험하고 있습니다."
          />
          <SideProject
            img="./img/project/예대발표.jpg"
            title="리더"
            description="컴퓨터 동아리를 이끌며 다양한 프로젝트를 기획하고 진행하며 겪을 수 있는 문제 상황과 책임을 경험하고 있습니다."
          />
        </div>
        <div className="blank-container"></div>
        <div className="blank-container"></div>
        <div className="blank-container"></div>
      </div>

      <div className="container">
        <div className="blank-container"></div>
        <h1>WHY CHOOSE ME</h1>
        <div className="underline"></div>
        <div className="content-container">

          <Choose
            title="강한 추진력"
            description="재빠른 실행력으로 아이디어를 신속히 현실에 반영합니다. 우선순위 설정을 통해, 목표를 정확하고 빠르게 달성합니다."
            img1="./img/icon/추진력.png"
            img2="./img/icon/추진력2.png" />

          <Choose
            title="적극적인 커뮤니케이션"
            description="투명하고 적극적인 소통으로 팀워크를 강화하고, 프로젝트의 비전을 모두와 공유합니다."
            img1="./img/icon/커뮤니케이션.png"
            img2="./img/icon/커뮤니케이션2.png"
            reverse />

          <Choose
            title="빠른 작업"
            description="새로운 기술 습득이 빠르며, 배운 내용을 실제 작업에 즉각적으로 적용함으로써 프로젝트를 신속하게 전진시킵니다."
            img1="./img/icon/작업.png"
            img2="./img/icon/작업2.png" />

          <Choose
            title="높은 신뢰성"
            description="맡겨진 일에 대한 높은 책임감을 바탕으로, 약속된 기한과 품질을 엄격히 지키며 일합니다."
            img1="./img/icon/신뢰성.png"
            img2="./img/icon/신뢰성2.png"
            reverse />

        </div>
        <div className="blank-container"></div>
      </div>
    </Element>
  );
}

export default PROJECTS;

function Project({img, period, title, goal, part, skillList, link, github, notion, reverse}) {

  return (
    <div className={reverse ? "project-block" : "project-block-reverse"}>
      <div className="laptop">
        <div className="laptop-img">
          <img src={img}></img>
        </div>
        <div className="keyboard">
          <div className="keyboard-top"></div>
          <div className="keyboard-bottom"></div>
        </div>
      </div>
      <div className="project-content">
        <p>{period}</p>
        <h2>{title}</h2>
        <p><span style={{fontWeight: '700', color: '#ffc900', fontSize: '20px'}}>Goal. </span>{goal}</p>
        <p><span style={{fontWeight: '700', color: '#ffc900', fontSize: '20px'}}>Part. </span>{part}</p>
        <div className="project-skill-container">
          {
            skillList &&
            skillList.map(function (skill) {
              return (
                <div className="project-skill">{skill}</div>
              )
            })
          }
        </div>
        <div className="icon-container">
          {link && (
            <a href={link} target="_blank">
              <div className="icon">
                <img src="./img/icon/링크아이콘.png" alt="Link Icon"></img>
              </div>
            </a>
          )}
          {github && (
            <a href={github} target="_blank">
              <div className="icon">
                <img src="./img/icon/깃허브아이콘.png" alt="GitHub Icon"></img>
              </div>
            </a>
          )}
          {notion && (
            <a href={notion} target="_blank">
              <div className="icon">
                <img src="./img/icon/기록아이콘.png" alt="Notion Icon"></img>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function SideProject(props) {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 50 },
  };

  const textSlideVariants = {
    hover: { y: 0, opacity: 1 },
    initial: { y: 50, opacity: 0 },
  };

  return (
    <motion.div className="sideProject-block"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <img src={props.img}></img>
      <motion.div className="sideProject-description"
        variants={textSlideVariants}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </motion.div>
    </motion.div>
  );
}

function Choose({title, description, img1, img2, reverse}) {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <motion.div className={reverse ? "choose-block" : "choose-block reverse"}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}>
      <div className="img">
        <img className="before" src={img1}></img>
        <img className="after" src={img2}></img>
      </div>
      <div className={reverse ? "description" : "description reverse"}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </motion.div>
  )
}