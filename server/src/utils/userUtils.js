const utils = require('./commonUtils');

class UserUtils {
    changeDatesFormat(user) {
        return {
            ...user,
            dateOfBirth: utils.changeDateFormat(user.dateOfBirth),
            registerDate: utils.changeDateFormat(user.registerDate),
            updatedDate: utils.changeDateFormat(user.updatedDate),
        }
    }
    convertDateToIsoString(user) {
        return {
            ...user,
            dateOfBirth: utils.dateToIsoString(user.dateOfBirth),
        }
    }
}

module.exports = new UserUtils();
