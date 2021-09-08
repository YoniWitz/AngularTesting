import { TestBed } from "@angular/core/testing";
import { HeroService } from "./hero.service";
import { MessageService } from "./message.service";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('HeroService', () => {
    let mockMessageService;
    let httpTestingController: HttpTestingController;
    let heroService: HeroService;

    beforeEach(() => {
        mockMessageService = jasmine.createSpyObj(['add']);

        TestBed.configureTestingModule({
            providers: [HeroService,
                { provide: MessageService, useValue: mockMessageService }
            ],
            imports: [HttpClientTestingModule]
        });

        httpTestingController = TestBed.inject(HttpTestingController);
        heroService = TestBed.inject(HeroService);
    });

    it("should call get with correct url",()  =>{
        //arrange
        let id  = 4;
        heroService.getHero(id).subscribe(hero =>{
            expect(hero.id).toBe(id);
        });

        const req = httpTestingController.expectOne('api/heroes/4');

        req.flush({id: id, name: 'SuperDude', strength: 100});
        expect(req.request.method).toBe('GET');
    })
});

