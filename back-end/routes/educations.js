const router = require('express').Router();
const Education = require('../model/education.model');

router.route('/').get((req, res) => {
  Education.find()
    .then((educations) => {
      res.json(educations);
    })
    .catch((err) => {
      res.status(400).json('error: ' + err);
    });
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const from = req.body.from;
  const to = req.body.to;
  const description = req.body.description;
  const school = req.body.school;

  const newEducation = new Education({
    title,
    from,
    to,
    description,
    school,
  });

  newEducation
    .save()
    .then(() => {
      res.json('education added');
    })
    .catch((err) => res.status(400).json('error: ' + err));
});

router.route('/:id').get((req, res) => {
  Education.findById(req.params.id)
    .then((education) => res.json(education))
    .catch((err) => res.status(400).json('error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Education.findById(req.params.id)
    .then((education) => {
      education.title = req.body.title;
      education.from = req.body.from;
      education.to = req.body.to;
      education.description = req.body.description;
      education.school = req.body.school;

      education
        .save()
        .then(() => res.json('education updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('error ' + err));
});

router.route('/:id').delete((req, res) => {
  Education.findByIdAndDelete(req.params.id)
    .then(() => res.json('Education deleted.'))
    .catch((err) => res.status(400).json('error ' + err));
});

module.exports = router;
