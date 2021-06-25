module.exports = mongoose => {
    var schema = mongoose.Schema({
        pseudo: String,
    }, { timestamps: true });

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Players = mongoose.model("players", schema);
    return Players;
};