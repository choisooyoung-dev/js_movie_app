// 메일 아이콘 누르면 메일 주소 복사
// ClipboardJS with CDN
export function copy() {
  var clipboard = new ClipboardJS(".mail");
  clipboard.on("success", function (e) {
    console.log("Copy");
  });
  clipboard.on("error", function (e) {
    console.log("Copy Failed");
  });
}
