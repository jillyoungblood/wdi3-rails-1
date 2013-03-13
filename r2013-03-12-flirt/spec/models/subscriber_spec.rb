require 'spec_helper'

describe Subscriber do
  describe '.new' do
    it 'creates an intance of Subscriber' do
      subscriber = Subscriber.new
      expect(subscriber).to be_an_instance_of(Subscriber)
    end
  end

  describe '#user' do
    it 'has a user' do
      subscriber = Subscriber.new
      user = User.new
      subscriber.user = user
      expect(subscriber.user).to be_an_instance_of(User)
    end
  end

  describe '.create' do
    it 'has an id' do
      subscriber = Subscriber.create
      expect(subscriber.id).to_not be nil
    end
  end

  describe '#metadata' do
    it 'has subscriber properties' do
      subscriber = Subscriber.create(tagline: 'hey', bio: 'my bio', preferences: 'a, b, c', bodytype: 'd', location: 'ny', status: 'single', ethnicity: 'human', gender: 'female', age: 29, occupation: 'rails dev', interests: 'a, b, c', political: 'independent', religious: 'i <3 God', education: 'GA', income: 1_000_000)
      expect(subscriber.tagline).to eq 'hey'
      expect(subscriber.bio).to eq 'my bio'
      expect(subscriber.preferences).to eq 'a, b, c'
      expect(subscriber.bodytype).to eq 'd'
      expect(subscriber.location).to eq 'ny'
      expect(subscriber.status).to eq 'single'
      expect(subscriber.ethnicity).to eq 'human'
      expect(subscriber.gender).to eq 'female'
      expect(subscriber.age).to eq 29
      expect(subscriber.occupation).to eq 'rails dev'
      expect(subscriber.interests).to eq 'a, b, c'
      expect(subscriber.political).to eq 'independent'
      expect(subscriber.religious).to eq 'i <3 God'
      expect(subscriber.education).to eq 'GA'
      expect(subscriber.income).to eq 1_000_000
    end
  end
end
