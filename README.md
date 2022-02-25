👨‍🌾 Market Kurly 👩‍🌾
=============
당일 수확 채소, 과일, 맛집 음식을 바로 다음 날 문 앞에서 만나볼 수 있는 <b>[마켓컬리 웹사이트](https://www.kurly.com/shop/main/index.php)</b>를 클론코딩 하였습니다! 😊
<br><br>

![텍스트](https://media.vlpt.us/images/hyejin4169/post/025ab154-d1b9-4035-9f50-721dbb99c800/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-02-24%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2011.24.19.png)<br><br><br><br>
## 📆 제작 기간 및 팀원 소개 👨‍💻👩‍💻
- 2022/02/18 - 2022/02/24
- 오성택 [GitHub](https://github.com/nevergettingold) : 장바구니, 리뷰, 이미지 업로드, 도움이 돼요, UI 담당
- 안소진 [GitHub](https://github.com/sojin0106) : 메인페이지, 상세페이지, UI 담당
- 윤혜진 [GitHub](https://github.com/hyejin4169) : 로그인, 회원가입, 리뷰창, UI 담당

## 💻 Front-end
- 이번 프로젝트는 프론트엔드 3명(React), 백엔드 3명(Spring)이 함께 진행한 프로젝트 입니다.
- 클론코딩 취지에 맞게 최대한 실제 웹사이트의 기능 및 디자인을 똑같이 구현하는 데에 집중하였습니다.

## 💻 Back-end
- [GitHub 바로가기](https://github.com/kyungwoon/kurly-clone)

## 🌎 Website
[사이트 바로가기](http://react-spring-marketkurly-clone.s3-website.ap-northeast-2.amazonaws.com/)

## 🎬 데모 영상 링크
[데모영상 바로가기](https://youtu.be/CKtrtcF3CiU)

## 📝노션 설계 페이지 (🔗API 상세 포함)
[노션 바로가기](https://calico-millennium-b6c.notion.site/99-Week-07-4-81afed7b6c3d4380b9eaed8eacc2ed9e)

<br><br>
## 🛠 Front-end 기술 스택 및 개발 환경 🔨
<br>
<p align="center">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=react&logoColor=black">
 </br>
<img src="https://img.shields.io/badge/axios-007CE2?style=for-the-badge&logo=axios&logoColor=white">
<img src="https://img.shields.io/badge/reactrouterdom-375BD2?style=for-the-badge&logo=reactrouterdom&logoColor=white">
<img src="https://img.shields.io/badge/styledcomponents-181717?style=for-the-badge&logo=styledcomponents&logoColor=white">
<img src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">


 <br><br>
 
## ✔🗒️ 페이지 & 기능
### * 로그인, 회원가입
    :JWT를 사용하여 로그인과 회원가입을 구현
    :아이디 유효성 검사(최소 6자 이상, 알파벳 소문자(a~z), 숫자(0~9)를 포함) 및 중복 확인
    :이메일 유효성 검사(알파벳 소문자(a~z), 숫자(0~9), 특수문자(-,_), @, .을 포함) 및 중복 확인
    :비밀번호 유효성 검사(10자 이상, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자) 및 2차 확인 가능
    :입력한 정보가 양식에 맞지 않을 경우 사용자에게 표시
    :미입력 정보 있을 시 alert창 띄운 후 로그인 및 회원가입 실패
    :회원정보 DB에 저장, 회원가입 완료 후 로그인 페이지로 이동
### * 메인 페이지
    :react-slick을 사용하여 영역 별 상품 Carousel로 디스플레이
    :상품 클릭 시 상세페이지로 이동
### * 상품 상세페이지
    :상품 구매수량 +, - 버튼으로 조정 후 장바구니 담기 버튼 클릭 시 장바구니에 해당 상품 저장 
    :리뷰 작성 시 이미지 업로드 가능 및 첨부된 이미지 미리보기 구현
    :로그인한 유저는 '도움이 돼요' 클릭 가능 및 갯수 카운트 가능 (추가 시 +1)
    :작성한 리뷰 삭제 가능
### * 장바구니 페이지
    :로그인한 유저는 장바구니에 담은 상품을 조회 가능 및 상품 개수 추가 및 삭제 가능
    :총액 40,000원 이상 시 배송비 3,000원 차감되어 무료배송 적용
    :총 주문액의 5% 금액은 포인트로 적립되어 적립율 표시
<br><br><br>

## **❓ Why? Axios**

- 호환성이 좋고, 코드 작성이 간결하여 리액트 프로젝트에 적합하다고 판단하여 사용하였습니다.
<br><br><br>
## **⚙️ Trouble Shooting**

- 작성 중..
