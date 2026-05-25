const { createRemoteJWKSet, jwtVerify } = require("jose-cjs");


const JWKS = createRemoteJWKSet(
    new URL('http://localhost:3000/api/auth/jwks')
);

const verifyToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const token = authHeader.split(" ")[1];
    console.log("Extractedd token:", token);

    if (!token) {
        return res.status(401).json({ message: "invalid token" });
    }

    try {
        const { payload } = await jwtVerify(token, JWKS)
        req.token = payload;
        next();
        console.log("Token verified successfully:", payload);
    } catch (error) {
        return res.status(401).json({ message: "invalid token" });
    }
}

module.exports = { verifyToken };