import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    fileDestination: string;
    fileName: string;
}

export class ServerApp {
    static run ({base, limit, showTable, fileDestination, fileName}: RunOptions) {
        console.log('Server is running...');
        
        const table = new CreateTable().execute({base, limit});
        const wasCreated = new SaveFile()
            .execute({
                fileContent: table,
                fileName,
                fileDestination
            })

        if (showTable) console.log(table);

        (wasCreated) 
            ? console.log("Archivo creado!!")
            : console.log("No se pudo crear el archivo");
    }
}