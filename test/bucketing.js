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
const post2 = new Post({
  title: "post 2",
  content: "bbb"
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
const comment5 = new Comment({
  postId: post2._id,
  user: "user 5",
  comment: "comment 5"
});
const comment6 = new Comment({
  postId: post2._id,
  user: "user 6",
  comment: "comment 6"
});

// // create instances
// createElement(post1);
// createElement(post2);
// createElement(comment1);
// createElement(comment2);
// createElement(comment3);
// createElement(comment4);
// createElement(comment5);
// createElement(comment6);

// query bucketing
Comment.aggregate([
  {
    $bucketAuto: {
      groupBy: "$postId",
      buckets: 2,
      output: {
        count: { $sum: 1 },
        comment: { $push: "$comment" }
      }
    }
  }
])
  .then(console.log)
  .catch(console.log);
