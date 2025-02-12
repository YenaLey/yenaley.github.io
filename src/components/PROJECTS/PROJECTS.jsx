import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./PROJECTS.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const mappingSkill = {
  react:
    "https://img.shields.io/badge/react-61DAFB.svg?&style=for-the-badge&logo=react&logoColor=white",
  nextjs:
    "https://img.shields.io/badge/next.js-000000.svg?&style=for-the-badge&logo=next.js&logoColor=white",
  javascript:
    "https://img.shields.io/badge/javascript-F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=white",
  typescript:
    "https://img.shields.io/badge/typescript-3178C6.svg?&style=for-the-badge&logo=typescript&logoColor=white",
  tailwindcss:
    "https://img.shields.io/badge/tailwindcss-06B6D4.svg?&style=for-the-badge&logo=tailwindcss&logoColor=white",
  styledcomponents:
    "https://img.shields.io/badge/styledcomponents-DB7093.svg?&style=for-the-badge&logo=styled-components&logoColor=white",
  zustand:
    "https://img.shields.io/badge/zustand-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  threejs:
    "https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white",
  webgl:
    "https://img.shields.io/badge/WebGL-990000?logo=webgl&logoColor=white&style=for-the-badge",
  socketio:
    "https://img.shields.io/badge/Socket.IO-010101?logo=socket.io&logoColor=white&style=for-the-badge",
};

function PROJECTS() {
  return (
    <Element name="projects">
      <div className="container">
        <div className="blank-container"></div>
        <h1>PROJECTS</h1>
        <div className="underline"></div>
        <div className="content-container">
          {/* QUIPU-DEV 카테고리 */}
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
            about="동아리 소개 및 지원 폼을 통한 새로운 회원 모집을 위한 웹 사이트"
            detail="동아리에서 진행하는 활동들을 연도별로 기록하고, 웹 개발 작업물에 대한 히스토리를 담는 쇼케이스를 포함합니다. 또 PDF 파일 업로드를 포함한 지원 폼을 통해 약 150명의 새로운 회원을 모집하였습니다."
            skillList={["react", "threejs"]}
            pointList={{
              "CI/CD 구현":
                "지원 폼의 ON/OFF 등 빈번한 수정마다 수동 배포의 번거로움을 해결하기 위해, Main 브랜치에 코드를 올리면 GitHub Actions에 의해 코드 검토 후 자동으로 배포되도록 CI/CD 파이프라인을 구축했습니다.",
              "성능 최적화":
                "React Developer Tools를 활용해 컴포넌트별 렌더링 시간을 분석하고, 성능 최적화가 되지 않았던 Three.js 기반의 3D 모델을 React Three Fiber로 전환하여 웹사이트의 전반적인 버퍼링 문제를 해결했습니다.",
            }}
            img={[
              "https://lh3.google.com/u/0/d/1wQSaRVkdLhAreBFfn7a-9qymU1Vie2Kb=w2880-h1576-iv2",
              "https://lh3.google.com/u/0/d/1e2Ck4Bf1EnWEJFefSA8Suq-HIoB0wnmj=w2082-h1576-iv2",
              "https://lh3.google.com/u/0/d/1mNKcMGnDX2jUJI0q9GoyD_GArMe1sUuj=w2082-h1576-iv2",
            ]}
            memo="https://yenaley.notion.site/Articket-1534cc4362cb80419a23c06516392cce"
            github={["https://github.com/Quipu-Developers/24_2_main"]}
            link="https://quipu.uos.ac.kr/"
          />

          <Project
            title="QUIPU Roulette Event"
            period="2024.08"
            about="동아리를 홍보하기 위한 랜덤 선물 뽑기 이벤트"
            detail="퀴즈를 맞히면 남은 상품에 대해 룰렛을 돌려 랜덤으로 상품을 제공합니다. 중복 참여와 의도적인 결과 화면 접속으로 인한 문제를 방지하고, 튕김 발생 시 같은 결과 화면에 재접속할 수 있도록 하는 등 많은 사람들이 참여하며 발생할 수 있는 에러들을 방지하고자 하였습니다."
            skillList={["react"]}
            img={[
              "https://lh3.google.com/u/0/d/1NSWfT8HHMUM0Jb1_eBInqvGjO9NUES8i=w2082-h1576-iv2",
              "https://drive.google.com/file/d/1DZscoD0b-kPcFIAvVveHcuMIrrkIT8Wv/preview",
            ]}
            memo="https://yenaley.notion.site/Articket-1534cc4362cb80419a23c06516392cce"
            github={["https://github.com/Quipu-Developers/24_2_main"]}
            reverse
          />

          <Project
            title="QUIPU BackOffice Web"
            period="2024.07 - 2024.08"
            about="동아리 지원 정보가 실시간 동기화되는 백오피스 웹 페이지"
            detail="퀴푸 메인 웹의 지원 폼을 통해 제출된 내용을 실시간으로 불러오며, 단축키를 통해 특정 내용 복사 및 모달 컨트롤을 효율적으로 할 수 있습니다. 지원자의 이름, 학번, 모집 동기, 포트폴리오 PDF 등의 정보를 포함하며, PDF 제목을 클릭하면 해당 파일을 요청 후 로컬로 다운로드할 수 있습니다. 또한, 실시간으로 불러온 데이터를 Excel 파일로 다운로드할 수 있습니다."
            skillList={["react"]}
            img={[
              "https://lh3.google.com/u/0/d/1D7tGOJVIbTo6W8YIfLnXLN7rmdlX8HOx=w2082-h1576-iv2",
              "https://lh3.google.com/u/0/d/1FEaAVwNjFZGslqhAu1vyjw1o0r5CBYj-=w2082-h1576-iv2",
            ]}
            memo="https://yenaley.notion.site/Articket-1534cc4362cb80419a23c06516392cce"
            github={["https://github.com/Quipu-Developers/backoffice-frontend"]}
            link="https://quipu-developers.github.io/backoffice-frontend"
          />

          <Project
            title="LingoConnect"
            period="2024.07 - 2024.08"
            about="지적장애인을 위한 생성형 AI 기반의 언어 학습 서비스"
            detail="생성형 AI를 활용하여 현실감 있는 음성 대화를 제공하고, 대화 흐름과 발음에 대한 분석과 피드백을 제공합니다."
            skillList={["react"]}
            pointList={{
              "음성 녹음 및 노이즈 필터링":
                "디바이스 내장 마이크를 사용해 사용자의 음성을 녹음하고 WAV 파일로 변환하는 과정에서 발생하는 노이즈가 섞여들어가 STT 기능이 원활히 작동하지 않는 문제가 있었습니다. 이에 오디오 필터링 기술을 적용해고역 및 저역 필터링을 사용하여 노이즈를 제거하고, 사용자의 음성만을 정확히 추출하여 사용자 음성만 들어간 정확한 텍스트로 변환할 수 있었습니다.",
            }}
            img={[
              "https://lh3.google.com/u/0/d/1FOktPah0ISma9F4mGRRSV_mqhZ_Knevy=w2082-h1576-iv2",
              "https://drive.google.com/file/d/1Eb-LgTE7w0YpHA4xVZOjCBcjpKH_Ni7x/preview",
              "https://drive.google.com/file/d/1udV8pyO2ph0ZS017ZbQnc9aOODfD5p8s/preview",
              "https://drive.google.com/file/d/1hetoluF5wsGt-_0CD9YEgFI04FtOIIC1/preview",
            ]}
            memo="https://yenaley.notion.site/Articket-1534cc4362cb80419a23c06516392cce"
            github={["https://github.com/YenaLey/LingoConnect"]}
            reverse
          />

          <Project
            title="배틀글라운드"
            subtitle="멀티플레이어 타자 웹게임"
            period="2024.07 - 2024.09"
            about="웹소켓 기반의 멀티플레이어 타자 웹게임"
            detail="플레이어들은 생성된 방에 입장하거나 새로운 방을 만들 수 있으며, 최대 3명의 플레이어가 한 단어장을 두고 서로 단어를 차지하며 타자 대결을 펼칩니다. 수차례의 유저 테스트를 진행하며 발생할 수 있는 버그들에 대해 해결하였고, 70명의 사용자들을 대상으로 대학교 축제 부스를 운영하였습니다."
            skillList={["react", "socketio"]}
            pointList={{
              "소켓 재연결 문제 해결":
                "새로고침 시 소켓이 끊기면서 기존 유저와의 연결이 끊기는 문제를 해결했습니다. 새 소켓이 연결되었을 때 기존 사용자임을 인식하여, 이전에 있던 방에 다시 참가시키는 방식으로 처리했습니다.",
              "입력 이벤트 최적화":
                "일부 노트북에서 엔터 키 입력 시 단어가 중복 전송되어 점수가 2배씩 올라가는 문제가 발생하여, debounce를 사용해 이를 해결했습니다. 50밀리초의 지연 시간을 두어 같은 이벤트가 반복 실행되지 않도록 하고, 불필요한 서버 요청을 방지하여 한 번의 입력만 처리되도록 개선했습니다.",
            }}
            img={[
              "https://lh3.google.com/u/0/d/1oLwcq0haroaDSAEksXg6Qbc8VWuodaHu=w2880-h1576-iv3",
              "https://lh3.google.com/u/0/d/13yW7QVINrIqXmHlgqyaQ82pLDBSDsX2i=w2880-h1576-iv3",
              "https://lh3.google.com/u/0/d/1VuvxsjwaSYdhCU3koKBqPkVp0FfR0epB=w2082-h1576-iv3",
              "https://drive.google.com/file/d/1ONibm488c5rpUlaJmrWevXwwvfk4DOmZ/preview",
            ]}
            memo="https://yenaley.notion.site/Articket-1534cc4362cb80419a23c06516392cce"
            github={["https://github.com/Quipu-Developers/game-frontend"]}
          />

          {/* PERSONAL 카테고리 */}
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
            about="개발에 대한 방향성과 참여한 프로젝트들을 표현하기 위한 포트폴리오 웹 사이트"
            detail="사용자가 쉽게 탐색할 수 있도록 직관적인 UI/UX를 설계하고, 반응형 디자인을 적용하여 다양한 디바이스에서 최적의 경험을 제공하였습니다. 또한, 참여한 프로젝트를 효과적으로 보여줄 수 있는 기능들을 구현하여, 개발자로서의 성장과 성과를 기록할 수 있는 플랫폼을 구현하고자 하였습니다."
            skillList={["react", "threejs"]}
            img={[
              "https://lh3.google.com/u/0/d/1zfTgyxPCSnihaNdno8vfcpud5a_nSz46=w2082-h1576-iv2",
              "https://lh3.google.com/u/0/d/17OaulmmEYbhn2O4kzJPLCxCIkZrh1WU8=w2082-h1576-iv2",
              "https://lh3.google.com/u/0/d/1p-eTEYPDssPE07LU6pdicwPcchnyUrB1=w2082-h1576-iv2",
              "https://lh3.google.com/u/0/d/1X9NheafNaIkqXECZsBsKqTEby9-mM0AM=w2082-h1576-iv2",
            ]}
            memo="https://yenaley.notion.site/Articket-1534cc4362cb80419a23c06516392cce"
            github={["https://github.com/YenaLey/yenaley.github.io"]}
            link="https://yenaley.github.io/"
            reverse
          />

          <Project
            title="Luxo 램프 인터랙티브 시뮬레이션"
            period="2023.09 - 2023.10"
            about="Three.js 기반의 Luxo 램프 인터랙티브 시뮬레이션 웹 사이트"
            detail="Luxo 램프의 각 부분을 모듈화하여 3D 모델링하고, GUI를 통해 램프의 관절과 조명을 제어할 수 있는 기능을 구현했습니다. 또한, 사용자 입력에 따라 실시간으로 변화를 반영하는 렌더링과 조명 효과를 포함한 물리 기반의 시뮬레이션을 구현하였습니다."
            skillList={["threejs", "javascript"]}
            img={[
              "https://lh3.google.com/u/0/d/1pnkNSL1nknmfE5CvoUwL7rO0ELYZFfD2=w2082-h1576-iv2",
              "https://lh3.google.com/u/0/d/146lOVVgY-aPqmRTK3l0ZCGh7TY1d0Lw0=w2082-h1576-iv2",
            ]}
            memo="https://yenaley.notion.site/Articket-1534cc4362cb80419a23c06516392cce"
            github={["https://github.com/YenaLey/Luxo-Interactive-Simulation"]}
            link="https://yenaley.github.io/Luxo-Interactive-Simulation/"
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

// ─────────────────────────────────────────
// Project 컴포넌트
function Project({
  img,
  period,
  title,
  about,
  detail,
  skillList,
  pointList,
  link,
  memo,
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

  const handlePrev = () => {
    if (imgIndex > 0) {
      setImgIndex(imgIndex - 1);
    }
  };

  const handleNext = () => {
    if (imgIndex < img.length - 1) {
      setImgIndex(imgIndex + 1);
    }
  };

  const renderMediaContent = (src, index) => {
    const isDriveImage = src.includes("lh3.google.com");
    const isDriveVideo = src.includes("drive.google.com/file");

    if (isDriveImage) {
      return (
        <img
          key={`media-${index}`}
          src={src}
          alt={`project-image-${index}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      );
    }

    if (isDriveVideo) {
      return (
        <iframe
          key={`media-${index}`}
          id={`ucc-${index}`}
          src={src}
          width="100%"
          height="100%"
          objectFit="cover"
          allow="autoplay"
          title="Google Drive Video Player"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      );
    }

    return null;
  };

  return (
    <motion.div
      ref={ref}
      className={reverse ? "project-block" : "project-block-reverse"}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="laptop">
        {imgIndex > 0 && (
          <div className="project-img-button" onClick={handlePrev}>
            <IoIosArrowBack />
          </div>
        )}
        {imgIndex < img.length - 1 && (
          <div className="project-img-button right" onClick={handleNext}>
            <IoIosArrowForward />
          </div>
        )}
        <div
          className="laptop-img"
          style={{ position: "relative", overflow: "hidden" }}
        >
          {renderMediaContent(img[imgIndex], imgIndex)}
        </div>

        <div className="keyboard">
          <div className="keyboard-top"></div>
          <div className="keyboard-bottom"></div>
          <div className="dots-container">
            {img.map((item, index) => (
              <span
                key={index}
                className={`dot ${imgIndex === index ? "active" : ""}`}
                onClick={() => setImgIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>

      <div className="project-content">
        <p>{period}</p>
        <h2>{title}</h2>
        <p>
          <span
            style={{ fontWeight: "700", color: "#ffc900", fontSize: "20px" }}
          >
            About.{" "}
          </span>
          <span style={{ color: "black" }}>{about}</span>
        </p>
        <p>
          <span
            style={{ fontWeight: "700", color: "#ffc900", fontSize: "20px" }}
          >
            Detail.{" "}
          </span>
          {detail}
        </p>
        <p style={{ display: "flex", alignItems: "center" }}>
          {skillList &&
            skillList.map((skill, index) => {
              return (
                <img
                  key={index}
                  src={mappingSkill[skill]}
                  alt={skill}
                  className="project-skill-icon"
                  style={{ width: "auto", height: "24px", marginRight: "8px" }}
                />
              );
            })}
        </p>
        {pointList &&
          Object.keys(pointList).map((key, index) => (
            <p key={index}>
              <span style={{ color: "#ff6f61", marginRight: "6px" }}>✅</span>
              <span style={{ color: "black" }}>{key}</span> - {pointList[key]}
            </p>
          ))}
        <div className="icon-container">
          {memo && (
            <a href={memo} target="_blank" rel="noopener noreferrer">
              <div className="icon">
                <img src="./img/icon/연필.png" alt="Pencil Icon" />
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
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <div className="icon">
                <img src="./img/icon/링크아이콘.png" alt="Link Icon" />
              </div>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────
// SideProject 컴포넌트 (hover 시 설명 슬라이드)
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
      <img src={props.img} alt="사이드프로젝트 사진" />
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

// ─────────────────────────────────────────
// Choose 컴포넌트 (키워드 아이콘 및 설명)
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
        <img className="before" src={img1} alt="키워드 이미지1" />
        <img className="after" src={img2} alt="키워드 이미지2" />
      </div>
      <div className={reverse ? "description" : "description reverse"}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </motion.div>
  );
}
