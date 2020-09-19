const Validator = () => {
  const queryValidator = (req, fields) => {
    var errors = [];
    console.log(fields);
    fields.forEach((element) => {
      console.log("element", element);
      console.log(req.query[element.id]);
      if (!req.query[element.id]) {
        errors.push(element.id);
      }
    });
    console.log(errors);
    return errors;
  };

  return { queryValidator };
};

//req.query[element.id]

module.exports = Validator;
