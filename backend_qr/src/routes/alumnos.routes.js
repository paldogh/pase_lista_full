

import { Router } from 'express';
import { obtenerAlumnos } from '../controllers/alumnos.controllers.js';
const router = Router();
router.get('/', obtenerAlumnos);
export default router;