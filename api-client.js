const baseUrl = "http://localhost:3000/";


const apiGetTasks = async () => {
  const responce = await fetch(baseUrl, {
    headers: {'Content-Type': 'application/json'}
  });
  const data = await responce.json();
  console.log(data);
  return data;
}


const apiAddTask = async (task) => {
  let data = JSON.stringify(task);
  const result = await fetch(baseUrl, { method: "POST", body: data, headers: {'Content-Type': 'application/json'} })
  data = await result.json();
  return { id: data.name };
}

const apiDeleteTask = async (id) => {
  console.log(id);
  const result = await fetch(baseUrl + id, { method: "DELETE", headers: {'Content-Type': 'application/json'} })
  return result
}

