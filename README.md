# ThanosCall
자연어처리를 이용한 비즈니스 Insight 도출 서비스

## 🔍 프로젝트 개요
ThanosCall은 기업이 고객의 음성 데이터를 효과적으로 분석하고, 핵심 인사이트를 도출할 수 있도록 도와주는 서비스입니다.
VOC(Voice of Customer) 데이터를 활용하여 부정적인 이슈를 빠르게 감지하고, 소비자 니즈를 반영한 비즈니스 의사결정을 지원합니다.

## 🎯 주요 기능
* STT (Speech-to-Text): 음성 데이터를 텍스트로 변환
* 텍스트 청킹 & FAISS 검색: 고객 발화를 효율적으로 분류 및 검색
* LangChain 기반 AI 분석: 자연어 처리 모델을 활용한 의미 분석
* 비즈니스 인사이트 제공: 부정적 이슈 탐지 및 주요 트렌드 분석
## 🛠️ 기술 스택
* Frontend: React.js
* Backend / Database: Firebase
* AI / NLP: GPT API, KOBART
## 📌 적용 대상
ThanosCall은 다음과 같은 기업에 적합합니다:
* ✔ 고객 피드백을 빠르게 분석하고 싶은 기업
* ✔ VOC 데이터를 활용한 의사결정이 필요한 기업
* ✔ 업무 자동화를 통해 효율성을 높이고 싶은 기업

## 📂 프로젝트 구조
```
thanos_call # 프로젝트의 루트 폴더
│── .vscode
│── node_modules
│── public
│── src # 소스 코드가 포함된 주요 폴더
│ │── assets # 정적 자원 저장
| | │── fonts # 폰트
│ | |── images # 이미지
│ │── components # 재사용 가능한 UI 컴포넌트
| | |── basic_frame
| | |── boxes
| | |── cs_data_analysis
| | |── cs_list_manage
| | |── login
│ │── config # 환경설정 관련 파일
| | |── string # 문자열 스트링으로 제외
│ │── context # React Context API 관련 전역 상태 관리 폴더
| | |── Usercontext # 유저 정보
│ │── pages # 페이지 단위 컴포넌트 저장 (예: Home, Login 등)
| | |── call_center
| | |── login
│ │── services # API 요청을 처리하는 비즈니스 로직 폴더
| | |── authservice
| | |── firebase
│ │── utils # 유틸리티 함수 (예: 날짜 포맷, 데이터 변환 등)
| | |── layout
│ │── App.css
```
## 🚀 실행 방법
### 저장소 클론
git clone https://github.com/your-repo/ThanosCall.git

### 프로젝트 폴더 이동
cd ThanosCall

### 패키지 설치
npm install

### 서버 실행
npm start

### 💡 트러블슈팅 & 해결 방법
* GPT API를 활용한 학습 데이터 생성 문제 → 데이터 전처리 최적화
* 컴포넌트 분리 설계 문제 → 재사용 가능한 구조로 리팩토링

## 🙌 팀 & 기여자
팀 타노스
* 팀장 : 이종민
* 프론트엔드 : 강민기 황일찬
* 백엔드 : 김주호
* 모델 설계 : 심현지
