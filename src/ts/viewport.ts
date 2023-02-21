export function getPageHeight (): number {
  return Math.round(getPageCount() * pageHeight()) - 1
}

function getPageCount(): number {
  return Math.ceil(getDocumentHeight() / window.devicePixelRatio / pageHeight())
}

function getDocumentHeight (): number {
  return document.body.scrollHeight
}

function pageHeight (): number {
  return 297 * 3.78 // 297mm is A4 height in mm
}
