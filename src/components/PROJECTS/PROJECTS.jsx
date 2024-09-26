import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./PROJECTS.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";

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
            <p>
              서울시립대학교 컴퓨터 학술 중앙동아리에서 웹개발 팀을 결성하여,
              <span style={{ fontWeight: "900" }}>
                &nbsp;새로운 도전과 성취
              </span>
              를 이루고 있습니다.
            </p>
          </div>

          <Project
            title="QUIPU Main Web"
            period="2024.01 - 2024.08"
            goal="동아리 소개 및 부원 모집 시스템 구축 그리고 다양한 이벤트를 진행하며 동아리를 홍보하고자 하였습니다. 웹 개발 작업물들에 대한 피드백에 따른 History를 담는 프로젝트 쇼케이스를 포함합니다."
            part="전체적인 기획과 디자인, 그리고 프론트엔드 개발을 담당하였습니다. GitHub Actions를 활용하여 CI/CD 파이프라인을 구축 및 관리하여 배포 프로세스를 자동화하고 있습니다."
            skillList={["Figma", "React.js", "Three.js", "GitHub"]}
            img={[
              "./img/project/퀴푸메인웹1.png",
              "./img/project/퀴푸메인웹2.png",
              "./img/project/퀴푸메인웹3.png",
            ]}
            link="https://quipu.uos.ac.kr/"
            figma="https://www.figma.com/design/Is4NkQmdc6bAGJrkVLzomp/QUIPU-DESIGN?node-id=584-2&t=guuCcvCqichRqJLe-1"
            github={["https://github.com/Quipu-Developers/main-frontend"]}
          />

          <Project
            title="QUIPU Roulette Event"
            period="2024.08"
            goal="서울시립대학교 학부생들을 대상으로 동아리를 홍보하기 위해 랜덤 선물 뽑기 이벤트를 진행했습니다."
            part="이벤트의 전체 기획과 디자인, 프론트엔드 개발을 담당했습니다. 중복 참여와 의도적인 결과 화면 접속으로 인한 문제를 방지하고, 튕김 발생 시 같은 결과 화면에 재접속할 수 있도록 하는 등 많은 사람들이 참여하며 발생할 수 있는 에러들을 방지하고자 하였습니다."
            skillList={["Figma", "React.js", "GitHub"]}
            img={[
              "./img/project/룰렛이벤트.jpeg",
              "./img/project/룰렛이벤트.mp4",
            ]}
            figma="https://www.figma.com/design/Is4NkQmdc6bAGJrkVLzomp/QUIPU-DESIGN?node-id=584-2&t=guuCcvCqichRqJLe-1"
            github={["https://github.com/Quipu-Developers/main-frontend"]}
            reverse
          />

          <Project
            title="QUIPU BackOffice Web"
            period="2024.07 - 2024.08"
            goal="동아리 지원 정보를 실시간으로 편리하게 모니터링하기 위해 동아리 어드민 웹페이지를 개발했습니다."
            part="전체적인 기획과 프론트엔드 개발을 담당했습니다. 퀴푸 메인 웹의 지원 폼을 통해 제출된 내용을 실시간으로 불러오며, 단축키를 통해 특정 내용 복사 및 모달 컨트롤을 효율적으로 할 수 있습니다. 지원자의 이름, 학번, 모집 동기, 포트폴리오 PDF 등의 정보를 포함하며, PDF 제목을 클릭하면 해당 파일을 요청 후 로컬로 다운로드할 수 있습니다. 또한, 실시간으로 불러온 데이터를 Excel 파일로 다운로드할 수 있습니다."
            skillList={["React.js", "GitHub"]}
            img={[
              "./img/project/퀴푸백오피스1.png",
              "./img/project/퀴푸백오피스2.png",
            ]}
            link="https://quipu-developers.github.io/backoffice-frontend"
            github={["https://github.com/Quipu-Developers/backoffice-frontend"]}
          />

          <Project
            title="LingoConnect"
            period="2024.07 - 2024.08"
            goal="지적장애인을 위한 생성형 AI를 통해 현실감 있는 음성 대화 및 발음 분석과 피드백을 통한 언어학습을 지원하는 서비스입니다."
            part="기획과 프론트엔드 개발을 담당하였습니다. REST API를 활용한 백엔드 연동을 주로 담당하였고, STT(음성 인식)와 TTS(텍스트 음성 변환) 기능을 구현했습니다. 클라이언트에서 녹음된 음성을 WAV 파일로 변환해 백엔드로 전송하고, 백엔드에서 받은 데이터를 실시간으로 처리하여 사용자 인터페이스에 반영했습니다."
            skillList={["React.js", "GitHub"]}
            img={[
              "./img/project/링고커넥트.png",
              "./img/project/링고커넥트1.mp4",
              "./img/project/링고커넥트2.mp4",
              "./img/project/링고커넥트3.mp4",
            ]}
            figma="https://www.figma.com/design/gqZCozFYBEP1Yu1ThoLvMm/%EC%83%88%EC%8B%B9%ED%95%B4%EC%BB%A4%ED%86%A4?node-id=0-1&node-type=CANVAS&t=tEpvjrnibh7V53rN-0"
            github={["https://github.com/LingoConnect/LingoConnect"]}
            reverse
          />

          <Project
            title="배틀글라운드"
            period="2024.07 - 2024.09"
            goal="웹소켓를 이용한 멀티플레이어 타자 웹게임으로 대학교 축제 부스에서 사용하는 것을 목표로 하였습니다."
            part="기획, 디자인과 프론트엔드, 백엔드 개발을 담당하였습니다. WebSocket을 사용한 멀티플레이어 게임으로 멀티룸 구조를 만들고 각 방에서 실시간 채팅 및 타자 게임을 진행합니다. 같은 단어장을 공유하며 플레이어가 제출한 단어는 모든 플레이어의 화면에서 사라지고, 실시간으로 플레이어들의 점수와 등수가 표시됩니다. 대학교 동아리 축제 부스에서 약 70명의 사용자가 참여를 하며 발생한 버그들과 사용자 경험에 대한 조언을 들을 수 있었습니다."
            skillList={["React.js", "Node.js", "GitHub"]}
            img={[
              "./img/project/배틀글라운드1.jpeg",
              "./img/project/배틀글라운드2.mp4",
            ]}
            github={[
              "https://github.com/Quipu-Developers/game-frontend",
              "https://github.com/Quipu-Developers/game-backend",
            ]}
          />

          {/* personal */}
          <div className="project-category">
            <h1>PERSONAL</h1>
            <div></div>
            <p>
              <span style={{ fontWeight: "900" }}>개성</span>을 표현하는
              개인적인 작업물입니다.
            </p>
          </div>

          <Project
            title="Portfolio Web"
            period="2024.02 -"
            goal="개발 공부를 하며 나아가고자 하는 방향성을 표현하고, 참여한 프로젝트들에 대한 기록을 남기기 위한 개인 웹사이트를 제작하였습니다."
            part="웹사이트의 전체 기획, 디자인, 그리고 프론트엔드 개발을 담당하였습니다. 사용자가 쉽게 탐색할 수 있도록 직관적인 UI/UX를 설계하고, 반응형 디자인을 적용하여 다양한 디바이스에서 최적의 경험을 제공하였습니다. 또한, 참여한 프로젝트를 효과적으로 보여줄 수 있는 기능들을 구현하여, 개발자로서의 성장과 성과를 기록할 수 있는 플랫폼을 구현하고자 하였습니다."
            skillList={["React.js", "Three.js"]}
            img={["./img/project/포트폴리오1.png"]}
            link="https://yena.info/"
            github={["https://github.com/YenaLey/portfolio"]}
            reverse
          />

          <Project
            title="Luxo 램프 인터랙티브 시뮬레이션"
            period="2023.09 - 2023.10"
            goal="Three.js에 입문하기 위한 프로젝트로, Luxo 램프의 인터랙티브한 시뮬레이션 기능을 구현하였습니다."
            part="시뮬레이션 기능의 기획과 전체 구현을 담당하였습니다. Luxo 램프의 각 부분을 모듈화하여 3D 모델링하고, GUI를 통해 램프의 관절과 조명을 제어할 수 있는 기능을 구현했습니다. 또한, 사용자 입력에 따라 실시간으로 변화를 반영하는 렌더링과 조명 효과를 포함한 물리 기반의 시뮬레이션을 구현하였습니다."
            skillList={["Three.js", "Vanilla JS"]}
            img={["./img/project/컴퓨터그래픽스프젝2.png"]}
            link="https://yenaley.github.io/Luxo-Interactive-Simulation/"
            github={["https://github.com/YenaLey/Luxo-Interactive-Simulation"]}
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
            img2="./img/icon/추진력2.png"
          />

          <Choose
            title="적극적인 커뮤니케이션"
            description="투명하고 적극적인 소통으로 팀워크를 강화하고, 프로젝트의 비전을 모두와 공유합니다."
            img1="./img/icon/커뮤니케이션.png"
            img2="./img/icon/커뮤니케이션2.png"
            reverse
          />

          <Choose
            title="빠른 작업"
            description="새로운 기술 습득이 빠르며, 배운 내용을 실제 작업에 즉각적으로 적용함으로써 프로젝트를 신속하게 전진시킵니다."
            img1="./img/icon/작업.png"
            img2="./img/icon/작업2.png"
          />

          <Choose
            title="높은 신뢰성"
            description="맡겨진 일에 대한 높은 책임감을 바탕으로, 약속된 기한과 품질을 엄격히 지키며 일합니다."
            img1="./img/icon/신뢰성.png"
            img2="./img/icon/신뢰성2.png"
            reverse
          />
        </div>
        <div className="blank-container"></div>
      </div>
    </Element>
  );
}

export default PROJECTS;

function Project({
  img,
  period,
  title,
  goal,
  part,
  skillList,
  link,
  figma,
  github,
  reverse,
}) {
  const [imgIndex, setImgIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    if (!inView) {
      setImgIndex(0);
    }
  }, [inView]);

  const renderMedia = (src, index) => {
    const fileExtension = src.split(".").pop().toLowerCase();
    const uniqueKey = `media-${index}`;

    if (
      fileExtension === "mp4" ||
      fileExtension === "webm" ||
      fileExtension === "ogg"
    ) {
      return (
        <motion.video
          key={uniqueKey}
          controls
          preload="auto"
          crossorigin="anonymous"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
        >
          <source src={src} type={`video/${fileExtension}`} />
          <track
            src="path/to/captions.vtt"
            kind="captions"
            srclang="en"
            label="English"
            default
          />
          Your browser does not support the video tag.
        </motion.video>
      );
    } else {
      return (
        <motion.img
          key={uniqueKey}
          src={src}
          alt="프로젝트 사진"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
        />
      );
    }
  };

  return (
    <div
      ref={ref}
      className={reverse ? "project-block" : "project-block-reverse"}
    >
      <div className="laptop">
        {imgIndex > 0 && (
          <div
            className="project-img-button"
            onClick={() => setImgIndex(imgIndex - 1)}
          >
            <IoMdArrowRoundBack />
          </div>
        )}
        {imgIndex < img.length - 1 && (
          <div
            className="project-img-button right"
            onClick={() => setImgIndex(imgIndex + 1)}
          >
            <IoMdArrowRoundForward />
          </div>
        )}
        <div className="laptop-img">
          <AnimatePresence initial={false}>
            {renderMedia(img[imgIndex], imgIndex)}
          </AnimatePresence>
        </div>
        <div className="keyboard">
          <div className="keyboard-top"></div>
          <div className="keyboard-bottom"></div>
        </div>
      </div>
      <div className="project-content">
        <p>{period}</p>
        <h2>{title}</h2>
        <p>
          <span
            style={{ fontWeight: "700", color: "#ffc900", fontSize: "20px" }}
          >
            Goal.{" "}
          </span>
          {goal}
        </p>
        <p>
          <span
            style={{ fontWeight: "700", color: "#ffc900", fontSize: "20px" }}
          >
            Part.{" "}
          </span>
          {part}
        </p>
        <div className="project-skill-container">
          {skillList &&
            skillList.map((skill, index) => (
              <div key={index} className="project-skill">
                {skill}
              </div>
            ))}
        </div>
        <div className="icon-container">
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <div className="icon">
                <img src="./img/icon/링크아이콘.png" alt="Link Icon"></img>
              </div>
            </a>
          )}
          {figma && (
            <a href={figma} target="_blank" rel="noopener noreferrer">
              <div className="icon">
                <img src="./img/icon/피그마아이콘.png" alt="Figma Icon"></img>
              </div>
            </a>
          )}
          {github &&
            github.map((element, index) => (
              <a
                key={index}
                href={element}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icon">
                  <img src="./img/icon/깃허브아이콘.png" alt="GitHub Icon" />
                </div>
              </a>
            ))}
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
    <motion.div
      className="sideProject-block"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={props.img} alt="사이드프로젝트 사진"></img>
      <motion.div
        className="sideProject-description"
        variants={textSlideVariants}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
      >
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </motion.div>
    </motion.div>
  );
}

function Choose({ title, description, img1, img2, reverse }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <motion.div
      className={reverse ? "choose-block" : "choose-block reverse"}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      <div className="img">
        <img className="before" src={img1} alt="키워드 이미지1"></img>
        <img className="after" src={img2} alt="키워드 이미지1"></img>
      </div>
      <div className={reverse ? "description" : "description reverse"}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </motion.div>
  );
}
