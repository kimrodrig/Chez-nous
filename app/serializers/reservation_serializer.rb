class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :datetime, :member_id, :member

  belongs_to :member, serializer: MemberWithReservationSerializer 
end
