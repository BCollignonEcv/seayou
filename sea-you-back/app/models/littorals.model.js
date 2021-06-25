module.exports = mongoose => {
    var schema = mongoose.Schema({
        name: String,
        region: String,
        enjeux: Number,
        scenario: String,
        pathImg: String
    }, { timestamps: true });

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Littorals = mongoose.model("littorals", schema);
    return Littorals;
};