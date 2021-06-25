module.exports = mongoose => {
    var schema = mongoose.Schema({
        fr: {
            name: String,
            scenario: String,
        },
        en: {
            name: String,
            scenario: String,
        },
        mandatory: Boolean,
        pathImg: String,
        littoralIds: Array,
    }, { timestamps: true });

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Roles = mongoose.model("roles", schema);
    return Roles;
};