import * as XLSX from "xlsx";
console.log(XLSX);
function exportXlsx(data, header, fileName) {
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.sheet_add_aoa(ws, [header], { origin: "A1" });
  XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
  XLSX.writeFile(wb, `${fileName}.xlsx`);
}

export default exportXlsx;
