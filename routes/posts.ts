const router = express.Router();

const post_controller = require("../controllers/postController");

// GET request to retrieve all posts
router.get("/posts", post_controller.post_get_list);

// POST request to create post
router.post("/posts/create", post_controller.post_create);

// GET request to retrieve singular post
router.get("/posts/:id", post_controller.post_get);

// DELETE request to delete post
router.delete("/posts/:id", post_controller.post_delete);

// POST request to update post
router.post("/posts/:id/update", post_controller.post_update);