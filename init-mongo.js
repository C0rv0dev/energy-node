db.createUser(
    {
        user: process.env.DB_USER || "root",
        pwd: process.env.DB_PASSWORD || "root",
        roles: [
            {
                role: "readWrite",
                db: process.env.DB_NAME || "test"
            }
        ]
    }
);
db.createCollection("users");
