module.exports = mongoose => {
    var schema = mongoose.Schema({
        name: String,
        vocal: Boolean,
        private: Boolean,
        status: Number,
        littoralId: String,
        user: String,
        limitPlayers: Number,
        players: Array,
        roles: Array
    }, { timestamps: true });

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Games = mongoose.model("games", schema);
    return Games;
};