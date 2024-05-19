import express from "expres";

const router = express.Router();

router.post("/send", sendMessage);

export default router 