const fs = require('fs');
const path = require('path');

const baseDir = process.cwd();
const ignores = {
  '.gitignore': ['node_modules', 'dist', 'coverage', '.next', 'out', '*.log', '.cache'],
  '.prettierignore': ['node_modules', 'dist', 'coverage', '.next', 'out', '*.log', '.cache'],
  '.eslintignore': ['node_modules', 'dist', 'coverage', '.next', 'out', '*.log', '.cache'],
  '.stylelintignore': ['node_modules', 'dist', 'coverage', '.next', 'out', '*.log', '.cache'],
};

Object.entries(ignores).forEach(([filename, lines]) => {
  const targetPath = path.join(baseDir, filename);
  if (!fs.existsSync(targetPath)) {
    fs.writeFileSync(targetPath, lines.join('\n') + '\n', 'utf-8');
    console.log(`[+] Создан ${filename}`);
  } else {
    console.log(`[=] ${filename} уже существует`);
  }
});
