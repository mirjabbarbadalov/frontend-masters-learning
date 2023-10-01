import { Router } from "express";

const router = new Router();

/**
 * Product
 */

router.get("/product", (req, res) => {
  res.json({ message: "message" });
});
router.get("/product/:id", () => {});
router.get("/product/:id", () => {});
router.get("/product", () => {});
router.get("/product/:id", () => {});

/**
 *  Update
 */

router.get("/update/:id", () => {});
router.get("/update", () => {});
router.get("/update/:id", () => {});
router.get("/update", () => {});
router.get("/update/:id", () => {});

/**
 * Update Point
 */

router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.get("/updatepoint/:id", () => {});
router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});

export default router;
