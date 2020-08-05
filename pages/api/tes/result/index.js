import mongoMiddleware from '../../../../lib/api/mongo-middleware';
import apiHandler from '../../../../lib/api/api-handler';

export default mongoMiddleware(async (req, res, connection, models) => {
    const { method } = req;
    const resultObj = req.body.result;
    const result = JSON.stringify(resultObj)
    const testname = req.body.testname;
    
    return new Promise(resolve => {
        apiHandler(res, method, {
            GET: (response) => {
                models.UserResult.find({}, (error, user) => {
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
            POST: (response) => {
                models.UserResult.create({result, testname}, (error, tes) => {
                    if (error) {
                        connection.close();
                        response.status(500).json({ error });
                    } else {
                        response.status(200).json(tes);
                        connection.close();
                        resolve();
                    }
                })
            }
        });
    })
})