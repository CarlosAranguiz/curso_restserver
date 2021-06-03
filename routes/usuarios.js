const { Router } = require('express');
const rutas = require('../controllers/usuarios');

const router = Router();

router.get('/', rutas.usuariosGet);

router.put('/:id', rutas.usuariosPut);

router.post('/', rutas.usuariosPost);

router.delete('/:id', rutas.usuariosDelete);

router.patch('/', rutas.usuariosPatch);



module.exports = router;