git add .

if (git diff --cached --quiet) {
    exit 0
}

git commit -m "Auto commit $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"

git push