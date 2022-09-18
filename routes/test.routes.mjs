import { Router } from "express";

import TestController from "../controllers/test.controller.mjs";

const router = Router();

const testController = new TestController();

router.get("/test", testController.test);

export default router;
