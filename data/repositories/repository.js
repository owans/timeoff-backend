module.exports = class Repository {
    constructor(model) {
        this.model = model;
    }

    all() {
        return this.model.fetchAll();
    }
}