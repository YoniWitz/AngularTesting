import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroComponent } from "./hero.component"

describe('HeroComponent', () => {
    let fixture: ComponentFixture<HeroComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            schemas:[NO_ERRORS_SCHEMA]
        });
    });

    it('should have the correct hero', () => {
        //arrange
        fixture = TestBed.createComponent(HeroComponent);

        //act
        fixture.componentInstance.hero = { id: 1, name: 'SuperDude', strength: 3 };

        //assert
        expect(fixture.componentInstance.hero.name).toEqual('SuperDude');
    })
})