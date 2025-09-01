// 负责 posts.json的模块化
// 支持了fs的promises版本
import fs from 'fs/promises';
// readFileSync 同步读取文件，返回的是buffer
// readFile() 异步读取文件，返回的是promise
// fs 推出了 promises 版本，支持了async await
import { client } from './llm.mjs';

const inputFilePath = './data/posts.json';
const outputFilePath = './data/posts_with_embeddings.json';
// 最流行的写法
const data = await fs.readFile(inputFilePath, 'utf-8');
console.log(data);
// 向量化
const posts = JSON.parse(data);
const postsWithEmbeddings = [];

for(const {title, category} of posts) {
    const response = await client.embeddings.create({
        model: "text-embedding-ada-002",
        input: `标题：${title}; 分类： ${category}`
    })

    postsWithEmbeddings.push({
        title, 
        category,
        embedding: response.data[0].embedding
    })
}

await fs.writeFile(outputFilePath, JSON.stringify(postsWithEmbeddings, null, 2), 'utf-8');