// backend/middleware/roleMiddleware.js
module.exports = (requiredRole) => {
    return (req, res, next) => {
        if (!req.user || req.user.role !== requiredRole) {
            return res.status(403).json({ message: "Forbidden: Insufficient role permissions" });
        }
        next();
    };
};
