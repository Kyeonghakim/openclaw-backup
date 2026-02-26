#!/usr/bin/env bash
# 모바일/같은 Wi-Fi 기기에서 접근 가능한 로컬 서버 실행
# 사용: bash start-mobile.sh
# 종료: Ctrl + C

DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$DIR"

echo "Serving: $DIR"
echo "On this device: http://127.0.0.1:8080"

# macOS에서만 동작 예시: 로컬 IP 자동 탐지
LOCAL_IP="$(ipconfig getifaddr en0 2>/dev/null || ipconfig getifaddr en1 2>/dev/null || echo "(unknown)")"
echo "On mobile (same Wi-Fi, if same subnet): http://$LOCAL_IP:8080"
echo "If unknown, run: ifconfig | sed -n '/inet /p'"

python3 -m http.server 8080 --bind 0.0.0.0
