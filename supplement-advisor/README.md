# 영양제 추천 앱 (안전 우선 프로토타입)

## 개요
사용자 입력(나이/성별/체중/직업/목표/복용약/상태)에 따라
- 약물/질환 충돌을 먼저 필터링
- iHerb에서 구매 가능한 실제 상품 검색 링크를 추천
- SCI/피어리뷰 근거를 붙일 수 있는 구조의 데이터 항목으로 추천

목표: **“안전성 최우선”**의 영양 보조제 제안.

## 핵심 원칙
1. 위험 약물 상호작용(항응고제/항응고 관련 등) 감지 시 제외
2. 용량 권고는 제품 라벨(표준 범위) 기반
3. 임상 근거 데이터는 `script.js`의 `supplements[]` 항목에 넣어 검증 가능하도록 구성
4. 건강 상태가 복잡할수록 의료진 컨설팅 유도

## 실행 방법
브라우저에서 `index.html` 을 열면 동작합니다.

### 모바일에서 사용하기 (권장)
같은 Wi-Fi 네트워크에서 폰에서 접속하려면 로컬 서버를 띄워야 합니다.

1. Mac에서 터미널 실행
2. 폴더로 이동
```bash
cd /Users/anna/.openclaw/workspace/supplement-advisor
```
3. 서버 실행
```bash
bash start-mobile.sh
```
4. 화면에 출력되는 URL 중 `http://<Mac의 로컬 IP>:8080` 을 모바일 브라우저에 입력
- 예: `http://192.168.0.12:8080`
- 휴대폰에서 접근이 안 되면 라우터 방화벽, 개인방화벽, AP 분리망(VPN/guest) 여부를 확인


## 배포(로컬이 아닌 주소)

가장 간단한 공개 배포는 GitHub Pages입니다.

1. 이 저장소를 GitHub에 올림
2. 루트 `.github/workflows/deploy-supplement-pages.yml`가 이미 들어 있으므로
action이 자동 실행됨
3. `Actions` > `Deploy supplement-advisor to GitHub Pages`에서 배포 완료 후
   사이트 주소를 확인
4. 기본 주소 예시: `https://<username>.github.io/<repo-name>/`

추가 배포 방법:
- **Vercel/Netlify**: `supplement-advisor` 폴더를 정적 사이트 디렉터리로 지정해 배포
- **Firebase Hosting/Cloudflare Pages**: 정적 파일 호스팅에서 폴더 루트를 `supplement-advisor`로 지정

## 주의
- 본 앱은 진단·처방이 아니라 교육용 보조 도구입니다.
- 임신/수유, 수술 예정, 중증 신장·간질환, 항응고 치료 중, 면역억제 치료 중에는 반드시 의료진 승인 후 사용하세요.
