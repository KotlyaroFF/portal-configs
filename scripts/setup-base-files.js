#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const baseDir = process.cwd();

const sources = {
  '.gitignore': path.resolve(__dirname, '../gitignore/base.gitignore'),
  '.prettierignore': path.resolve(__dirname, '../prettier/base.ignore'),
  '.stylelintignore': path.resolve(__dirname, '../stylelint/base.ignore'),
  '.nvmrc': path.resolve(__dirname, '../node/base.version'),
  '.lintstagedrc.json': path.resolve(__dirname, '../lintstagedrc/index.json'),
};

Object.entries(sources).forEach(([targetFile, sourcePath]) => {
  const targetPath = path.join(baseDir, targetFile);

  if (!fs.existsSync(sourcePath)) {
    console.warn(`[!] Шаблон ${sourcePath} не найден`);
    return;
  }

  if (!fs.existsSync(targetPath)) {
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`[+] Создан ${targetFile}`);
  } else {
    console.log(`[=] ${targetFile} уже существует`);
  }
});

// Инициализация husky
const { execSync } = require('child_process');

try {
  if (!fs.existsSync(path.join(baseDir, '.husky'))) {
    execSync('npx husky install', { stdio: 'inherit' });
    console.log('[+] Husky инициализирован');
  } else {
    console.log('[=] Husky уже инициализирован');
  }

  const preCommitPath = path.join(baseDir, '.husky/pre-commit');
  if (!fs.existsSync(preCommitPath)) {
    fs.mkdirSync(path.join(baseDir, '.husky'), { recursive: true });
    fs.writeFileSync(preCommitPath, '#!/bin/sh\nnpx lint-staged\n');
    fs.chmodSync(preCommitPath, 0o755);
    console.log('[+] pre-commit хук создан');
  } else {
    console.log('[=] pre-commit хук уже существует');
  }
} catch (err) {
  console.error('[!] Ошибка при установке Husky:', err.message);
}
