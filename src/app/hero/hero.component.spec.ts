import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { HeroComponent } from "./hero.component"

describe('HeroComponent', () => {
    let fixture: ComponentFixture<HeroComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            schemas: [NO_ERRORS_SCHEMA]
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

    it('should render the hero name in an anchor tag', () => {
        //arrange
        fixture = TestBed.createComponent(HeroComponent);
        fixture.componentInstance.hero = { id: 1, name: 'SuperDude', strength: 3 };
        let de = fixture.debugElement.query(By.css('a'));

        //act
        fixture.detectChanges();

        //assert
        expect(fixture.nativeElement.querySelector('a').textContent).toContain('SuperDude');
        expect(de.nativeElement.textContent).toContain("SuperDude");
    })
})