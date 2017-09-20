class Api::UsersController < ApplicationController
  def new
  end

  def show
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      redirect_to links_url
    else
      flash[:errors] = ["user create error"]
      render :new
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
