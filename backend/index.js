import express from "express";
import { getEmpDetails, getAllTasks, getEmpTask } from "./admin.js";
import { getTasks } from "./employee.js";
import cors from "cors";

const app = express()
const port = 3000
app.use(express.json());
app.use(cors());
app.get('/admin/employees', async(req, res) => {
  res.send(await getEmpDetails());
})

app.get('/admin/tasks', async(req, res)=>{
  res.send(await getAllTasks());
})

app.get('/admin/employee/:id',async(req,res)=>{
  const id = req.params.id;
  res.send(await getEmpTask(id));
})
app.get('/employee/tasks', async(req, res)=>{
  res.send(await getTasks(1));
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})