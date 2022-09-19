class ValidationError extends Error {}
class NotFoundError  extends Error {}

const handleError = (err, req, res, next) => {
    /*
    if (err instanceof NotFoundError) {
        res
            .status(404)
            .render('error', {
                message: 'Nie można znaleźć elementu o danym ID.',
            });
        return;
    }
    */
   console.error(err);

   res
    .status(err instanceof ValidationError ? 400 : 500)
    .render('error', {
        //message: err.message,
        message: err instanceof ValidationError ? err.message :  'Przepraszamy, spróbuj ponownie za kilka minut.'
    });
};

module.exports = {
    ValidationError,
    NotFoundError,
    handleError,
};