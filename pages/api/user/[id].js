import mongoMiddleware from '../../../lib/api/mongo-middleware';
import apiHandler from '../../../lib/api/api-handler';

export default mongoMiddleware(async (req, res, connection, models) => {
    const { method } = req;
    const { query: { id }} = req;

    const testname = req.body.testname
    const testresult = req.body.testresult
    const testlink = req.body.testlink

    return new Promise(resolve => {
        apiHandler(res, method, {
            GET: async (response) => {

                // Find user di db
                const checkUser = await models.User.findById(id);

                // Ngecek apakah user udah ada apa belom
                if(checkUser){
                    connection.close();
                    response.status(200).json(checkUser);
                    resolve();
                }else{
                    connection.close();
                    response.status(400).json({auth: false, msg: 'Pengguna belum terdaftar'});
                }
            },
            POST: async (response) => {
                const getUser = await models.User.findById(id);

                // Ngecek apakah user udah ada apa belom
                if(getUser){
                    models.User.updateOne(
                        { _id: id }, 
                        { $push: { testHistory: {testname, testresult, testlink} } },
                        (err, data) => {
                            if(err){
                                connection.close();
                                response.status(400).json({msg: 'Terjadi kesalahan'})
                            }
                            connection.close();
                            response.status(200).json({msg: 'Data berhasil disimpan'});
                            resolve();
                        }
                    )
                }else{
                    connection.close();
                    response.status(400).json({msg: 'Pengguna belum terdaftar'});
                }
            }
        });
    })
})