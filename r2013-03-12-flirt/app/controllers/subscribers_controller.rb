class SubscribersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    user = User.create(params[:user])
    subscriber = Subscriber.create
    subscriber.user = user
  end
end
