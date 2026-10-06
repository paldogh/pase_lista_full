import prisma from '../config/prisma.js';

export const obtenerAlumnos = async (req, res) => {
    try{
const alumnos = await prisma.alumno.findMany({

include:{
    grupo: true,
    tutor: true
} });

        return res.json ({
            success: true,
message: "Alumnos obtenidos correctamente",
            data: alumnos
       });

    }catch(error){
    console.log(error);

        return res.json ({
            success: false,
            message: "Error al obtener los alumnos"
        });

}
}