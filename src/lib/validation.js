/**
 * 메모 제출 유효성 양식 체크
 * @param {string} title 
 * @param {string} content 
 * @param {string} summary 
 * @returns Boolean
 */
export const confirmData = (title, content, summary) => {
  if(!title.trim()) { 
    alert('제목을 입력해주세요.')
    return false;
  }
  if(!content.trim()) { 
    alert('메모를 입력해주세요.')
    return false;
  }
  if(!summary.trim()) { 
    alert('요약 버튼을 클릭하여 요약 결과를 정리해주세요.')
    return false;
  }
  return true;
}