#!/bin/sh
set -eu
export PATH="/opt/homebrew/bin:$PATH"
# Reuse GitHub CLI's credential storage without putting tokens in project files.
GITHUB_PERSONAL_ACCESS_TOKEN="$(gh auth token --hostname github.com)"
export GITHUB_PERSONAL_ACCESS_TOKEN
exec /opt/homebrew/bin/github-mcp-server stdio
