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

          <Project2
            role="웹 기획 및 디자인, 프론트엔드 개발"
            title="Portfolio Web"
            period="2024.02 - 2024.02"
            description="전체적인 기획과 디자인, 프론트엔드 개발까지 포괄하는 웹 개발 프로젝트입니다. 정보 구조(IA) 및 각 섹션별 상세 정보가 포함된 기획서를 작성하였으며, 다양한 포트폴리오 레퍼런스를 참고하여 디자인하였습니다. 이 웹사이트는 React.js를 기반으로 구축되었으며, 홈페이지의 PC 버전에서는 React Three Fiber를 사용하여 소개 멘트가 동적으로 변화하도록 구현하여 사용자 경험에 생동감을 더했습니다. 사용자 인터랙션에 부드러운 모션이 포함되어 있으며, 진부하지 않은 디자인을 목표로 하면서도 메시지의 전달력을 유지하는 데 중점을 두었습니다."
            img="./img/project/포트폴리오1.png"
            link="https://yena.info/"
            github="https://github.com/YenaLey/portfolio"
          />

          {/* <Project1
            role="웹 기획, 웹 디자인, 프론트엔드 개발"
            title="QUIPU Main Web"
            period="2023.10 - 2024.02"
            description="서울시립대 중앙동아리 퀴푸의 동아리 홍보와 신입 회원 모집을 목적으로 한 웹사이트 프로젝트의 리더로서, 웹 기획부터 디자인, 프론트엔드 개발까지 전반적인 작업을 주도했습니다. Figma를 사용해 'home'과 'about' 페이지를 구현하고, React.js 기반의 웹사이트의 레이아웃, 라우팅, 네비게이션 바를 개발했습니다. React.js와 React Three Fiber를 사용하여 'home', 'about', 'activity', 'activity detail' 섹션에 동적인 3D 요소와 인터랙션을 추가함으로써, 시각적으로 매력적인 경험을 제공하였고, 반응형 디자인을 적용해 다양한 디바이스에서의 접근성을 보장하도록 개발하였습니다. 팀원들과의 긴밀한 협업으로 성공적으로 런칭할 수 있었습니다."
            img="./img/project/퀴푸메인웹.png"
            link="https://front-end-zeta-five.vercel.app/"
            github="https://github.com/YenaLey"
            notion="https://quipu-dev.notion.site/quipu-dev/main-website-c8661a4633804bfdaadb105c86d2df1e" /> */}

          <Project1
            role="3D 그래픽스 프로그래밍"
            title="Three.js 기반 Luxo 램프 인터랙티브 시뮬레이션"
            period="2023.09 - 2023.10"
            description="Three.js을 활용하여 Luxo 램프의 인터랙티브 3D 시뮬레이션을 개발했습니다. 램프의 조절 가능한 부품들을 모델링하고, 스포트라이트 조명 효과를 추가하여 벽에 그림자를 생성하는 3D 모델을 장면에 배치했습니다. 사용자가 램프의 길이, 조인트 각도, 램프 각도를 쉽게 조절할 수 있는 GUI 제어 패널을 구현함으로써, 실시간으로 램프의 모양 변경이 가능하게 했습니다. 이를 통해, three.js 기반 웹 애플리케이션에서 사용자는 다양한 조명 및 그림자 효과를 경험할 수 있도록 개발하였습니다."
            img="./img/project/컴퓨터그래픽스프젝1.png"
            link="https://yenaley.github.io/computer-graphics/"
          />

          <Project2
            role="아두이노 기반 회로 설계 및 프로그래밍"
            title="아두이노와 LTspice를 이용한 디지털 멀티미터"
            period="2023.03 - 2023.06"
            description="LTspice로 모델링된 회로와 아두이노를 사용하여 디지털 멀티미터를 개발하였습니다. 아두이노의 아날로그 입력을 통해 전압을 측정하고, Opamp 기반 차동 증폭기를 통해 측정값을 정확하게 변환합니다. 측정 가능한 범위 설정하여 구현하였고 단위 자동 변환 기능을 포함해, 저항, 전압, 전류, 축전기 용량을 측정하고 이를 I2C LCD에 표시하도록 설계하였습니다."
            img="./img/project/전전설1프젝1.png"
          />

          <Project1
            role="FPGA 및 Verilog HDL을 사용한 설계 및 구현"
            title="XILINX FPGA를 활용한 수학 연산 계산기"
            period="2022.09 - 2022.12"
            description="XILINX 기반 FPGA를 활용하여 Verilog HDL 기반의 계산기 설계하였습니다. 덧셈, 뺄셈, 곱셈, 나눗셈, 거듭제곱, 팩토리얼의 기능을 포함하며, 사용자는 Push Button Switch로 숫자를 입력하고 Dip Switch로 연산자, 피연산자의 순서, 음수 표현을 설정할 수 있습니다. 계산 결과는 Clock 기반의 TEXT LCD, 음수 표현은 LED를 통해 표시되도록 하였습니다. 7-Segment Array와 PIEZO를 사용하여 사용자 인터페이스와 피드백 메커니즘을 구현했으며, Vivado 프로그램을 통한 설계와 시뮬레이션을 거쳐 최종적으로 FPGA 디지털 회로에서의 시연으로 프로젝트를 완성했습니다."
            img="./img/project/전전설2프젝1.jpg"
          />

        </div>
        <div className="blank-container"></div>
      </div>
      <div className="container">
        <div className="blank-container"></div>
        <h1>WHY CHOOSE ME</h1>
        <div className="underline"></div>
        <div className="content-container">

          <Choose1
            title="강한 추진력"
            description="재빠른 실행력으로 아이디어를 신속히 현실에 반영합니다. 우선순위 설정을 통해, 목표를 정확하고 빠르게 달성합니다."
            img1="./img/icon/추진력.png"
            img2="./img/icon/추진력2.png"></Choose1>

          <Choose2
            title="적극적인 커뮤니케이션"
            description="투명하고 적극적인 소통으로 팀워크를 강화하고, 프로젝트의 비전을 모두와 공유합니다."
            img1="./img/icon/커뮤니케이션.png"
            img2="./img/icon/커뮤니케이션2.png"></Choose2>

          <Choose1
            title="빠른 작업"
            description="새로운 기술 습득이 빠르며, 배운 내용을 실제 작업에 즉각적으로 적용함으로써 프로젝트를 신속하게 전진시킵니다."
            img1="./img/icon/작업.png"
            img2="./img/icon/작업2.png"></Choose1>

          <Choose2
            title="높은 신뢰성"
            description="맡겨진 일에 대한 높은 책임감을 바탕으로, 약속된 기한과 품질을 엄격히 지키며 일합니다."
            img1="./img/icon/신뢰성.png"
            img2="./img/icon/신뢰성2.png"></Choose2>

        </div>
        <div className="blank-container"></div>
      </div>
    </Element>
  );
}

export default PROJECTS;

function Project1(props) {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <div className="project-block">
      <motion.div className="laptop"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}>
        <div className="laptop-img">
          <img src={props.img}></img>
        </div>
        <div className="keyboard">
          <div className="keyboard-top"></div>
          <div className="keyboard-bottom"></div>
        </div>
      </motion.div>
      <motion.div className="project-content"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}>
        <p>{props.period}</p>
        <h3 style={{ fontWeight: '500' }}>{props.role}</h3>
        <h2 style={{ color: "#ffc900" }}>{props.title}</h2>
        <p>{props.description}</p>
        <div className="icon-container">
          {props.link && (
            <a href={props.link} target="_blank">
              <div className="icon">
                <img src="./img/icon/링크아이콘.png" alt="Link Icon"></img>
              </div>
            </a>
          )}
          {props.github && (
            <a href={props.github} target="_blank">
              <div className="icon">
                <img src="./img/icon/깃허브아이콘.png" alt="GitHub Icon"></img>
              </div>
            </a>
          )}
          {props.notion && (
            <a href={props.notion} target="_blank">
              <div className="icon">
                <img src="./img/icon/기록아이콘.png" alt="Notion Icon"></img>
              </div>
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}

function Project2(props) {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <div id="reverse" className="project-block">
      <motion.div className="project-content"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}>
        <p>{props.period}</p>
        <h3 style={{ fontWeight: '500' }}>{props.role}</h3>
        <h2 style={{ color: "#ffc900" }}>{props.title}</h2>
        <p>{props.description}</p>
        <div className="icon-container">
          {props.link && (
            <a href={props.link} target="_blank">
              <div className="icon">
                <img src="./img/icon/링크아이콘.png" alt="Link Icon"></img>
              </div>
            </a>
          )}
          {props.github && (
            <a href={props.github} target="_blank">
              <div className="icon">
                <img src="./img/icon/깃허브아이콘.png" alt="GitHub Icon"></img>
              </div>
            </a>
          )}
          {props.notion && (
            <a href={props.notion} target="_blank">
              <div className="icon">
                <img src="./img/icon/기록아이콘.png" alt="Notion Icon"></img>
              </div>
            </a>
          )}
        </div>
      </motion.div>
      <motion.div className="laptop"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}>
        <div className="laptop-img">
          <img src={props.img}></img>
        </div>
        <div className="keyboard">
          <div className="keyboard-top"></div>
          <div className="keyboard-bottom"></div>
        </div>
      </motion.div>
    </div>
  )
}

function Choose1(props) {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <motion.div className="choose-block" id="reverse"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}>
      <div className="description">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <div className="img">
        <img className="before" src={props.img1}></img>
        <img className="after" src={props.img2}></img>
      </div>
    </motion.div>
  )
}

function Choose2(props) {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <motion.div className="choose-block"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}>
      <div className="img">
        <img className="before" src={props.img1}></img>
        <img className="after" src={props.img2}></img>
      </div>
      <div className="description">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </motion.div>
  )
}