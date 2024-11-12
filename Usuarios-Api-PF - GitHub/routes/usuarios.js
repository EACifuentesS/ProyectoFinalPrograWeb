var express = require('express');
var db = require('../db');
var router = express.Router();

router.get('/', async (req, res) => {
    res.status(200);
    res.json({ message: "Estudiantes" });
})

router.get('/all', async (req, res) => {
    try {
        const result = await db.query('select * from usuarios')
        res.status(200);
        res.json({ success: true, data: result.rows })
    } catch (err) {
        res.status(500);
        res.json({ success: false });
        console.log(err);
    }
})

router.get('/findOne/:id_usuario', async (req, res) => {
    try {
        const result = await db.query('select id_usuario, usuario, nombre_completo from usuarios where id_usuario = $1', [req.params.id_usuario])
        res.status(200);
        res.json({ success: true, data: result.rows })
    } catch (err) {
        res.status(500);
        res.json({ success: false });
        console.log(err);
    }
})

router.get('/mensajes/:id_usuario', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM mensajes WHERE id_usuario = $1 ORDER BY fechamensaje DESC LIMIT 3',
            [req.params.id_usuario]);
        res.status(200).json({ success: true, data: result.rows });
    } catch (err) {
        res.status(500).json({ success: false });
        console.log(err);
    }
});

router.get('/estadisticas', async (req, res) => {
    try {
        // Contar los usuarios
        const usersCountResult = await db.query('SELECT COUNT(*) FROM usuarios');
        const usersCount = usersCountResult.rows[0].count;

        // Contar los mensajes
        const messagesCountResult = await db.query('SELECT COUNT(*) FROM mensajes');
        const messagesCount = messagesCountResult.rows[0].count;

        // Enviar la respuesta con los datos
        res.status(200).json({
            success: true,
            data: {
                usuarios: usersCount,
                mensajes: messagesCount,
            },
        });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error en el servidor' });
        console.error(err);
    }
});

// Obtener los mensajes del usuario
// Para el endpoint de mis mensajes
router.get('/misMensajes/:id_usuario', async (req, res) => {
    try {
        const userId = req.params.id_usuario;
        const result = await db.query('SELECT * FROM mensajes WHERE id_usuario = $1 ORDER BY fechamensaje DESC', [userId]);
        
        console.log("Mis mensajes:", result.rows);  // <-- Verifica los datos aquí
        
        res.status(200).json({ success: true, data: result.rows });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Error al obtener los mensajes' });
    }
});

// Para el endpoint de mensajes de usuarios seguidos
router.get('/mensajesSeguidos/:id_usuario', async (req, res) => {
    try {
        const { id_usuario } = req.params;
        
        const query = `
            SELECT m.*
            FROM mensajes m
            JOIN seguidores s ON m.id_usuario = s.ID_Seguidores
            WHERE s.ID_Seguidos = $1
            ORDER BY m.fechamensaje DESC;
        `;
        const result = await db.query(query, [id_usuario]);
        
        console.log("Mensajes de usuarios seguidos:", result.rows);  // <-- Verifica los datos aquí
        
        res.status(200).json({ success: true, data: result.rows });
    } catch (err) {
        console.error('Error al obtener los mensajes de los usuarios seguidos:', err);
        res.status(500).json({ success: false, message: 'Error en el servidor', error: err.message });
    }
});






router.get('/all/mensajes/generate', async (req, res) => {
    try {
        const result = await db.query('select * from mensajes order by fechamensaje desc limit 3;');
        res.status(200);
        res.json({ success: true, data: result.rows });
    } catch (err) {
        res.status(500);
        res.json({ success: false });
        console.log(err);
    }
});



router.get('/findOneId/', async (req, res) => {
    try {
        const result = await db.query('select id_usuario from usuarios where usuario = $1',
            [req.params.Usuario])
        res.status(200);
        res.json({ success: true, data: result.rows })
    } catch (err) {
        res.status(500);
        res.json({ success: false });
        console.log(err);
    }
})

router.post('/create', async (req, res) => {
    try {
        var data = req.body;
        const result = await db.query('insert into USUARIOS (Usuario, Nombre_Completo, contrasena) values($1,$2,$3)',
            [data.Usuario, data.nombre_completo, data.contrasena]
        );
        res.status(200);
        res.json({ success: true, message: 'Usuario Creado' });
    } catch (err) {
        res.status(500);
        res.json({ success: false });
        console.log(err);
    }
})

router.post('/findUser', async (req, res) => {
    try {
        var data = req.body;

        // Consulta para verificar si existe el usuario con la contraseña proporcionada
        const result = await db.query('SELECT ID_Usuario, Usuario, Nombre_Completo FROM USUARIOS WHERE Usuario = $1 AND contrasena = $2',
            [data.Usuario, data.contrasena]);

        // Si no hay resultados, devuelve un error
        if (result.rows.length === 0) {
            return res.status(401).json({ success: false, message: 'Usuario o contraseña incorrectos' });
        }

        // Si el usuario es encontrado, responde con éxito
        res.status(200).json({ success: true, data: result.rows[0] });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error en el servidor' });
        console.log(err);
    }
})

//Crear los mensajes
router.post('/create/mensajes', async (req, res) => {
    try {
        var data = req.body;
        const result = await db.query(
            'INSERT INTO mensajes (mensajes, fechamensaje, id_usuario) VALUES($1,$2,$3)', [data.mensajes, data.fechamensaje, data.id_usuario]);
        res.status(200);
        res.json({ success: true, message: "mensaje creado" });

    } catch (err) {
        res.status(500);
        res.json({ success: false });
        console.log(err);

    }
})

router.get('/all/mensajes', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM mensajes');
        res.status(200);
        res.json({ success: true, data: result.rows });

    } catch (err) {
        res.status(500);
        res.json({ success: false });
        console.log(err);
    }
})

router.get('/all/mensajes/:id_usuario', async (req, res) => {
    try {
        const result = await db.query('select * from mensajes where id_usuario in (1,3) order by fechamensaje desc limit 3;');
        res.status(200);
        res.json({ success: true, data: result.rows });

    } catch (err) {
        res.status(500);
        res.json({ success: false });
        console.log(err);
    }
})

router.put("/update", async (req, res) => {
    try {
        var data = req.body;
        const result = await db.query('update usuarios set usuario = $1, nombre_completo = $2 where ID_Usuario = $3',
            [data.Usuario, data.Nombre_Completo, data.ID_Usuario]
        );
        res.status(200);
        res.json({ success: true, message: 'Usuario Modficado' });

    } catch (err) {
        res.status(500);
        res.json({ success: false });
        console.log(err);
    }
})

router.delete("/delete/:identifier", async (req, res) => {
    try {
        const result = await db.query('delete from usuarios where identifier = $1',
            [req.params.ID_Usuario]
        );
        res.status(200);
        res.json({ success: true, message: 'Usuario Eliminado' });

    } catch (err) {
        res.status(500);
        res.json({ success: false });
        console.log(err);
    }
})




module.exports = router;