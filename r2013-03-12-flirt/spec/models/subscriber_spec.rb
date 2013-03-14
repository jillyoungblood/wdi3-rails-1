# == Schema Information
#
# Table name: subscribers
#
#  id          :integer          not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  tagline     :string(255)
#  bio         :string(255)
#  preferences :string(255)
#  bodytype    :string(255)
#  location    :string(255)
#  status      :string(255)
#  ethnicity   :string(255)
#  gender      :string(255)
#  age         :integer
#  occupation  :string(255)
#  interests   :string(255)
#  political   :string(255)
#  religious   :string(255)
#  education   :string(255)
#  income      :decimal(, )
#

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
      subscriber = Subscriber.create(tagline: 'hey', bio: 'my bio', gender: 'female', age: 18)
      expect(subscriber.id).to_not be nil
    end

    it 'fails validation if tagline, bio or gender are not present or age < 18 years old' do
      subscriber = Subscriber.create
      expect(subscriber.id).to be nil
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
