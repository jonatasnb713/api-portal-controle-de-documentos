const express = require("express");
const multer = require("multer");

// @pending criar Models.
// const { Clients } = require("./models");
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


// const logado = true;
// function interceptadorGenerico(req, res, next) {
//   console.log("Passou por aqui antes da resposta");
//   if (logado === true) {
//     next();
//   } else {
//     res.status(401).json({ response: "You shall not pass!" });
//   }
// }

// app.get("/alunos", interceptadorGenerico, async (req, res) => {
//   try {
//     const alunos = await Aluno.findAll();
//     res.json(alunos);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json(err);
//   }
// });

// app.get("/alunos/:id", async (req, res) => {
//   const { id } = req.params;

//   try {
//     const aluno = await Aluno.findOne({
//       where: { id },
//     });
//     res.json(aluno);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json(err);
//   }
// });

// app.post("/alunos", upload.single("avatar"), async (req, res) => {
//   console.log(`avatar`, req.file);

//   try {
//     const newAluno = await Aluno.create({
//       name: req.body.name,
//       email: req.body.email,
//     });
//     res.json(newAluno);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json(err);
//   }
// });

// app.put("/alunos/:id", async (req, res) => {
//   const { id } = req.params;

//   try {
//     const updatedAluno = await Aluno.update(
//       {
//         name: req.body.name,
//         email: req.body.email,
//       },
//       {
//         where: { id },
//       }
//     );
//     res.json(updatedAluno);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json(err);
//   }
// });

// app.delete("/alunos/:id", async (req, res) => {
//   const { id } = req.params;

//   try {
//     const deletedAluno = await Aluno.destroy({
//       where: { id },
//     });
//     res.json(deletedAluno);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json(err);
//   }
// });

app.listen(port, function () {
  console.log(`Server running at http://localhost:${port}/`);
});
