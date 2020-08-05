#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git add -A

git commit -m '添加eslint支持，保证代码质量'

git push -f "https://github.com/winteroo/leetcode-test.git" master

cd -