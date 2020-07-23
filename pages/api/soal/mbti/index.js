import shuffle from 'shuffle-array'
import mongoMiddleware from '../../../../lib/api/mongo-middleware';
import apiHandler from '../../../../lib/api/api-handler';

export default mongoMiddleware(async (req, res, connection, models) => {
    const { method } = req;
    
    return new Promise(resolve => {
        apiHandler(res, method, {
            GET: async (response) => {
                models.MBTIQuestion.find({}, async (error, soal) => {
                if (error) {
                    connection.close();
                    response.status(500).json({ error });
                    resolve();
                } else {
                    function shuffleAndSlice(array, start, end) {
                        let temp = shuffle(array);
                        temp = temp.slice(start, end);
                        return temp;
                    }

                    const tempA = shuffleAndSlice(await models.MBTIQuestion.find({ indicator : "A" }), 0, 11);
                    const tempB = shuffleAndSlice(await models.MBTIQuestion.find({ indicator : "B" }), 0, 11);
                    const tempC = shuffleAndSlice(await models.MBTIQuestion.find({ indicator : "C" }), 0, 11);
                    const tempD = shuffleAndSlice(await models.MBTIQuestion.find({ indicator : "D" }), 0, 11);
                    const tempE = shuffleAndSlice(await models.MBTIQuestion.find({ indicator : "E" }), 0, 11);
                    
                    const soalready = shuffle([...tempA,...tempB,...tempC,...tempD,...tempE]);

                    response.status(200).send(soalready);
                    connection.close();
                    resolve();
                }
                })
            }
        });
    })
})