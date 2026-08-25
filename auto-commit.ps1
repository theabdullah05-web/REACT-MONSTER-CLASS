$repo = git rev-parse --show-toplevel

if (-not $repo) {
    exit 1
}

Set-Location $repo

git add .

if (git diff --cached --quiet) {
    exit 0
}

git commit -m "Auto commit $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"

git push origin main