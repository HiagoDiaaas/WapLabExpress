"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const router = express_1.default.Router();
const rootDir = path_1.default.join(__dirname, '..', '..');
router.get('/', (req, res) => {
    res.sendFile(path_1.default.join(rootDir, 'views', 'products.html'));
});
router.post('/', (req, res) => {
    const productname = req.body.productname;
    res.send(`Product ${productname} received`);
});
exports.default = router;
//# sourceMappingURL=products.js.map