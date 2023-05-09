import {Router} from 'express'
import {getEmployees,createEmployee,updateEmployee,deleteEmployee,getEmployeeById} from '../controllers/employess.controller.js'

const router = Router()

router.get('/employees', getEmployees)
router.get('/employee/:id', getEmployeeById)
router.post('/employee',createEmployee)
router.put('/employee/:id',updateEmployee)
router.delete('/employee/:id',deleteEmployee)

export default router