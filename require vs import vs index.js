is below code is perfect or can be improved with Imports rather than require and export const if needed ?
if yes please do and give improved code with example usage how it can  be used ?

give separate code for each file

const userDb = require('../../../../data-access/userDb');

//C:\Projects\Dhiwise\BACKEND\Room Booking\db\mongoDB\models\user.js
let mongoose = require('../connection.js');
const mongoosePaginate = require('mongoose-paginate-v2');
const idValidator = require('mongoose-id-validator');
const convertObjectToEnum = require('../../../utils/convertObjectToEnum');
const { USER_TYPES } = require('../../../constants/authConstant');
const bcrypt = require('bcrypt');
const authConstantEnum = require('../../../constants/authConstant');

const modelCustomLabels = {
    totalDocs: 'itemCount',
    docs: 'data',
    limit: 'perPage',
    page: 'currentPage',
    nextPage: 'next',
    prevPage: 'prev',
    totalPages: 'pageCount',
    pagingCounter: 'slNo',
    meta: 'paginator',
};
mongoosePaginate.paginate.options = { customLabels: modelCustomLabels };
const Schema = mongoose.Schema;
const schema = new Schema({
    password: { type: String },
    email: { type: String },
    userType: {
        type: Number,
        enum: convertObjectToEnum(USER_TYPES),
        required: true
    },
    isActive: { type: Boolean },
    isDeleted: { type: Boolean },
    mobileNo: { type: String },
    resetPasswordLink: {
        code: String,
        expireTime: Date
    },
    loginRetryLimit: {
        type: Number,
        default: 0
    },
    loginReactiveTime: { type: Date }
}
);
schema.pre('save', async function (next) {
    this.isDeleted = false;
    if (this.password) {
        this.password = await bcrypt.hash(this.password, 8);
    }
    next();
});
schema.pre('insertMany', async function (next, docs) {
    if (docs && docs.length) {
        for (let index = 0; index < docs.length; index++) {
            const element = docs[index];
            element.isDeleted = false;
        }
    }
    next();
});

schema.methods.isPasswordMatch = async function (password) {
    const user = this;
    return bcrypt.compare(password, user.password);
};
schema.method('toJSON', function () {
    const {
        _id, __v, ...object
    } = this.toObject({ virtuals: true });
    object.id = _id;
    delete object.password;
    return object;
});
schema.plugin(mongoosePaginate);
schema.plugin(idValidator);

const user = mongoose.model('user', schema);
module.exports = user;


//C:\Projects\Dhiwise\BACKEND\Room Booking\data-access\userDb.js
let User = require('../db/mongoDB/models/user');
let {
    create,
    updateOne,
    updateMany,
    deleteOne,
    deleteMany,
    findOne,
    findMany,
    count,
    paginate,
} = require('../db/mongoDB/dbService')(User);

module.exports = {
    create,
    updateOne,
    updateMany,
    deleteOne,
    deleteMany,
    findOne,
    findMany,
    count,
    paginate,
};


const userSchema = require('../../../../validation/schema/user');

// C:\Projects\Dhiwise\BACKEND\Room Booking\validation\schema\user.js
const joi = require('joi');
const {
    options, isCountOnly, populate, select
} = require('../commonFilterValidation');
const authConstantDefault = require('../../constants/authConstant');

const { USER_TYPES } = require('../../constants/authConstant');
const convertObjectToEnum = require('../../utils/convertObjectToEnum');

const createSchema = joi.object({
    password: joi.string().allow(null).allow(''),
    email: joi.string().allow(null).allow(''),
    userType: joi.number().allow(0),
    isActive: joi.boolean(),
    isDeleted: joi.boolean(),
    mobileNo: joi.string().allow(null).allow(''),
    resetPasswordLink: joi.object({
        code: joi.string(),
        expireTime: joi.date().options({ convert: true })
    })
}).unknown(true);

const createValidation = require('../../../../validation')(userSchema.createSchema);

// C:\Projects\Dhiwise\BACKEND\Room Booking\validation\index.js
const schemaValidation = (schema) => (data) => {
    const { error } = schema.validate(data, {
        abortEarly: false,
        convert: false,
    });
    if (error) {
        const message = error.details.map((el) => el.message).join('\n');
        return {
            isValid: false,
            message,
        };
    }
    return { isValid: true };
};
module.exports = schemaValidation;


const addUserUsecase = require('../../../../use-case/user/addUser')({
    userDb,
    createValidation
});
const addUser = userController.addUser(addUserUsecase);

/**
*addUser.js
*/
// C:\Projects\Dhiwise\BACKEND\Room Booking\use-case\user\addUser.js
const userEntity = require('../../entities/user');
const response = require('../../utils/response');
/**
 * @description : create new record of user in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addUser = ({
    userDb, createValidation
}) => async (dataToCreate, req, res) => {
    const validateRequest = await createValidation(dataToCreate);
    if (!validateRequest.isValid) {
        return response.validationError({ message: `Invalid values in parameters, ${validateRequest.message}` });
    }

    let user = userEntity(dataToCreate);
    // let newUser = createUserObject(dataToCreate);

    user = await userDb.create(user);
    return response.success({ data: user });
};
module.exports = addUser;
