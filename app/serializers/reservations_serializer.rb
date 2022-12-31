class ReservationsSerializer < ActiveModel::Serializer
  attributes :id, :datetime, :member_id

  belongs_to :member
end
