import express, { Express } from "express";
import dotenv from "dotenv";
import sequelize, { testDbConnection } from "./config/db";
import categoryRoutes from "./routes/categoryRoutes";
import productRoutes from "./routes/productRoutes";
import tagRoutes from "./routes/tagRoutes";
import customerRoutes from "./routes/customerRoutes";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Use the category routes
app.use("/categories", categoryRoutes);

app.use("/products", productRoutes)

app.use("/tags", tagRoutes);

app.use("/customers", customerRoutes);

// Error handling middleware



// Test database connection
testDbConnection();

// Sync all defined models to the DB
sequelize.sync().then(() => {
  console.log('Database & tables created!');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});