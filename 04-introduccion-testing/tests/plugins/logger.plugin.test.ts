import { logger as winstonLogger, buildLogger } from "../../src/plugins/logger.plugin";
import winston from 'winston';

describe('plugins/logger.plugin.ts', () =>{

    test('builLogger should return a function logger', () =>{
        const logger = buildLogger('test');

        expect(typeof logger.log).toBe('function');
        expect(typeof logger.error).toBe('function');
    })

    test('logger.log should log a message', () =>{

        const winstonLoggerMOck = jest.spyOn(winstonLogger, 'log');

        const message = 'test message';
        const service = 'test service';

        const logger = buildLogger(service);

        logger.log(message);
        expect(winstonLoggerMOck).toHaveBeenCalledWith(
            'info',
            expect.objectContaining({
                level: 'info',
                message,
                service, 
            }), 
        );
    })
})