import connection from "./mysql.config.js";
export async function getTasks(id) {
    try{
        const data = await connection.query("SELECT t.task_name AS task_name, t.created_at AS created_at, ta.status as status FROM tasks t RIGHT JOIN task_assignments ta ON t.id = ta.task_id where ta.employee_id=?;",[id]);
        return { success:true, message:"SuccessFul", data : data[0] };
    }
    catch(err){
        console.log(err);
        return { success:false, message:err.message};
    }
}