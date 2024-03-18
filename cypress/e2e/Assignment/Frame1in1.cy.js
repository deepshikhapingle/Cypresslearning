// 1. Go to  https://the-internet.herokuapp.com/nested_frames
// 2. Swich to middle frame 
// 3. Verify the text is "MIDDLE"

describe("PopUP", () => {

    beforeEach(() => {
        cy.visit("https://the-internet.herokuapp.com/nested_frames")
    })

    it("test1", () => {

        cy.frameLoaded('frame[src="/frame_top"]').frameLoaded('frame[src="/frame_middle"]');

    })
})

