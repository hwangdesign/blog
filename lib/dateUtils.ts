/**
 * 날짜 표기: yyyy/mm/dd 통일
 * @param dateStr "YYYY-MM-DD" 형식
 */
export function formatDate(dateStr: string): string {
  return dateStr.replace(/-/g, "/");
}
