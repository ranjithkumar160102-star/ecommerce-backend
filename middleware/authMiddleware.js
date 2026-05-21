const jwt = require("jsonwebtoken");



// Verify Token

const protect = (req, res, next) => {

  let token = req.headers.authorization;



  if (!token) {

    return res.status(401).json({

      message: "No Token Found"

    });

  }



  try {

    token = token.split(" ")[1];



    const decoded = jwt.verify(

      token,

      process.env.JWT_SECRET

    );



    req.user = decoded;



    next();

  }

  catch (error) {

    res.status(401).json({

      message: "Invalid Token"

    });

  }

};



// Role Based Access

const authorizeRoles = (...roles) => {

  return (req, res, next) => {

    if (!roles.includes(req.user.role)) {

      return res.status(403).json({

        message: "Access Denied"

      });

    }



    next();

  };

};



module.exports = {

  protect,

  authorizeRoles

};