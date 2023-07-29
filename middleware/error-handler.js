import { CustomApiError } from '../errors/custom-error.js';

const errorHandleMiddleware = (err, req, res, next) => {
    if (err instanceof CustomApiError) {
        return res.status(err.statusCode).json({ msg: err.message });
    }
    return res.status(err.status).json({ msg: 'Something went wrong, please try again' });
};

export default errorHandleMiddleware;
