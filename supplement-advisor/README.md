# 영양제 추천 앱 (안전 우선)

## 핵심 기능
- 영양제/충돌 필터 기반 맞춤 추천
- **역노화/습관 프로토콜 모드**(기본값):
  - Safety Report
  - Custom Stack
  - Daily Timeline (24h)
  - Special Solution
  - Final Advice
- NMN/레스베라트롤/테아닌 등 사용자 입력 키워드 매핑
- **LLM 기반 추천 모드(선택)**: 별도 운영 엔드포인트가 있는 경우 안전 필터링 전/후 후보를 LLM이 재정렬
- 진단 기록 스냅샷(로컬 브라우저 저장소)
- 1페이지 PDF 리포트 생성(브라우저 인쇄 기능 기반)

## 실행
- 브라우저에서 `index.html` 실행
- GitHub Pages: https://kyeonghakim.github.io/openclaw-backup/

## LLM 엔드포인트 연동
- `POST`로 JSON을 받는 자체 서버/프록시가 필요합니다.
- 요청 예시 바디: 
  - `profile`, `medFlags`, `condFlags`, `targetFlags`, `candidateCatalog`, `requestedCount`
- 응답 예시: 
  ```json
  {"recommendations":[{"id":"omega3","name":"오메가-3","dose":"...","purpose":"...","ingredients":["EPA","DHA"],"reason":"...","evidence":["..."],"qualityFilters":["..."]}]}
  ```
- `recommendations`가 비어있으면 앱은 규칙 기반 결과로 자동 전환됩니다.

## 기록/개인정보
- 스냅샷은 현재 기기 브라우저 저장소에만 보관됩니다.
- 민감 정보 입력 시 저장 전에 삭제 후 기록할 것을 권장합니다.

## 주의
- 본 앱은 진단·처방이 아니라 교육용 보조 도구입니다.
- 임신/수유, 수술 예정, 중증 신장·간질환, 항응고 치료 중, 면역억제 치료 중에는 반드시 의료진 승인 후 사용하세요.
