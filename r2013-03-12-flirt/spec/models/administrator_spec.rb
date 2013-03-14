# == Schema Information
#
# Table name: administrators
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  role       :string(255)
#  ssn        :string(255)
#  tel        :string(255)
#

require 'spec_helper'

describe Administrator do
  describe '.new' do
    it 'creates an intance of Administrator' do
      administrator = Administrator.new
      expect(administrator).to be_an_instance_of(Administrator)
    end
  end

  describe '#user' do
    it 'has a user' do
      administrator = Administrator.new
      user = User.new
      administrator.user = user
      expect(administrator.user).to be_an_instance_of(User)
    end
  end

  describe '.create' do
    it 'has an id' do
      administrator = Administrator.create(role: 'db')
      expect(administrator.id).to_not be nil
    end

    it 'role fails validation when blank' do
      administrator = Administrator.create
      expect(administrator.id).to be nil
    end
  end

  describe '#metadata' do
    it 'has administrator properties' do
      administrator = Administrator.create(role: 'db', ssn: '111-22-3333', tel: '1-111-222-3333')
      expect(administrator.id).to_not be nil
      expect(administrator.role).to eq 'db'
      expect(administrator.ssn).to eq '111-22-3333'
      expect(administrator.tel).to eq '1-111-222-3333'
    end
  end
end
