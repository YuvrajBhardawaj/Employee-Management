import connection from "./mysql.config.js";

export async function getEmpDetails(){
    try{
        const data = await connection.query("SELECT id, name, email, completedTasks, activeTasks, tasksFailed FROM employees");
        return { success:true, message:"SuccessFul", data : data[0] };
    }
    catch(err){
        return { success : false, message : err.message};
    }
}

export async function getAllTasks() {
    try{
        const data = await connection.query("SELECT t.task_name AS task_name, t.created_at AS created_at, COUNT(CASE WHEN ta.status = 'active' THEN ta.employee_id END) AS employee_count FROM tasks t LEFT JOIN task_assignments ta ON t.id = ta.task_id GROUP BY t.id;")
        return { success:true, message:"SuccessFul", data : data[0] };
    }
    catch(err){
        return { success : false, message : err.message};
    }
}

export async function getEmpTask(id) {
    try{
        const data = await connection.query("SELECT t.task_name, et.status, t.created_at FROM employees e JOIN task_assignments et ON e.id = et.employee_id JOIN tasks t ON et.task_id = t.id where e.id=? ORDER BY CASE WHEN et.status = 'active' THEN 1 WHEN et.status = 'completed' THEN 2 WHEN et.status = 'failed' THEN 3 ELSE 4 END;",[id])
        return { success:true, message:"SuccessFul", data : data[0] };
    }
    catch(err){
        return { success : false, message : err.message};
    }
}