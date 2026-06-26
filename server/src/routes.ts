import { Router } from "express";
import {
  getPeople,
  createPerson,
  updatePerson,
  deletePerson,
} from "./controllers/personController";

const router = Router();

router.get("/people", getPeople);
router.post("/people", createPerson);
router.put("/people/:id", updatePerson);
router.delete("/people/:id", deletePerson);

export default router;