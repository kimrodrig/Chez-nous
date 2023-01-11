class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :datetime, :member_id, :member, :party_size

  belongs_to :member, serializer: MemberWithReservationSerializer 
end
