const Documents = require('../models/document');
const DocumentCtrl = {};
var User = require('../models/user');

DocumentCtrl.getDocument = async (req, res) => {
  const documents = await Documents.find()
  User.populate(documents, { path: "autor" }, function (err, documents) {
    res.status(200).send(documents);
  });
}

DocumentCtrl.createDocument = async (req, res) => {
  const document = new Documents(req.body);
  if(!req.body.des_actual) return res.status(401).send("Descripcion actual es Necesaria")
    await document.save();
    res.json({
      'documento': document
    })

}

DocumentCtrl.getDocumentbyId = async (req, res) => {
  const document = await Documents.findById(req.params.id)
  // const document = await Documents.findById(req.params.id)
  res.json(document);
}

DocumentCtrl.updateDocument = async (req, res) => {
  const { id } = req.params;
  const document = {
    // des_actual: req.body.des_actual,
    // des_futura: req.body.des_futura,
    estado: req.body.estado,
    // fecha_ingreso: req.body.fecha_ingreso,
  };
  await Documents.findByIdAndUpdate(id, { $set: document }, { new: true });
  res.json({
    status: 'documento actualizado'
  });
}

module.exports = DocumentCtrl;