import os
from openai import OpenAI
from dotenv import load_dotenv
load_dotenv()
key=os.environ.get("OPENAI_API_KEY")
URL=os.environ.get("OPENAI_API_BASE")

client = OpenAI()

# text = client.invoke("请给我写一句情人节红玫瑰的中文宣传语")
response = client.chat.completions.create(
    model=os.environ.get("model"),

    messages=[
        {"role": "system", "content": "You are a creative AI."},
        {"role": "user", "content": "请给我取一个姓李的人的名字"},
    ],
    temperature=0.8,
    max_tokens=600,
)

print(response.choices[0].message.content)
