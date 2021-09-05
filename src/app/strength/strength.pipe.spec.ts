import { StrengthPipe } from "./strength.pipe";

describe('StrengthPipe', () => {
    let pipe: StrengthPipe;
    it('Should display weak if strength is 5', () => {
        //arrange
        let pipe = new StrengthPipe();

        //act 
        let value: string = pipe.transform(5);

        //assert
        expect(value).toEqual('5 (weak)');
    })
    it('Should display strong if strength is 10', () => {
        //arrange
        let pipe = new StrengthPipe();

        //act 
        let value: string = pipe.transform(10);

        //assert
        expect(value).toEqual('10 (strong)');
    })
    it('Should display unbelievable if strength is 21', () => {
        //arrange
        let pipe = new StrengthPipe();

        //act 
        let value: string = pipe.transform(21);

        //assert
        expect(value).toEqual('21 (unbelievable)');
    })
})