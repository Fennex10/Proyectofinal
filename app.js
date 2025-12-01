import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hola Mundo desde DevOps CI/CD!");
});

export default app;

// Solo iniciar servidor si NO estamos en pruebas
if (process.env.NODE_ENV !== "test") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto " + PORT);
  });
}
