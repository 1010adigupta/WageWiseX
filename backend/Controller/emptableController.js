const EMPtable = require('../Model/emptableModel');

exports.getEMPtable = async (req, res) => {

    try {
        const emptable = await EMPtable.find();
        res.status(200).json({
            status: 'success',
            results: emptable.length,
            data: {
                emptable
            }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}

exports.getEntry = async (req, res) => {
    try {
        const emptable = await EMPtable.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                emptable
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}
