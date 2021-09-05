import { MessageService } from "./message.service"

describe('MessageService', () => {
    let service: MessageService;

    beforeEach(() => {

    })

    it('should have no messages to start', () => {
        //arrange
        service = new MessageService();
        
        //assert
        expect(service.messages.length).toBe(0);
    })

    it('should add a message when add is called', () => {
        //arrange
        service = new MessageService();

        //act
        service.add("hello");

        //assert
        expect(service.messages.length).toBe(1);
    })

    it('should clear the messages when clear is called', () => {
        //arrange
        service = new MessageService();
        service.add("hello");

        //act
        service.clear();

        //assert
        expect(service.messages.length).toBe(0);
    })
})