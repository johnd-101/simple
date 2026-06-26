import { Request, Response } from "express";
import prisma from "../prisma";

export const getPeople = async (_: Request, res: Response) => {
  const people = await prisma.person.findMany();
  res.json(people);
};

export const createPerson = async (req: Request, res: Response) => {
  const { name, surname } = req.body;

  const person = await prisma.person.create({
    data: { name, surname },
  });

  res.json(person);
};

export const updatePerson = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { name, surname } = req.body;

  const person = await prisma.person.update({
    where: { id },
    data: { name, surname },
  });

  res.json(person);
};

export const deletePerson = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  await prisma.person.delete({
    where: { id },
  });

  res.json({ message: "Deleted" });
};