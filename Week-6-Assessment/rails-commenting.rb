# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) A controller class for our blog post model that inherits from the main application controller
class BlogPostsController < ApplicationController
  def index
    # ---2) Creating an instance variable that contains all the entries in the database
    @posts = BlogPost.all
  end

  def show
    # ---3) Creating an instance variable that holds one entry from the database, based on an id
    @post = BlogPost.find(params[:id])
  end

  # ---4) A method that will display a form for the user to create a new blog post
  def new
    @post = Post.new
  end

  def create
    # ---5) Creating a instance variable that will create a new blog post based on the params stated in the params method
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6) A method that will display a form for the user to edit an existing item in the db
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) Updating an existing item in the db and calling the blog_post_params method to ensure only particular columns are accessed by the user
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) If the post does not delete properly, reroute the user to the show page
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) A helper method that protects everything below this line from being called outside this class
  private
  def blog_post_params
    # ---10) Only allows creation/updates to the blog_post table and the title and content columns
    params.require(:blog_post).permit(:title, :content)
  end

end
