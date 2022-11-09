var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//CONECTING DB// APP CONFI
mongoose.connect('mongodb+srv://Khoa21donga:Khoa21dongaKhoa21dongaKhoa21donga@cluster0.o9ivn6p.mongodb.net/test2?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false 
});

let Custommer3Schema = mongoose.Schema({
  EnableFCM: {
    type: String,
  },
  Avatar: {
    type: String,
  },
  Banner: {
    type: String,
  },
  IsGetNotification: {
    type: String,
  },
  IsVerified: {
    type: String,
  },
  IsGetOpen: {
    type: String,
  }
});
let Custommer3 = mongoose.model('Custommer3', Custommer3Schema);


/* GET home page. */
router.get('/', function (req, res, next) {
  Custommer3.find({}, (Error, data) => {
    res.render('index', { Custommer3s: data });
  });
});

router.get('/form-add', function (req, res, next) {
  res.render('form-add', {});
});

router.post('/add', function (req, res, next) {
  Custommer3.create(req.body);
  res.redirect('/');
});

router.get('/form-update/:id', function (req, res, next) {
  Custommer3.findById(req.params.id, (Error, data) => {
    res.render('form-update', { Custommer3s: data });
  });
});

router.post('/update', function (req, res, next) {
  Custommer3.findByIdAndUpdate(req.body.id, req.body, (Error, data) => {
    res.redirect('/');
  });
})

router.get('/form-delete/:id', function (req, res, next) {
  Custommer3.findByIdAndDelete(req.params.id, (Error, data) => {
    res.redirect('/');
  });
});

module.exports = router;