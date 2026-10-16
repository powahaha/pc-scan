/* ===== ค่าของชุด "PC โรงงาน 2" — ไฟล์ index.html / master.html เหมือนชุดโรงงาน 1 ทุกตัว ต่างกันแค่ไฟล์นี้ =====
 * Sheet: สแกนเบิก-รับ โรงงาน 2 · Apps Script: PC Scan โรงงาน 2 - ตัวรับข้อมูล
 */
window.APP_CONFIG = {
  id: 'f2',
  name: 'โรงงาน 2',
  owner: 'PC',
  what: 'วัสดุสิ้นเปลือง',
  sku: 'CT',                         // รหัสของ → CT-001, CT-002 …
  api: 'https://script.google.com/macros/s/AKfycbxD54c0IFxSc-tWXVBF9YK4DQPvXxlNK7c8gdg82C8daadE028xXFeonRC0_ZcJl0aa/exec',
  depts: ['CNC', 'Robot', 'Assy', 'Finishing', 'QA', 'MT', 'HW'],
  qr: { cnc: 'CNC', robot: 'Robot', assy: 'Assy', finish: 'Finishing', qa: 'QA', mt: 'MT', hw: 'HW' },   // ลิงก์ QR ?v=dept&d=<code>
  roundDay: null,                    // ไม่มีรอบจ่าย — ส่งใบได้ทุกวัน
  file: 'pc-scan-f2',                // ชื่อไฟล์ Excel ที่ดาวน์โหลด
  mapImg: '',                        // ยังไม่มีผังโรงงาน 2
  spots: []                          // ยังไม่ตั้งจุดเก็บ → พิมพ์ชื่อที่เก็บเอง
};
