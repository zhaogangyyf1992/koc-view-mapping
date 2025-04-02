const fs = require('fs');
const menu = require('./docs/.vuepress/menu.json');

function formatPath(title) {
  return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}
function createFiles(items, parentDir = 'docs') {
  items.forEach(item => {
    const dirName = formatPath(item.title); // 使用与 config.js 相同的路径生成逻辑
    const dirPath = `${parentDir}/${dirName}`;

    // 处理非叶子节点
    if (item.children && item.children.length > 0) {
      fs.mkdirSync(dirPath, { recursive: true });
      // 创建 README.md
      const readmePath = `${dirPath}/README.md`;
      if (!fs.existsSync(readmePath)) {
        fs.writeFileSync(readmePath, `# ${item.title}\n\n${item.title} 的说明。`);
      }
      // 递归处理子节点
      createFiles(item.children, dirPath);
    } else {
      // 处理叶子节点，直接在父目录生成同名 .md 文件
      const filePath = `${parentDir}/${dirName}.md`;
      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, `# ${item.title}\n\n${item.title} 的详细内容。`);
      }
    }
  });
}

// 从根目录开始生成
createFiles(menu.children, 'docs');