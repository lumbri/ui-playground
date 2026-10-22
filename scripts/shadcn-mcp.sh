#!/bin/sh
set -eu
PROJECT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)"
export PATH="/opt/homebrew/opt/node@24/bin:$PATH"
cd "$PROJECT_DIR"
exec "$PROJECT_DIR/node_modules/.bin/shadcn" mcp
