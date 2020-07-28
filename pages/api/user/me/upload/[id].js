import mongoMiddleware from '../../../../../lib/api/mongo-middleware';
import apiHandler from '../../../../../lib/api/api-handler';

export default mongoMiddleware(async (req, res, connection, models) => {
    const { method } = req;
    const { query: { id }} = req;

    const user_photo = req.body.user_photo;
    
    return new Promise(resolve => {
        apiHandler(res, method, {
            POST: async (response) => {
                await models.User.findOneAndUpdate({ _id: id}, {
                    $set: {
                        user_photo: user_photo
                    }
                }, { new: true, upsert: true },
                (err, data) => {
                    if(err){
                        connection.close();
                        response.status(400).json({msg: 'Ada kesalahan'});
                    }
                    connection.close();
                    response.status(200).json('Data berhasil dimasukkan!');
                    resolve();
                })
            }
        });
    })
})