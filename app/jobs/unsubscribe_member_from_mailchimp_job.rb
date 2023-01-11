class UnsubscribeMemberFromMailchimpJob < ActiveJob::Base

    queue_as :default
    require "gibbon"

    def perform(member)

        gibbon = Gibbon::Request.new(api_key: ENV["MAILCHIMP_API_KEY"])
        gibbon.timeout = 10
        gibbon.lists(ENV["MAILCHIMP_LIST_ID"]).members(member.email).update(
            body: {
                status: "unsubscribed",
            }
        )
    end
end