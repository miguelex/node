import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case';
import { ServerApp } from './server.app';

describe ('Server App', () => {

    const options = {
        base: 5,
        limit: 10,
        showTable: false,
        fileDestination: 'test-destination',
        fileName: 'test-filename'
    }

    beforeEach(() => {
        jest.resetAllMocks();
    })

    test('Should create a ServerApp instance', () => {
        const serverApp = new ServerApp();

        expect(serverApp).toBeInstanceOf(ServerApp);
        expect(typeof ServerApp.run).toBe('function');
    })


    test('should run ServerApp with options', () => {

        // Prueba de integracion 

        const logSpy = jest.spyOn(console, 'log');
        const createTableSpy = jest.spyOn(CreateTable.prototype, 'execute');
        const saveFileSpy = jest.spyOn(SaveFile.prototype, 'execute');

        ServerApp.run(options);

        expect(logSpy).toHaveBeenCalledTimes(2);
        expect(logSpy).toHaveBeenCalledWith('Server is running...');
        expect(logSpy).toHaveBeenCalledWith(expect.any(String));
        expect(logSpy).toHaveBeenCalledWith('Archivo creado!!');

        expect(createTableSpy).toHaveBeenCalledTimes(1);
        expect(createTableSpy).toHaveBeenCalledWith({base: options.base, limit: options.limit});

        expect(saveFileSpy).toHaveBeenCalledTimes(1);
        expect(saveFileSpy).toHaveBeenCalledWith({
            fileContent: expect.any(String),
            fileName: options.fileName,
            fileDestination: options.fileDestination
        });
    })

    test('should run with custom values mocked', () => {
        
        // Prueba unitaria 

        const logMock = jest.fn();
        const logErrorMock = jest.fn();
        const createMock = jest.fn().mockReturnValue('1 x 5 = 5');
        const saveFileMock = jest.fn().mockReturnValue(true);

        console.log = logMock;
        console.error = logErrorMock
        CreateTable.prototype.execute = createMock;
        SaveFile.prototype.execute = saveFileMock;
        
        ServerApp.run(options);

        expect(logMock).toHaveBeenCalledWith('Server is running...');
        expect(createMock).toHaveBeenCalledWith({base: options.base, limit: options.limit});
        expect(saveFileMock).toHaveBeenCalledWith({
            fileContent: expect.any(String),
            fileName: options.fileName,
            fileDestination: options.fileDestination
        });
        expect(logMock).toHaveBeenCalledWith('Archivo creado!!');
    })    
})