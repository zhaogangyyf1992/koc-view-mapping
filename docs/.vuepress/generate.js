const fs = require('fs');
const menu = require('./docs/.vuepress/menu.json');

function createFiles(items, parentDir = 'docs') {
  items.forEach(item => {
    const dirName = item.title.toLowerCase().replace(/\s+/g, '-');
    const dirPath = `${parentDir}/${dirName}`;
    
    // 创建目录（如果非叶子节点）
    if (item.children.length > 0) {
      fs.mkdirSync(dirPath, { recursive: true });
      // 创建 README.md
      fs.writeFileSync(`${dirPath}/README.md`, `# ${item.title}\n\n这里是 ${item.title} 的说明。`);
      // 递归处理子节点
      createFiles(item.children, dirPath);
    } else {
      // 创建叶子节点的 Markdown 文件
      const fileName = `${parentDir}/${dirName}.md`;
      fs.writeFileSync(fileName, `# ${item.title}\n\n这里是 ${item.title} 的详细内容。`);
    }
  });
}

// 从根目录开始生成
createFiles(menu.children, 'docs');