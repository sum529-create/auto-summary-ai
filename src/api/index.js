import axios from "axios";

export async function fetchOpenAI(content) {
  if (!content || typeof content !== 'string' || content.trim().length === 0) {
    throw new Error('유효한 콘텐츠가 필요합니다');
  }

  try {
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
  } catch (error) {
    console.error('OpenAI API 호출 실패:', error);
    throw new Error('요약 생성에 실패했습니다');
  }
}