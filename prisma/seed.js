const bcrypt = require('bcryptjs')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()


// const repairlist = [
//   { detail:'จอแตก', requesDate: new Date(),location:'ห้องคอม 2' ,userId: 1,equiment : "เครื่องปริ้น"  },
//   { detail:'ใช้ไม่ได้', requesDate: new Date(),location:'ห้องประชุม' ,userId: 1,equiment : "เมาค์"   },
//   { detail:'โปรเจคเตอร์เปิดไม่ติด', requesDate: new Date(),location:'ห้องโสด' ,userId:1 ,equiment : "โปรเจคเตอร์"},
//   { detail:'คอมช้าเข้าโปรแกรมไม่ได้', requesDate: new Date(),location:'ห้องคอม 3' ,userId:1,equiment : "ซอฟแวร์"  },

// ]

// const repairEdit = [
//   { Editdate: new Date(),Finishdate: new Date(),status:'รอตรวจสอบ' ,  detail  : "เจ้าหน้าที่กำลังดำเนินการเข้าเช็กอุปกรณ์" ,technicianId: 4,repairId  : 1},
//   { Editdate: new Date(),Finishdate: new Date(),status:'กำลังดำเนิดการ' ,  detail   : "รออะไหร่"  ,technicianId: 5 ,repairId : 4 },
//   { Editdate: new Date(),Finishdate: new Date(),status:'กำลังดำเนิดการ' ,  detail  : "เจ้าหน้าที่กำลังดำเนินการเข้าเช็กอุปกรณ์",technicianId: 6 ,repairId  : 1},
//   { Editdate: new Date(),Finishdate: new Date(),status:'สำเร็จ' ,  detail  : "ล้างโปรแกรมลง window ใหม่"  ,technicianId: 7 ,repairId  : 1},

// ]

// const useTechnician = [
//   { name : 'ช่างออฟ',phon:"4547667", repairId : 1 },
//   { name : 'ช่างบีม', phon:"6859675", repairId  : 2},
//   { name : 'ช่างบอย',phon:"5437856", repairId : 3 },
// ]

// const adminData = [
//   { name : 'admin1' , password : '1234567' , email: 'admin@gmail.mail' ,phon : "4738575", repairId: 1 },
// ]

// const addstatus= [
//   { status : "รอดำเนินการ" },
// ]





const run = async () => {

  // await prisma.status.createMany({
  //   data : useStatus
  // })

  // await prisma.technician.createMany({
  //   data : useTechnician
  // })

  // await prisma.repairEdit.createMany({
  //   data : repairEdit
  // })
  // await prisma.status.createMany({
  //   data : addstatus
  // })


  // await prisma.repair.createMany({
  //   data : repairlist

  // })
  // await prisma.admin.createMany({
  //   data : adminData
  // })
  // await prisma.repairEdit.createMany({
  //   data : repairEdit
  // })
}

run()
