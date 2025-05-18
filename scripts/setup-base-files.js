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
