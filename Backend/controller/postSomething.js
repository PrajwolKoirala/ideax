const Post = require('../Model/PostSomething');

const path = require("path"); 

const createPost = async (req, res, next) => {
    try {
        let imageFiles = req.files ? req.files.images || [] : [];
        if (!Array.isArray(imageFiles)) {
            imageFiles = [imageFiles];
        }
  
        const uploadedImagePaths = [];
  
        if (imageFiles.length > 0) {
            // Upload images and populate uploadedImagePaths array
            for (const imageFile of imageFiles) {
                const file_name =
                    Date.now() + "-" + Math.round(Math.random() * 1E9) + path.extname(imageFile.name);
  
                await new Promise((resolve, reject) => {
                    imageFile.mv(
                        path.join(__dirname, "../", "uploads/", file_name),
                        (err) => {
                            if (err) {
                                console.error(err);
                                reject(err);
                            } else {
                                uploadedImagePaths.push(file_name);
                                resolve();
                            }
                        }
                    );
                });
            }
        }
  
        console.log("Uploaded Image Paths:", uploadedImagePaths);
  
        const productData = {
            ...req.body,
            images: uploadedImagePaths, // Store the image paths in the database
            created_by: req.user.id,
        };
  
        console.log("Product Data Before Creation:", productData);
  
        // Create the product in the database
        const product = await Post.create(productData);
  
        console.log("Product Created:", product);
  
        res.send({ product });
  
    } catch (err) {
        console.error("Error:", err);
        next(err);
    }
  };
  const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('created_by'); // Populate the created_by field
        res.json({ success: true, data: posts });
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

const createReview = async (req, res, next) => {
    try {
      const productId = req.params.id;
      const { rating, comment } = req.body;
      const user = req.user.name; // Assuming the user object contains a 'name' property
  
      const updatedProduct = await Post.findByIdAndUpdate(productId, {
        $push: { reviews: { user, rating, comment } }
      }, { new: true });
  
      if (!updatedProduct) {
        return res.status(404).send({ msg: "Product not found" });
      }
  
      res.send({ product: updatedProduct });
    } catch (err) {
      next(err);
    }
  };
  const getSinglePosts = async (req, res, next) => {
    try {
      let product = await Post.findById(req.params.id);
      if (product) {
        res.send({ product });
      } else {
        res.status(404).send("Resource not found");
      }
    } catch (error) {
      // Handle errors here
      console.error(error);
      res.status(500).send("An error occurred");
    }
  };


module.exports = {
    createPost,
    getPosts,
    createReview,
    getSinglePosts
}
