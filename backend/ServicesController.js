const ServicesModel = require('./ServicesModel');


module.exports.getService = async (req, res) => {
    const myService = await ServicesModel.find();
    res.send(myService)

}

module.exports.saveServices = async (req, res) => {
    const {title} = req.body;
    ServicesModel.create({title})
    .then((data) => {console.log('service added')
    res.send(data)
    })
}

module.exports.deleteService = async (req, res) => {
    const { _id } = req.body;
    ServicesModel.findByIdAndDelete(_id)
    .then(() => res.send('Deleted a service'))
}

module.exports.editService = async (req, res) => {
    const { _id, title } = req.body;
    ServicesModel.findByIdAndUpdate(_id, { title })
    .then(() => res.send('Edited service'))
}
