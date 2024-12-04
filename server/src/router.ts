import express from "express";
import actions from "../public/actions.json";
import citations from "../public/citations.json";

const router = express.Router();

router.get("/api/actions", function(req, res) {
	return res.json(actions);
});

router.get("/api/citations", function(req, res) {
	return res.json(citations);
});

export default router;
