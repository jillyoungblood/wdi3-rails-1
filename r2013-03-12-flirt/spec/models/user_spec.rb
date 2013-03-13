require 'spec_helper'

describe User do
  describe '.new' do
    it 'creates an intance of User' do
      user = User.new
      expect(user).to be_an_instance_of(User)
    end
    it 'has username, email, password and password_confirmation' do
      user = User.new(username: 'bob', email: 'bob@gmail.com', password: 'a', password_confirmation: 'a')
      expect(user.username).to eq 'bob'
      expect(user.email).to eq 'bob@gmail.com'
      expect(user.password).to eq 'a'
      expect(user.password_confirmation).to eq 'a'
    end
  end

  describe '.create' do
    it 'has an id' do
      user = User.create(username: 'bob', email: 'bob@gmail.com', password: 'a', password_confirmation: 'a')
      expect(user.id).to_not be nil
    end
  end
end
