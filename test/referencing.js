const mongoose = require("mongoose");
const { Schema } = mongoose;

// connect to database
mongoose
  .connect("mongodb://localhost:27017/test", { useNewUrlParser: true })
  .then(() => console.log("connected"))
  .catch(console.log);

// create a instance
createElement = async element => {
  try {
    const result = await element.save();
    console.log(result);
  } catch (error) {
    for (let index in error.errors) {
      console.log(error.errors[index].message);
    }
  }
};

// create model post
const PostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }
});
const Post = mongoose.model("Post", PostSchema);

// create a instance of post
const post1 = new Post({
  title: "post 1",
  content: "aaa"
});

// create model comment
const CommentSchema = new Schema({
  postId: {
    type: Schema.Types.ObjectId,
    ref: "Post"
  },
  user: { type: String, required: true },
  comment: { type: String, required: true }
});
const Comment = mongoose.model("Comment", CommentSchema);

// create instances of comment
const comment1 = new Comment({
  postId: post1._id,
  user: "user 1",
  comment: "comment 1"
});
const comment2 = new Comment({
  postId: post1._id,
  user: "user 2",
  comment: "comment 2"
});
const comment3 = new Comment({
  postId: post1._id,
  user: "user 3",
  comment: "comment 3"
});
const comment4 = new Comment({
  postId: post1._id,
  user: "user 4",
  comment: "comment 4"
});

// // create instances
// createElement(post1);
// createElement(comment1);
// createElement(comment2);
// createElement(comment3);
// createElement(comment4);

Comment.find({}, { postId: 1, user: 1, comment: 1, _id: 0 })
  .populate("postId", { title: 1, _id: 0 })
  .then(console.log);
