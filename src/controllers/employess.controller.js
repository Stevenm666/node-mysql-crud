import {pool} from '../db.js'

export const getEmployees = async (req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM employee')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({message:"something goes wrong"})
    }
};

export const getEmployeeById = async (req,res) => {
    const {id} = req.params
    try {
        const [rows] = await pool.query('SELECT * FROM employee where id = ?',[id])
        if (rows.length <= 0) return res.status(404).json({message:'Employee not found'})
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({message:"something goes wrong"})
    }
};

export const createEmployee = async (req,res) => {
    const {name,salary} = req.body
    try {
        const [rows] = await pool.query('INSERT INTO employee (name,salary) VALUES (?,?)',[name,salary])
        res.send({
            id: rows.insertId,
            name,
            salary
        })
    } catch (error) {
        return res.status(500).json({message:"something goes wrong"})
    }
};
 
export const updateEmployee = async (req,res) => {
    const {id} = req.params
    const {name,salary} = req.body
    try {
        const [result] = await pool.query("UPDATE employee SET name = ? , salary = ? WHERE id = ?",[name,salary,id]) //When i use PUT, this is to change all the data
        // const [result] = await pool.query("UPDATE employee SET name = IFNULL(?,name) , salary = IFNULL(?,salary) WHERE id = ?",[name,salary,id]) // when I use PATCH, this is for partial changes
        if(result.affectedRows === 0) return res.status(404).json({message:'Employee not updated'})
        const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?",[id])
        res.status(200).json(rows[0])
    } catch (error) {
        return res.status(500).json({message:"something goes wrong"})
    }
};

export const deleteEmployee = async (req,res) => {
    const {id} = req.params
    try {
        const [result] = await pool.query('DELETE FROM employee WHERE id = ?',[id])
        if(result.affectedRows <= 0) return res.status(404).json({message:'Employee not found'})
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message:"something goes wrong"})
    }
}; 

