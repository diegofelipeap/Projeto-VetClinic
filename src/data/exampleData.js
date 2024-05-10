// data/exampleData.js

const exampleData = [
    {
        id: 1,
        name: "João Silva",
        phone: "85989323895",
        email: "joao.silva@example.com",
        date_of_birth: "1990-05-15",
        zip_code: "61760000",
        pets: [
            {
                id: 1,
                name: "Lilo",
                species: "dog",
                carry: "p",
                weight: 5,
                date_of_birth: "2018-03-10"
            }
        ]
    },
    {
        id: 2,
        name: "Maria Oliveira",
        phone: "81987236541",
        email: "maria.oliveira@example.com",
        date_of_birth: "1985-09-25",
        zip_code: "51020000",
        pets: [
            {
                id: 2,
                name: "Whiskers",
                species: "cat",
                carry: "m",
                weight: 3.5,
                date_of_birth: "2020-07-02"
            },
            {
                id: 3,
                name: "Rex",
                species: "dog",
                carry: "g",
                weight: 12,
                date_of_birth: "2019-01-15"
            }
        ]
    }
];

module.exports = exampleData;
