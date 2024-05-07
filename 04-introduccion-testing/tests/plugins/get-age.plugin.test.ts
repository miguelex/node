import { getAge } from "../../src/plugins";

describe('plugins/get-age.plugin.ts', () => {
    test('getAge() should return the age of a person', () => {
        const birthdate = '1985-10-21';
        const age = getAge(birthdate);
        
        expect(age).toBe(39);
    })

    test('getAge should return current age', () => {
        const birthdate = '1985-20-21';
        const age = getAge(birthdate);

        const calculateAge = new Date().getFullYear() - new Date(birthdate).getFullYear();

        expect(age).toBe(calculateAge);
    })

    test('getAge should retunr 0 years', () =>{
        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);

        const birthdate = '1985-10-21';
        const age = getAge(birthdate);

        expect (age).toBe(0);
        expect (spy).toHaveBeenCalledWith();
    })
})