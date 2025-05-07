// contacto.js
document.getElementById('form-contacto').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const mensaje = document.getElementById('mensaje').value;
  
    if (!nombre || !telefono || !mensaje) {
      alert('Por favor completá todos los campos.');
      return;
    }
  
    const respuesta = await fetch('http://localhost:3000/contacto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre, telefono, mensaje }),
    });
  
    const data = await respuesta.json();
    document.getElementById('respuesta').innerText = data.mensaje || 'Mensaje enviado';
  });