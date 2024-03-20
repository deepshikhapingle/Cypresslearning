describe("APT Test", () => {
    it("simple GET test", () => {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users",
            qs: {
                page: 2,
            },

        }).then((response) => {
            cy.log(JSON.stringify(response.body));
            expect(response.status).to.eq(200);
            cy.log(response.isOkStatusCode);
            cy.log(response.status);
            cy.log(JSON.stringify(response.headers));
            cy.log(response.duration)
            //expect(response.first_name).to.eq("Michael");
            let expectedbody = { "page": 2, "per_page": 6, "total": 12, "total_pages": 2, "data": [{ "id": 7, "email": "michael.lawson@reqres.in", "first_name": "Michael", "last_name": "Lawson", "avatar": "https://reqres.in/img/faces/7-image.jpg" }, { "id": 8, "email": "lindsay.ferguson@reqres.in", "first_name": "Lindsay", "last_name": "Ferguson", "avatar": "https://reqres.in/img/faces/8-image.jpg" }, { "id": 9, "email": "tobias.funke@reqres.in", "first_name": "Tobias", "last_name": "Funke", "avatar": "https://reqres.in/img/faces/9-image.jpg" }, { "id": 10, "email": "byron.fields@reqres.in", "first_name": "Byron", "last_name": "Fields", "avatar": "https://reqres.in/img/faces/10-image.jpg" }, { "id": 11, "email": "george.edwards@reqres.in", "first_name": "George", "last_name": "Edwards", "avatar": "https://reqres.in/img/faces/11-image.jpg" }, { "id": 12, "email": "rachel.howell@reqres.in", "first_name": "Rachel", "last_name": "Howell", "avatar": "https://reqres.in/img/faces/12-image.jpg" }], "support": { "url": "https://reqres.in/#support-heading", "text": "To keep ReqRes free, contributions towards server costs are appreciated!" } }
            expect(response.body).deep.eq(expectedbody)
            expect(response.body.data[0].email).deep.eq(expectedbody.data[0].email)
            expect(response.body.data[0].first_name).to.eq("Michael");
            expect(response.body.data[0].last_name).to.eq("Lawson");
            expect(response.body.data[0].id).to.eq(7);
        })

    })
    it("POST test", () => {
        cy.request({

            method: "POST",
            url: "https://reqres.in/api/users",
            body: {
                name: "morpheus",
                job: "leader"
            },

        }).then((resp) => {
            let expectedResponse = { "name": "morpheus", "job": "leader", "id": "369", "createdAt": "2024-03-19T07:23:10.341Z" }
            expect(resp.status).to.eq(201);
            cy.log(JSON.stringify(resp.body));
            expect(resp.body.name).to.eq(expectedResponse.name);


        })
    })

    it("single user GET test", () => {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users/2",

        }).then((res) => {

            cy.log(JSON.stringify(res.body));

            let expresponse = { "data": { "id": 2, "email": "janet.weaver@reqres.in", "first_name": "Janet", "last_name": "Weaver", "avatar": "https://reqres.in/img/faces/2-image.jpg" }, "support": { "url": "https://reqres.in/#support-heading", "text": "To keep ReqRes free, contributions towards server costs are appreciated!" } }
            expect(res.body.first_name).to.eq(expresponse.first_name)
            expect(res.body.text).to.eq(expresponse.text)
        })
    })

    it("Create POST test", () => {
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body: {
                name: "morpheus",
                job: "leader"
            },

        }).then((respo) => {
            cy.log(JSON.stringify(respo.body));
            let exprespo = { "name": "morpheus", "job": "leader", "id": "450", "createdAt": "2024-03-20T05:46:02.036Z" };
            expect(respo.body.name).to.eq(exprespo.name);
        })
    })
    it.only("simple PUT test", () => {
        cy.request({
            method: "PUT",
            url: "https://reqres.in/api/users/2",
            body: {

                "name": "morpheus",
                "job": "zion resident"
            },

        }).then((respon) => {
            cy.log(JSON.stringify(respon.body));
            let exprespo = { "name": "morpheus", "job": "zion resident", "updatedAt": "2024-03-20T08:49:28.006Z" };
            expect(respon.body.job).to.eq(exprespo.job);
        })
    })



})

