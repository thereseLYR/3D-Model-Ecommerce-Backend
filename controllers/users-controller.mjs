import jsSHA from 'jssha';

const SALT = process.env.SALT_PASSWORD;

const getHashSalted = (input) => {
  // create new SHA object
  const shaObj = new jsSHA('SHA-512', 'TEXT', { encoding: 'UTF8' });
  // create an unhashed cookie string based on user ID and salt
  const unhashedString = `${input}-${SALT}`;

  // generate a hashed cookie string using SHA object
  shaObj.update(unhashedString);

  return shaObj.getHash('HEX');
};

export default function initUsersController(db) {
  const signup = async (req, res) => {
    console.log(req.body);
    const {
      firstName, lastName, password, email, username, address, phone
    } = req.body;

    try {
      const user = await db.User.findOne({
        where: {
          email,
        },
      });
      console.log('user', user);

      if (!user) {
        const hashedPassword = getHashSalted(password);
        console.log('hashed password', hashedPassword);

        const newUser = {
          firstName,
          lastName,
          address,
          phone,
          username,
          email,
          password: hashedPassword,
        };
        console.log(newUser);

        const userNew = await db.User.create(newUser);
        res.status(200).json({email: userNew.email, message: 'user successfully signed up'});
      } else {
        res.status(409).json({
          error: 'The email address is already in use.',
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await db.User.findOne({
        where: {
          email,
        },
      });
      console.log('user found!');
      const hashedPassword = getHashSalted(password);
      if (hashedPassword === user.password) {
        const unhashedCookieString = `${user.id}`;
        const hashedCookieString = getHashSalted(unhashedCookieString);
        res.cookie('loggedInHash', hashedCookieString);

        const loggedInUser = {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          username: user.username,
          address: user.address,
          phone: user.phone,
        };
        res.cookie('user', JSON.stringify(loggedInUser));

        const result = {
          user: loggedInUser,
        };

        res.status(200).json({result: result, message: 'user successfully login'});
      } else {
        res.status(401).json({
          error: 'The login information is incorrect.',
        });
      }
    } catch (err) {
      console.log(`Login error: ${err}`);
    }
  };

  // const logout = async (req, res) => {
  //   try {
  //     res.clearCookie('loggedInHash');
  //     res.clearCookie('user');

  //     res.json({ redirect: '/' });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const verify = async (req, res) => {
    // check if cookies exist
    if (req.cookies.user && req.cookies.loggedInHash) {
      const userCookie = req.cookies.user;
      const loggedInHashCookie = req.cookies.loggedInHash;
      // re-format cookie back to object
      const user = JSON.parse(userCookie);
      // verify if hashed user id is the same as cookie
      const hashedUserId = getHashSalted(user.id);
      // verified
      if (hashedUserId === loggedInHashCookie) {
        res.send(true);
      } else {
        console.log('restricted!');
        res.clearCookie('loggedInHash');
        res.clearCookie('user');
        res.send(false);
      }
    } else {
      console.log('restricted!');
      res.clearCookie('loggedInHash');
      res.clearCookie('user');
      res.send(false);
    }
  };

  return {
    signup,
    login,
    // logout,
    verify,
  };
}
