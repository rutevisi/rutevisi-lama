import mongoMiddleware from '../../../../lib/api/mongo-middleware';
import apiHandler from '../../../../lib/api/api-handler';

export default mongoMiddleware(async (req, res, connection, models) => {
    const { method } = req;
    const { query: { id } } = req;
    
    return new Promise(resolve => {
        apiHandler(res, method, {
            GET: (response) => {
                models.UserResult.findOne({_id: id}, (error, user) => {
                if (error) {
                    connection.close();
                    response.status(500).json({ error });
                    resolve();
                } else {
                    response.status(200).json(user);
                    connection.close();
                    resolve();
                }
                })
            },
        });
    })
})