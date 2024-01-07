describe('Test in the App file', () => {
    test('should be 30', () => {

        // Arrange
        const num1 = 10;
        const num2 = 20;

        // Act
        const result = num1 + num2;

        // Assert
        expect(result).toBe(30);
    });
})