import { of } from "rxjs";
import { Hero } from "../hero";
import { HeroesComponent } from "./heroes.component"

describe('Heroes Component', () => {
    let heroesComponent: HeroesComponent;
    let mockHeroService;
    let Heroes: Hero[];

    beforeEach(() => {
        Heroes = [
            { id: 1, name: 'SpiderDude', strength: 8 },
            { id: 2, name: 'WonderfulWoman', strength: 24 },
            { id: 3, name: 'SuperDude', strength: 55 }
        ]

        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

        heroesComponent = new HeroesComponent(mockHeroService);
    })

    it('delete a hero from the list', () => {
        //arrange
        heroesComponent.heroes = Heroes;
        mockHeroService.deleteHero.and.returnValue(of(true));
        //act
        heroesComponent.delete(Heroes[0]);

        //assert
        expect(heroesComponent.heroes.length).toBe(2);
    })

    it('should call deleteHero method from service', () => {
        //arrange 
        heroesComponent.heroes = Heroes;
        mockHeroService.deleteHero.and.returnValue(of(true));

        //act
        heroesComponent.delete(Heroes[2]);

        //Assert
        expect(mockHeroService.deleteHero).toHaveBeenCalledWith(Heroes[2]);
    })


})