class MemberSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone, :reservation

  has_one :reservation, serializer: BookedReservationSerializer
end
