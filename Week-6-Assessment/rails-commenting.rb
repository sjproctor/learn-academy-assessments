# ASSESSMENT 6: Rails Commenting Challenge
# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# app/controller/blog_posts_controller.rb

# 1) A controller class for our blog post model
class BlogPostsController < ApplicationController
  def index
    # 2) creating an instance variable that contains all the entries in the database
    @posts = BlogPost.all
  end

  def show
    # 3) creating an instance variable that holds one entry from the database, based on an id
    @post = BlogPost.find(params[:id])
  end

  # 4) a method that will display a form for the user to create a new blog post
  def new
  end

  def create
    # 5) creating a instance variable that will create a new blog post based on the params stated in the params method
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to @post
    else
      render action: :new
    end
  end

  def delete
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 6) if the blog post is deleted show the post that was just removed
      redirect_to blog_post_path(@post)
    end
  end

  # 7) prevents methods below this line from being called outside this class
  private
  def blog_post_params
    # 8) defines the attributes that can be given to the new blog_post entry on the form
    params.require(:blog_post).permit(:title, :content)
  end

end


# app/models/blog_post.rb

# 9) the model class of BlogPost created by the generate model/resourse command
class BlogPost < ApplicationRecord
  # 10) the class BlogPost is the parent class of the model class Comment
  has_many :comments
end
