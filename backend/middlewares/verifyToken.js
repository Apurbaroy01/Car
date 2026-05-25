const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const token = authHeader.split(" ")[1];
    console.log("Extracted token:", token);

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    next();
}

module.exports = {verifyToken};