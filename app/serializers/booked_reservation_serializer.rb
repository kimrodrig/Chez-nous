class BookedReservationSerializer < ActiveModel::Serializer
    attributes :id, :datetime, :party_size
end
