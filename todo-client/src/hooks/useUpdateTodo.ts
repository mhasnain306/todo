import { TodoType } from "@/App"
import { useState } from "react"

const useUpdateTodo = () => {

    const [updateTodoData, setData] = useState<TodoType>({} as TodoType)
    const updateTodo = async (todo: TodoType, token: string) => {
        const updatedTodo = {
            "content": todo.content,
            "completed": todo.completed
        }
        const url = "http://localhost:3000/api/todos/" + todo._id;
        const result = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": token
            },
            body: JSON.stringify(updatedTodo)
        });

        const resultJson = await result.json();

        setData(resultJson);



    }
    return { updateTodo, updateTodoData }
}

export default useUpdateTodo;