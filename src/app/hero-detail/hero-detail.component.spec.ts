import { TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { HeroService } from "../hero.service";
import { HeroDetailComponent } from "./hero-detail.component";
import { Location } from "@angular/common";
import { of } from "rxjs";
import { FormsModule } from "@angular/forms";

describe('HeroDetailComponent', () => {
    let mockActivatedRoute;
    let mockHeroService;
    let mockLocation;
    let fixture;

    beforeEach(() => {
        mockActivatedRoute = {
            snapshot: { paramMap: { get: () => '3' } }
        }
        mockHeroService = jasmine.createSpyObj(['getHero', 'updateHero']);
        mockLocation = jasmine.createSpyObj(['back']);

        TestBed.configureTestingModule({
            imports:[FormsModule],
            declarations: [HeroDetailComponent],
            providers: [
                { provide: ActivatedRoute, useValue: mockActivatedRoute },
                { provide: HeroService, useValue: mockHeroService },
                { provide: Location, useValue: mockLocation }
            ]
        });

        fixture = TestBed.createComponent(HeroDetailComponent);
    })

    it('should render hero name in a h2 tag', () => {
        //arrange
        mockHeroService.getHero.and.returnValue(of({ id: 1, name: 'SuperDude', strength: 3 }));

        //act
        fixture.detectChanges();

        //assert
        expect(fixture.nativeElement.querySelector('h2').textContent).toContain('SUPERDUDE');
    })
});