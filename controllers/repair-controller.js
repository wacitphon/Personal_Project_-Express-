const db = require('../models/db')


// แสดงชื่อผู้ใช้ที่ส่งซ่อม
exports.getByUser = async (req, res, next) => {
  try {
    const todos = await db.repair.findMany({
      where: { userId: req.user.id },
      include: {
        user: {
          select: { username: true } // เลือกเฉพาะฟิลด์ username ของ user
        }
      }
    })
    res.json({todos})
  } catch (err) {
    next(err)
  }
}
////////////////////////




//ร้องขอการส่งซ่อม
exports.createRepair = async (req, res, next) => {
  // validate req.body
  const data = req.body
  // console.log(typeof new Date(data.requesDate))
  try{
    const rs = await db.repair.create({
       data : { ...data, userId : req.user.id}  
    })
    res.json({ msg: 'Create OK' , result : rs })
  }catch(err) {
    next(err)
  }
}
////////////////////


//อันนี้คื่อเวลาแก้จะไป upadte รายการ
exports.updateRepair = async (req, res, next) => {
  // validate req.params + req.body
  const {id} = req.params
  const data = req.body
  try {
    const rs = await db.repair.update({
      data :  {...data},
      where: { id : +id , userId : req.user.id} 
    })
    res.json({msg: 'Update ok', result: rs})
  }catch(err){
    next(err)
  }
}
/////////////////////////////



//ลบรายการซ่อม
 exports.deleterepair = async (req, res, next) => {
   const {id} = req.params
   try {
     const rs = await db.repair.delete({ where : {id : +id, userId: req.user.id}})
     res.json({msg: 'Delete ok', result : rs})
   }catch(err) {
     next(err)
   }
}
////////////////////////////////


exports.getAllStatus = async (req, res, next) => {
  try {
    const rs = await db.repair.findMany({
      where: {
        user_id: req.user.id
      },
      include: {
        repairedit: {
          select: {
            status: true
          }
        }
      }
    });
    res.json(rs);
  } catch (error) {
    next(error);
  }
};


//แสดงข้อมูลของ repair และ ผู้ใช้
exports.adminShowRepair = async (req,res,next) => {
  try {
      const rs = await db.repair.findMany({
        include: {
          user: {
            select: { username: true,phon: true } // เลือกเฉพาะฟิลด์ username ของ user
          }
        }
      })
      res.json(rs)
  } catch (error) {
     next(error)
  }
}


