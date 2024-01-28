var express = require('express');
var router = express.Router();
var novedadesModels = require('../../models/novedadesModels');

router.get('/', async function(req, res, next) {
  var novedades =await novedadesModels.getNovedades();
  res.render('admin/novedades', { 
    layout: 'admin/layout',
    usuario: req.session.nombre,
    novedades
  });
});

router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', { 
    layout: 'admin/layout'
  });
});

router.post ("/agregar", async (req, res, next) => {
  try {
    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != ""){
      await novedadesModels.insertNovedad(req.body);
      res.redirect('/admin/novedades')
    } else {
      res.render ('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos.'
      })
    }
  } catch (error) {
    console.log (error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: "No se pudo agregar la Novedad."
    })
  }
})

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  await novedadesModels.deleteNovedadesById(id);
  res.redirect ('/admin/novedades');
});

router.get('/editar/:id', async (req, res, next) => {
  var id = req.params.id;
  var novedad = await novedadesModels.getNovedadesById(id);

  res.render('admin/editar',{
    layout: 'admin/layout',
    novedad
  })
});

router.post ("/editar", async (req, res, next) => {
  try {
    var obj ={
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo
    }
    console.log(obj)
    await novedadesModels.modificarNovedadById(obj, req.body.id);
    res.redirect('/admin/novedades');
  } catch (error) {
    console.log (error)
    res.render('admin/editar', {
      layout: 'admin/layout',
      error: true,
      message: "No se pudo editar la Novedad."
    })
  }
})

module.exports = router;