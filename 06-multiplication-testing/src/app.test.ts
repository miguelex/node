import { ServerApp } from './presentation/server.app';

describe ('Test app.ts', () => {
    test('should call server with values', async () => {
        
        const serverRunMock = jest.fn();

        ServerApp.run = serverRunMock;

        process.argv = ['node', 'app.ts', '-b', '10', '5', '-s', '-n', 'test-file', '-d', 'test-destination'];

        await import('./app');

        expect(serverRunMock).toBeCalledWith({
            base: 10,
            limit: 10,
            showTable: true,
            fileName: 'test-file',
            fileDestination: 'test-destination'
        });
    });
});