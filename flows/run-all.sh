#!/usr/bin/env bash
cd "$(dirname "$0")/.." || exit 1
pass=0; fail=0
for f in flows/0*.yaml; do
  echo "=== $(basename "$f") ==="
  if maestro test "$f"; then pass=$((pass+1)); else fail=$((fail+1)); fi
done
echo
echo "RESULT: $pass passed, $fail failed"
