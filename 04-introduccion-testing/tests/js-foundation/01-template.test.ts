import { emailTemplate } from "../../src/js-foundation/01-template"

describe("js-foundation/01-template", () => {
 test('emailTempalte should contain a greeting', () =>{
    expect(emailTemplate).toContain('Hi, ');
 })

 test('emailTemplate should contain {{name}} and {{OrderId}}', () => {
    expect(emailTemplate).toContain('{{name}}');
    expect(emailTemplate).toContain('{{orderId}}');

    expect(emailTemplate).toMatch(/{{name}}/);
    expect(emailTemplate).toMatch(/{{orderId}}/);


 })
})
