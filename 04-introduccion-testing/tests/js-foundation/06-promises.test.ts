import { getPokemonById } from '../../src/js-foundation/06-promises';


describe ("js-foundation/06-promises.ts", () => {
    test('getPokemonId should return a pokemon', async () => {

        const PokemonId = 1;
        const pokemonName = await getPokemonById(PokemonId);
        
        expect(pokemonName).toBe('bulbasaur');
    })

    test('should return an error if pokemon does not exists', async () => {

        const PokemonId = 200000000;

        try {
            await getPokemonById(PokemonId);
            expect (true). toBeFalsy();
        }
        catch (error) {
            expect(error).toBe(`Pokemon not found with id ${PokemonId}`);
        }
        
        
    })
});