# Function Call

- LLM 调用API 有什么缺点？
    - LLM 提前训练好的，新的知识或服务不知道的
        LLM 封闭插上隐形的翅膀，调用些外部的内容或工具
        chat之外，调用函数
        今天的天气怎么样？
    - AIGC 没有足够的上下文，胡说八道
        temperature
        - 给LLM足够的上下文
            Function call 调用外部的天气服务
        - MCP 
            给大模型插入的USB
        - Prompt 设计
        - 工作流
            工作节点让LLM 流程化
        - 知识库
    - 我们可以将知识库(私有) 交给大模型，LLM更懂我们
    不安全。RAG
    
## Function Call
    让AIGC 从只会生成文本进化为能可靠执行操作，解决了自然语言到结构化调用的鸿沟，是模型能安全、可控地调用外部系统(知识库、服务)，推动实用化基础。    

    "帮我订一下明天北京到上海的航班" 

    - 简洁，强大
    - 习惯和依赖


## Function Call 工作流程

- 传统chat api 调用，变成两步
    - 根据prompt 和 tools 中的 description 语义关联性分析
        匹配到的function名字和参数，type function
    - 执行function
    - 将函数的返回结果，再次交给LLM，正常的能回答的聊天了