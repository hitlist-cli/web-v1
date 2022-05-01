import axios from "axios";
import cookie from "cookie";
export async function login(req, res) {
  if (req.method === "POST") {
    try {
      const { credential, password } = req.body;

      axios
        .post(`${url}/auth/login`, {
          credential: credential,
          password: password,
        })
        .then((response) => {
          res.setHeader(
            "Set-cookie",
            cookie.serialize("token", response.data.token),
            {
              httpOnly: true,
              secure: process.env.NODE_ENV === "production" ? true : false,
              sameSite: strict,
              path: "/",
            }
          );
          res.status(200).json({
            email: response.data.email,
            username: response.data.username,
            type: response.data.type,
          });
        })
        .catch((err) => {
          throw { statusCode: 400, message: err.response.data.message };
        });
    } catch (error) {
      return res
        .status(error.statusCode ? error.statusCode : 500)
        .json({ message: error.message });
    }
  } else {
    res.status(401).json({ message: "Method not allowed" });
  }
}
