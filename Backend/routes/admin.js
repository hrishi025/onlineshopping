const { request, response } = require('express')
const express = require('express')
const db = require('../db')
const utils = require('../utils')

// router will be used to add routes in the app server
const router = express.Router()


router.get('/admin/user',(request ,response)=>
{
   const statement =`select user_id,user_name,user_email,user_role,	
   CASE
   WHEN user_status = 0 THEN 'not verified'
   WHEN user_status = 1 THEN 'verified'
   ELSE 'suspended'
  END AS user_status from user order by user_role asc`
   db.execute(statement,(error ,data)=>{
      response.send(utils.createResult(error,data))
   })
})

router.post('/admin/approve_seller/:user_id',(request ,response)=>
{
   const{user_id}=request.params
   const statement =`update user set user_role = 'SELLER' where user_id ='${user_id}'`
   db.execute(statement,(error ,data)=>{
      response.send(utils.createResult(error,data))
   })
})
router.post('/admin/suspend_user/:user_id',(request ,response)=>
{
   const{user_id}=request.params
   const statement =`update user set user_status = 2 where user_id ='${user_id}'`
   db.execute(statement,(error ,data)=>{
      response.send(utils.createResult(error,data))
   })
})

module.exports = router;