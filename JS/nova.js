document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const taskName = document.getElementById('taskName').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskStatus = document.getElementById('taskStatus').value;

    // Salvar a nova tarefa no localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({ name: taskName, description: taskDescription, status: taskStatus });
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Voltar para o quadro Kanban
    window.location.href = "index.html";
});