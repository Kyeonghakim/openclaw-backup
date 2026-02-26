# 영양제 추천 앱 (안전 우선 프로토타입)

## 개요
사용자 입력(나이/성별/체중/직업/목표/약물/상태)에 따라
- 약물/질환 충돌을 먼저 필터링
- iHerb에서 구매 가능한 실제 상품 검색 링크를 추천
- 사용자가 원하는 스타일에 맞춰
  - **추천 모드**: 핵심 영양제 추천 위주
  - **역노화 프로토콜 모드**: Safety Report, Custom Stack, Daily Timeline, Special Solution, Final Advice 형태 리포트

목표: **“안전성 최우선”**의 영양 보조제 제안.

## 핵심 원칙
1. 위험 약물 상호작용(항응고제/항응고 관련 등) 감지 시 제외
2. 용량 권고는 제품 라벨(표준 범위) 기반
3. 임상 근거 데이터는 `script.js`의 `supplements[]` 항목에 넣어 검증 가능하도록 구성
4. 건강 상태가 복잡할수록 의료진 컨설팅 유도

## 실행 방법
브라우저에서 `index.html`을 열면 동작합니다.

## 배포(로컬이 아닌 주소)
배포는 GitHub Pages를 사용합니다.

현재 저장소: https://github.com/Kyeonghakim/openclaw-backup

접속 URL: https://kyeonghakim.github.io/openclaw-backup/

## 모바일 사용
- `bash /Users/anna/.openclaw/workspace/supplement-advisor/start-mobile.sh`로 로컬 서버 실행
- 같은 Wi-Fi에서 `http://<Mac의 IP>:8080` 접속

## 주의
- 본 앱은 진단·처방이 아니라 교육용 보조 도구입니다.
- 임신/수유, 수술 예정, 중증 신장·간질환, 항응고 치료 중, 면역억제 치료 중에는 반드시 의료진 승인 후 사용하세요.
