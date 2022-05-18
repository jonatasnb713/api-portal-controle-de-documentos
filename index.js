const express = require("express");
const multer = require("multer");



// @pending criar Models.
const { Clients } = require("./models");
// const { Documents } = require("./models");
// const { Users } = require("./models");


// Função para criar os arquivos com timestamp
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const app = express();
const port = 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(__dirname + "/uploads"));

// request, response
app.get("/", (req, res) => {
  res.json({ ok: true });
});


const logado = true;
function interceptadorGenerico(req, res, next) {
  console.log("Passou por aqui antes da resposta");
  if (logado === true) {
    next();
  } else {
    res.status(401).json({ response: "You shall not pass!" });
  }
}

app.get("/clients", interceptadorGenerico, async (req, res) => {
  try {
    const clients = await Clients.findAll();
    res.json(clients);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

app.get("/clients/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const client = await Clients.findOne({
      where: { id },
    });
    res.json(client);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

app.post("/clients", upload.single("avatar"), async (req, res) => {
  console.log(`avatar`, req.file);

  try {
    const newClient = await Clients.create({
      name: req.body.name,
      email: req.body.email,
    });
    res.json(newClient);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

app.put("/clients/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const updatedClient = await Clients.update(
      {
        name: req.body.name,
        email: req.body.email,
      },
      {
        where: { id },
      }
    );
    res.json(updatedClient);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

app.delete("/clients/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedClient = await Clients.destroy({
      where: { id },
    });
    res.json(deletedClient);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

app.listen(port, function () {
  console.log(`Server running at http://localhost:${port}/`);
});