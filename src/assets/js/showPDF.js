export function showPDF(pdfPath) {
  window.open(pdfPath, "_blank"); // 선택한 PDF 경로를 새 탭에서 열기
}

// 전역에서 사용하기 위해 window에 추가
window.showPDF = showPDF;
