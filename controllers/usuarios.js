const { response, request } = require('express');


const usuariosGet = (req = request,res = response)=> {
    const { q , nombre = 'no name', page=1, limit } = req.query;
    res.status(403).json({
        ok: true,
        msg: 'GET API ON CONTROLLER',
        q,
        nombre,
        page,
        limit
    });
}

const usuariosPatch = (req,res = response)=> {
    res.status(403).json({
        ok: true,
        msg: 'PATCH API ON CONTROLLER'
    });
}

const usuariosPost = (req,res = response)=> {
    const body = req.body;

    res.status(403).json({
        ok: true,
        msg: 'POST API ON CONTROLLER',
        body
    });
}

const usuariosDelete = (req = request,res = response)=> {
    const id = req.params.id;
    res.status(403).json({
        ok: true,
        msg: 'DELETE API ON CONTROLLER',
        id
    });
}

const usuariosPut = (req,res)=> {
    const id = req.params.id;
    res.status(403).json({
        ok: true,
        msg: 'put Api ON CONTROLLER',
        id
    });
}

const rutas = {
    usuariosGet,
    usuariosPut,
    usuariosDelete,
    usuariosPost,
    usuariosPatch
};

module.exports = rutas;