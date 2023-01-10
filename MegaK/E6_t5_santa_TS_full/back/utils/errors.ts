export class ValidationError extends Error {}
export class NotFoundError  extends Error {}

export const handleError = (err: any, req: any, res: any, next: any) => {
    
    if (err instanceof NotFoundError) {
        res
            .status(404)
            .json({
                message: 'Nie można znaleźć elementu o danym ID.',
            });
        return;
    }
    
    console.error(err);

    res
        .status(err instanceof ValidationError ? 400 : 500)
        .json({
            //message: err.message,
            message: err instanceof ValidationError ? err.message :  'Przepraszamy, spróbuj ponownie za kilka minut.'
        });
};
