const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const Project = require('../model/project.model');

const storage = multer.diskStorage({
  destination: '../images',
  filename: function (req, file, cb) {
    cb(null, 'IMG-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 },
}).single('myfile');

router.route('/').get((req, res) => {
  Project.find()
    .then((projects) => {
      res.json(projects);
    })
    .catch((err) => {
      status(400).json('error ' + err);
    });
});

router.route('/add').post((req, res) => {
  upload(req, res, () => {
    const title = req.body.title;
    const url = req.body.url;
    const description = req.body.description;
    const screenshot = req.body.screenshot;
    console.log(req.body.screenshot);
    console.log(req);
    const newProject = new Project({
      title,
      url,
      description,
      screenshot,
    });

    newProject
      .save()
      .then(res.json('Project added!'))
      .catch((err) => {
        status(400).json('error ' + err);
      });
  });
});

router.route('/:id').get((req, res) => {
  Project.findById(req.params.id)
    .then((project) => res.json(project))
    .catch((err) => res.status(400).json('error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Project.findById(req.params.id)
    .then((project) => {
      project.title = req.body.title;
      project.url = req.body.url;
      project.description = req.body.description;
      project.screenshot = req.body.screenshot;

      project
        .save()
        .then(() => res.json('Project updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('error ' + err));
});

router.route('/:id').delete((req, res) => {
  Project.findByIdAndDelete(req.params.id)
    .then(() => res.json('Project deleted.'))
    .catch((err) => res.status(400).json('error ' + err));
});

module.exports = router;
