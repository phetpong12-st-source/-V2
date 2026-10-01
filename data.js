// แก้ชื่อโรงพยาบาลและลิงก์ Dashboard ได้จากไฟล์นี้
const HOSPITAL = {
  name: "โรงพยาบาลไชโย"
};

const DASHBOARDS = [
  {department:"งานการพยาบาล",title:"Dashboard งานการพยาบาล",category:"บริการ",description:"ตัวชี้วัดและข้อมูลสารสนเทศด้านการพยาบาล",icon:"🧑‍⚕️",url:"https://example.com"},
  {department:"งานผู้ป่วยนอก",title:"Dashboard OPD",category:"บริการ",description:"ข้อมูลผู้รับบริการและตัวชี้วัดงานผู้ป่วยนอก",icon:"🏥",url:"https://example.com"},
  {department:"ศูนย์รับเรื่องร้องทุกข์",title:"Dashboard เรื่องร้องทุกข์",category:"คุณภาพ",description:"ติดตามจำนวน สถานะ และผลการดำเนินงานเรื่องร้องทุกข์",icon:"📝",url:"https://example.com"},
  {department:"งานยุทธศาสตร์",title:"Dashboard ตัวชี้วัดองค์กร",category:"ยุทธศาสตร์",description:"ติดตามตัวชี้วัดและผลการดำเนินงานขององค์กร",icon:"📈",url:"https://docs.google.com/spreadsheets/d/1wyc_wKjcKn8hyShRpXnEAqPEX1X-ZdgdpyxOh4QiZm8/edit?gid=1787171275#gid=1787171275"},
  {department:"งานทรัพยากรบุคคล",title:"Dashboard บุคลากร",category:"บุคลากร",description:"ข้อมูลกำลังคนและตัวชี้วัดด้านบุคลากร",icon:"👥",url:"https://example.com"},
  {department:"งานการเงิน",title:"Dashboard การเงิน",category:"การเงิน",description:"ข้อมูลและตัวชี้วัดด้านการเงิน",icon:"💰",url:"https://example.com"},
  {department:"งานจ่ายกลาง",title:"Dashboard CSSD EXECUTIVE",category:"งานจ่ายกลาง",description:"ข้อมูลและตัวชี้วัดงานจ่ายกลาง",icon:"🚚",url:"https://script.google.com/macros/s/AKfycbwoqsMVyo6klD7iLkkJhG7hFjTMGE9h0K8zX9KkUSjcUuArxLxpUfA4KJ1woF1J5TK9iQ/exec"},
  {department:"งานประกันสุขภาพยุทธศาสตร์",title:"Dashboard รายงานผลงานกองทุน / ยอดชดเชย",category:"งานประกันสุขภาพยุทธศาสตร์",description:"ข้อมูลและตัวชี้รายงานผลงานกองทุน / ยอดชดเชย",icon:"👬",url:"https://chaiyo-report.web.app/"}
];
