import mongoMiddleware from '../../../../lib/api/mongo-middleware';
import apiHandler from '../../../../lib/api/api-handler';

export default mongoMiddleware(async (req, res, connection, models) => {
    const { method } = req;

    const question = req.body.question;
    const flip = req.body.flip;

    return new Promise(resolve => {
        apiHandler(res, method, {
            POST: (response) => {
                models.FakboiQuestion.create({question, flip}, (error, user) => {
                    if (error) {
                        connection.close();
                        response.status(500).json({ error });
                    } else {
                        response.status(200).json('Question ADDED!');
                        connection.close();
                        resolve();
                    }
                })
            }
          });
    })
})