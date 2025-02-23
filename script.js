const form = document.getElementById('serverForm');
const serverList = document.getElementById('serverList');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const serverData = {
        name: document.getElementById('name').value,
        ram: document.getElementById('ram').value,
        disk: document.getElementById('disk').value,
        type: document.getElementById('type').value
    };

    const response = await fetch('http://localhost:3000/api/servers/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(serverData)
    });

    const result = await response.json();
    console.log(result);
    loadServers();
});

async function loadServers() {
    const response = await fetch('http://localhost:3000/api/servers');
    const servers = await response.json();

    serverList.innerHTML = servers.map(server => `
        <div class="server">
            <h3>${server.name}</h3>
            <p>RAM: ${server.ram} GB</p>
            <p>Disk: ${server.disk} GB</p>
            <p>Type: ${server.type}</p>
        </div>
    `).join('');
}
