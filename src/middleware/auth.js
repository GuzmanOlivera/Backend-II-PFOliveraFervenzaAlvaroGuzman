import jwt from "jsonwebtoken";

const extractUserFromToken = (req, res, next) => {
    const token = req.cookies.coderCookieToken;

    if (token) {
        try {
            const decoded = jwt.verify(token, "extremelydifficulttorevealsecret");
            res.locals.username = decoded.username;
            res.locals.email = decoded.email;
            res.locals.role = decoded.role;
        } catch (error) {
            console.error("Error al decodificar el token:", error);
        }
    }

    next();
};

export function onlyAdmin(req, res, next) {
    if (req.user && req.user.role === "admin") {
        next();
    } else {
        res.status(403).render("onlyAdmin", {
            layout: false,
            message: "Acceso, denegado. Esta área es solo para administradores."
        });
        // res.status(403).send("Acceso, denegado. Esta área es solo para administradores");
    }
}

export function onlyUser(req, res, next) {
    if (req.user && req.user.role === "user") {
        next();
    } else {
        res.status(403).send("Acceso denegado. Esta área es solo para usuarios");
    }
}

export default extractUserFromToken;
