import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hola Mundo desde DevOps CI/CD!");
});

// Exportar sin iniciar el servidor (para Jest)
export default app;

// Solo activar servidor si NO estamos en test
if (process.env.NODE_ENV !== "test") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
}
