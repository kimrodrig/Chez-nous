class Member < ApplicationRecord
    has_one :reservation
    validates_presence_of :name, :email, :phone
    validates_length_of :phone, is: 10,  message: "Number must be 10 digit long"

    after_create :subscribe_member_to_mailchimp
    before_destroy :unsubscribe_member_from_mailchimp

    private

    def subscribe_member_to_mailchimp
        SubscribeMemberToMailchimpJob.perform_later(self)
    end

    def unsubscribe_member_from_mailchimp
        UnsubscribeMemberFromMailchimpJob.perform_now(self)
    end

end
