const router = require('express').Router();
let Experience = require('../model/experience.model');

router.route('/').get((req, res) => {
  Experience.find()
    .then((experiences) => {
      res.json(experiences);
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
  const company = req.body.company;

  const newExperience = new Experience({
    title,
    from,
    to,
    description,
    company,
  });

  newExperience
    .save()
    .then(() => {
      res.json('experience added');
    })
    .catch((err) => res.status(400).json('error: ' + err));
});

router.route('/:id').get((req, res) => {
  Experience.findById(req.params.id)
    .then((experience) => res.json(experience))
    .catch((err) => res.status(400).json('error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Experience.findById(req.params.id)
    .then((experience) => {
      experience.title = req.body.title;
      experience.from = req.body.from;
      experience.to = req.body.to;
      experience.description = req.body.description;
      experience.company = req.body.company;
      experience
        .save()
        .then(() => res.json('Experience updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('error ' + err));
});

router.route('/:id').delete((req, res) => {
  Experience.findByIdAndDelete(req.params.id)
    .then(() => res.json('Experience deleted.'))
    .catch((err) => res.status(400).json('error ' + err));
});

module.exports = router;
