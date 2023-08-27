const numeroDeEstudiantes = 10;
        let TotalNotas = 0;

        for (let i = 1; i <= numeroDeEstudiantes; i++) {
    const nota = Number(prompt(`Ingrese la nota del estudiante ${i}:`));
    TotalNotas += nota;
    }
        const promedio = TotalNotas / numeroDeEstudiantes;

        alert(`El promedio del grupo es: ${promedio.toFixed(2)}`);
