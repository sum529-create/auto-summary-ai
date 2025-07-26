import axios from "axios";

export async function fetchOpenAI(content) {
  const res = await axios.post("https://openrouter.ai/api/v1/chat/completions", 
    {
      model: "anthropic/claude-3-haiku",
      messages: [
        {
          role: "user",
          content: `다음 글을 요약하는데, 그 문장만 출력해. '요약:' 같은 표현도 쓰지 마. 내용: ${content}`
        }
      ]
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
      }
    }
  )
  return res.data;
}