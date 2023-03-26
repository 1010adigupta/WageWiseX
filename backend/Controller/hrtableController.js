const HRtable   = require('../Model/hrtableModel');

exports.getHRtable = async (req, res) => {
    try {
        const hrtable = await HRtable.find();
        res.status(200).json({
            status: 'success',
            results: hrtable.length,
            data: {
                hrtable
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}


exports.createEntry = async (req, res) => {
    try {
        const newEntry = await HRtable.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                hrtable: newEntry
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
}

exports.getEntry = async (req, res) => {
    try {
        const hrtable = await HRtable.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                hrtable
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}
