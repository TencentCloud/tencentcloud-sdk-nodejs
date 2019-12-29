/**
 * @inner
 */
class AbstractModel {
    constructor() {

    }

    /**
     * @inner
     */
    deserialize (params) {
    }

    /**
     * Serialize object into a JSON string.
     * @return {string}
     */
    to_json_string() {
        return JSON.stringify(this);
    }

    /**
     * Deserialize from a JSON string to an object.
     * @param  {string} dataString
     */
    from_json_string(dataString) {
        let params = JSON.parse(dataString);
        this.deserialize(params);
    }
}
module.exports = AbstractModel;
