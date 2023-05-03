const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function getAllWills(req, res) {
  const wills = await prisma.will.findMany({
    where: {
      isPrivate: false,
    },
  });
  res.send(wills);
}

async function getWill(req, res) {
  const myWill = await prisma.will.findUnique({
    where: {
      email: req.params.email.slice(6),
    },
  });

  res.send(myWill);
}

async function createWill(req, res) {
  const duplicate = await prisma.will.findUnique({
    where: {
      email: req.body.email,
    },
  });

  if (duplicate !== null) {
    return;
  }

  const newWill = await prisma.will.create({
    data: req.body,
  });
  res.send(newWill);
}

async function updateWill(req, res) {
  const will = await prisma.will.update({
    where: { email: req.body.email },
    data: {
      title: req.body.title,
      subtitle: req.body.subtitle,
      author: req.body.author,
      isPrivate: req.body.isPrivate,
      content: req.body.content,
    },
  });
  res.send(will);
}

module.exports = { getAllWills, getWill, createWill, updateWill };
