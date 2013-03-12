require 'spec_helper'

describe 'Subscribers' do
  describe 'GET /' do
    it 'displays register link' do
      visit root_path
      page.should have_link('Register')
    end
  end

  describe 'GET /subscribers/new' do
    it 'displays the create subscriber and cancel buttons', :js => true do
      visit root_path
      click_link('Register')
      page.should have_button('Cancel')
      page.should have_button('Create Subscriber')
    end
  end
end
