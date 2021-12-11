# 🍀 ECO FUNDING


> **에코펀딩**은 친환경 제품들을 펀딩하는 사이트 입니다. 항해99 미니프로젝트로 프론트앤드와 백앤드가 처음으로 합작한 프로젝트 입니다.
<br>

##  🖥️ Eco_funding Page View

<img width="50%" alt="ecofunding1" src="https://user-images.githubusercontent.com/63698668/145674178-378cff32-0459-4c19-aa7b-23699a888249.png"> <img width="49%" alt="ecofunding2" src="https://user-images.githubusercontent.com/63698668/145674181-1bb63320-4c51-4930-8a3e-9507541453f8.png">

## 🎈 LINK
> 👀 사이트 링크 : [http://ecofunding.s3-website.ap-northeast-2.amazonaws.com/](http://ecofunding.s3-website.ap-northeast-2.amazonaws.com/)
>
> 📺 유튜브 링크 : [https://www.youtube.com/watch?v=7lWQJ02-1N4](https://www.youtube.com/watch?v=7lWQJ02-1N4)
> 
> 🔗 개발 노션 : [https://www.notion.so/joo-page/1-50891e8907b44b24868f73df72692cd8](https://www.notion.so/joo-page/1-50891e8907b44b24868f73df72692cd8)
> 
<br>

## 🥇 Developers

- **Front-end**
  - 서민지 / 이준명

- **Back-end** :  https://github.com/JooYoung2274/Eco_funding
  - 김주영 / 김금동 / 전익현
  
<br>

## ▶️ List
- 📆 [Schedule](#-Schedule)
- 🚀 [Tech Stack](#-Tech-Stack)
- 💬 [Back-end](#-Back-end)
<br>

## 📆 Schedule

- **기획 :** 2021/12/06 ~ 2021/12/06 **(1일)**
  - 사이트 아이디어 기획
  - API 작성
  - DB schema 작성
  - Wireframe 작성
  - 
- **개발 :** 2021/12/07 ~ 2021/12/11 **(5일)**
- **프론트 스케줄 :**
- 월: element, components, page, view 완성 (상세페이지/작성페이지/로그인/회원가입)
- 화: 메인페이지 view 완성, axios 공부하기, item, user 리덕스 필요한 부분 연결하기
- 수: axios mock api 만들어서 메인페이지, 상세페이지 연결하기 (get/post), 배포된 real API 메인, 상세페이지 연결하기,
- 목: 회원가입 데이터 서버에 저장하기, 회원가입 중복체크 버튼,  로그인 API 연동하기, 토큰 local storage, 로그인 유무 헤더 변환하기 등
- 금: 댓글 등록하기, 펀딩하기 버튼, 랭크 리스트 제작, 로그인버튼 에러잡기, 게시물 저장, 수정하기, 삭제하기 부분, 상세페이지 새로고침 시 오류 잡기 
- 토: 최종 디자인 수정, 자잘한 사용성 에러 잡기(알럿띄우기), 최종 배포하기, 최종 제출하기
<br>

## 🚀 Tech Stack

- **Back-end Tech Stack**
  - JavaScript
  - Node.js
  - Express
  - MongoDB & Mongoose => Mysql & Sequelize
  - 
- **Back-end Library**
  - Json Web Token Authentication
  - bcrypt
  - multer
  - dotenv
  - cors
  - swagger
<br>

## 💬 Back-end
> 이번 프로젝트는 주특기 주차를 마치고 처음으로 프론트엔드와 백엔드로 나눠서 진행한 프로젝트 입니다.
> 우선적으로 주특기 주차에 배운 기본적인 CRUD기능의 구현에 집중하였고,
> 기능 구현을 끝낸 후 타당한 이유가 있는 새로운 기술스택 및 디자인패턴을 도입하려 노력했습니다.

**❓ Why? MVC 패턴**
이번 미니프로젝트 주차에는 기획부터 개발, 배포까지 6일안에 완성해야 했습니다. 하루동안 아무리 촘촘하게 따져가면서 기획을 한다해도 어쩔수없이 놓치는 부분이 생길 것 같았기 때문에 개발 시작 단계에서부터 *기능의 확장성*을 생각해 데이터와 사용자 인터페이스, 기능들이 분리된 *MVC패턴*을 사용했습니다.

**❓ Why? express-validator (Controller 단계에서의 유효성검사)**
View 단계에서는 개발자도구를 통한 HTML조작 유효성검사를 비정상적으로 패스할 가능성이 있어 _Controller 단계에 유효성검사_ Middleware를 추가했습니다.

**❓ Why? multer**
이미지 파일이 multipart/form-data 형태로 넘어오기 때문에 이를 다루기 위해서 multer를 사용했습니다.

**❓ Why? dotenv**
노출되면 보안에 위협적인 환경변수들을 한곳에 모아 관리했습니다.

**❓ Why? swagger**
사실 이번 프로젝트는 API의 양이 많지 않아 충분히 임의로 적어놓은 API명세서를 보면서 서버로 원하는 request를 보낼 수 있었습니다. 하지만 앞으로 남은 프로젝트들은 API의 양이 많아질 것이라 생각해 미리 swagger를 통해 정리된 API명세서를 만들어보고자 사용했습니다.
