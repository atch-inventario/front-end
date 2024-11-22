const express = require('express');
const path = require('path');

// Configuración
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Rutas 
app.get('/', (req, res) => {
  res.render('home/index');
});
app.get('/inventario', (req, res) => {
  res.render('inventario/lista');
});
//-----------------------
app.get('/articulos', (req, res) => {
  res.render('articulos/lista');
});
app.get('/articulos/nuevo', (req, res) => {
  res.render('articulos/nuevo-editar', { id: null });
});
app.get('/articulos/editar/:id', (req, res) => {
  res.render('articulos/nuevo-editar', { id: req.params.id });
});
//---------------------------
app.get('/entradas', (req, res) => {
  res.render('entradas/lista');
});
app.get('/entradas/nuevo', (req, res) => {
  res.render('entradas/nuevo-editar', { id: null });
});
app.get('/entradas/editar/:id', (req, res) => {
  res.render('entradas/nuevo-editar', { id: req.params.id });
});
//---------------------------
app.get('/salidas', (req, res) => {
  res.render('salidas/lista');
});
app.get('/salidas/nuevo', (req, res) => {
  res.render('salidas/nuevo-editar', { id: null });
});
app.get('/salidas/editar/:id', (req, res) => {
  res.render('salidas/nuevo-editar', { id: req.params.id });
});
//----------------------------
app.get('/tipos-documento', (req, res) => {
  res.render('tipos-documento/lista');
});
app.get('/tipos-documento/nuevo', (req, res) => {
  res.render('tipos-documento/nuevo-editar', { id: null });
});
app.get('/tipos-documento/editar/:id', (req, res) => {
  res.render('tipos-documento/nuevo-editar', { id: req.params.id });
});
//-----------------------------
app.get('/unidades-medida', (req, res) => {
  res.render('unidades-medida/lista');
});
app.get('/unidades-medida/nuevo', (req, res) => {
  res.render('unidades-medida/nuevo-editar', { id: null });
});
app.get('/unidades-medida/editar/:id', (req, res) => {
  res.render('unidades-medida/nuevo-editar', { id: req.params.id });
});

// Servidor
app.listen(PORT, () => {
  console.log(`\nServidor corriendo en http://localhost:${PORT}`);
});



/*--------------------------------------------------------//
npm init -y
npm install express ejs
npm list --depth=0
//-------------------------------------------------------*/