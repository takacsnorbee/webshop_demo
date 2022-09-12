export class responseProduct {
    constructor(product) {
        let { id = 0,
            name = "",
            categoryIds = [],
            header = {},
            pictures = [],
            description = "",
            country = "",
            city = "",
            price = 0,
            cityGps = "",
            agencyName = "",
            minPerson = 0,
            maxPerson = 0,
            start = "",
            end = "",
            quantity = 0,
            isValid = false } = product
        this.id = id;
        this.name = name;
        this.categoryIds = categoryIds;
        this.header = header;
        this.pictures = pictures;
        this.description = description;
        this.country = country;
        this.city = city;
        this.price = price;
        this.cityGps = cityGps;
        this.agencyName = agencyName;
        this.minPerson = minPerson;
        this.maxPerson = maxPerson;
        this.start = start;
        this.end = end;
        this.quantity = quantity;
        this.isValid = isValid;
    }
}