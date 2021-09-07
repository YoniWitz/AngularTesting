import { Component, Input, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { of } from "rxjs";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { HeroComponent } from "../hero/hero.component";
import { HeroesComponent } from "./heroes.component"

describe('Heroes Component', () => {
    let heroesComponent: HeroesComponent;
    let mockHeroService: any;
    let Heroes: Hero[];
    let fixture: ComponentFixture<HeroesComponent>;
    
    @Component({
        selector:'app-hero',
        template:'<div></div>'
    })
    class mockHeroComponent{
        @Input() hero:Hero;
    }

    beforeEach(() => {
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

        TestBed.configureTestingModule({
            declarations: [HeroesComponent, HeroComponent],
            providers: [{ provide: HeroService, useValue: mockHeroService }],
            schemas: [NO_ERRORS_SCHEMA]
        })

        fixture = TestBed.createComponent(HeroesComponent);

        Heroes = [
            { id: 1, name: 'SpiderDude', strength: 8 },
            { id: 2, name: 'WonderfulWoman', strength: 24 },
            { id: 3, name: 'SuperDude', strength: 55 }
        ]

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

    it('should set heroes correctly from the service', () => {
        //arrange
        mockHeroService.getHeroes.and.returnValue(of(Heroes));

        //act 
        fixture.detectChanges();

        //assert
        expect(fixture.componentInstance.heroes.length).toBe(3);
    })

    it('should create one li for each hero', () => {
         //arrange
         mockHeroService.getHeroes.and.returnValue(of(Heroes));

         //act 
         fixture.detectChanges();

         //assert
         expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(3);
    })

    it('should render each hero as a HeroComponent', () => {
        //arrange
        heroesComponent.heroes = Heroes;
        mockHeroService.getHeroes.and.returnValue(of(Heroes));
       

        //act 
        fixture.detectChanges();

        //assert
        const des = fixture.debugElement.queryAll(By.directive(HeroComponent));
        expect(des.length).toBe(3);
        let i =0;
        des.forEach(de => expect(de.componentInstance.hero).toEqual(Heroes[i++]));
    })
})