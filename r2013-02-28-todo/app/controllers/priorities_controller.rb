class PrioritiesController < ApplicationController
  def index
    @priorities = @auth.priorities
  end
  def up
    priority = Priority.find(params[:id])
    higher = @auth.priorities.where('value > ?', priority.value).order('value ASC').first

    if higher.present?
      temp = priority.value
      priority.value = higher.value
      higher.value = temp
      priority.save
      higher.save
      render :json => [priority, higher]
    else
      render :json => [priority]
    end
  end
  def down
  end
  def create
    priority = Priority.create(params[:priority])
    @auth.priorities << priority
    render :json => [priority]
  end
  def update
    priority = Priority.find(params[:id])
    priority.update_attributes(params[:priority])
    render :json => [priority]
  end
end
