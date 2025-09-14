# 📝 자동 요약 AI

노트를 작성하면 AI가 자동으로 요약해주는 웹 애플리케이션입니다. Claude AI를 사용해서 긴 텍스트를 간단하게 정리해드립니다.

## ✨ 주요 기능

- 📝 **노트 작성 및 관리**: 마크다운 형식의 노트 작성 및 편집
- 🤖 **AI 자동 요약**: Claude AI를 활용한 노트 내용 자동 요약
- 🔄 **실시간 동기화**: Firebase를 통한 실시간 데이터 동기화
- 📱 **반응형 디자인**: 모바일과 데스크톱 환경 모두 지원
- 🎨 **모던 UI**: Tailwind CSS를 활용한 깔끔한 사용자 인터페이스
- 📊 **정렬 기능**: 최근순, 이름순으로 노트 정렬
- 💾 **로컬 저장**: Redux Persist를 통한 로컬 데이터 저장

## 🛠️ 기술 스택

### Frontend
- **React 18** - 사용자 인터페이스 구축
- **React Router DOM** - 클라이언트 사이드 라우팅
- **Redux Toolkit** - 상태 관리
- **Redux Persist** - 로컬 스토리지 연동
- **Tailwind CSS** - 스타일링
- **Vite** - 빌드 도구

### Backend & Services
- **Firebase** - 실시간 데이터베이스 및 인증
- **OpenRouter API** - Claude AI 모델 연동
- **Axios** - HTTP 클라이언트

### Development Tools
- **ESLint** - 코드 품질 관리
- **Vitest** - 테스트 프레임워크
- **Testing Library** - 컴포넌트 테스트

## 🚀 시작하기

### 필수 요구사항

- Node.js 18.0.0 이상
- npm 또는 yarn
- Firebase 프로젝트
- OpenRouter API 키

### 설치 및 실행

1. **저장소 클론**
   ```bash
   git clone https://github.com/your-username/auto-summary-ai.git
   cd auto-summary-ai
   ```

2. **의존성 설치**
   ```bash
   npm install
   ```

3. **환경 변수 설정**
   
   프로젝트 루트에 `.env` 파일을 생성하고 다음 변수들을 설정하세요:
   ```env
   # Firebase 설정
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   
   # OpenRouter API 키
   VITE_API_KEY=your_openrouter_api_key
   ```

4. **개발 서버 실행**
   ```bash
   npm run dev
   ```

## 📁 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── layout/         # 레이아웃 컴포넌트
│   ├── nav/           # 네비게이션 컴포넌트
│   ├── notes/         # 노트 관련 컴포넌트
│   ├── routes/        # 라우트 컴포넌트
│   └── ui/            # 재사용 가능한 UI 컴포넌트
├── hooks/             # 커스텀 훅
├── lib/               # 유틸리티 함수
├── store/             # Redux 스토어 설정
├── api/               # API 관련 함수
└── __tests__/         # 테스트 파일
```

## 🎯 사용법

1. **노트 작성**: 메인 페이지에서 새로운 노트를 작성합니다.
2. **요약 생성**: 작성한 노트의 "요약" 버튼을 클릭하여 AI 요약을 생성합니다.
3. **노트 관리**: 작성된 노트들을 최근순 또는 이름순으로 정렬하여 관리할 수 있습니다.
4. **노트 상세보기**: 개별 노트를 클릭하여 상세 내용을 확인할 수 있습니다.

## 🧪 테스트

```bash
# 테스트 실행
npm run test

# 린트 검사
npm run lint
```

## 📦 빌드

```bash
# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 🚀 배포

이 프로젝트는 Firebase Hosting을 통해 배포할 수 있습니다:

```bash
# Firebase CLI 설치 (전역)
npm install -g firebase-tools

# Firebase 로그인
firebase login

# 프로젝트 초기화
firebase init hosting

# 배포
firebase deploy
```
