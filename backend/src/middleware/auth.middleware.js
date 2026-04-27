import jwt from "jsonwebtoken";
const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if(!token){
            return res.status(401).json({message: "access denied"});
        }
        const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch (error){
        res.status(401).json({message: "invalid token"});
    }
};
export default authMiddleware;