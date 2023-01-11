class SubscribeMemberToMailchimpJob < ActiveJob::Base
    queue_as :default
    require "gibbon"

    def perform(member)

        first_name = member.name.split(' ')[0]
        last_name = member.name.split(' ')[1..-1].join(' ')

        gibbon = Gibbon::Request.new(api_key: ENV["MAILCHIMP_API_KEY"])
        gibbon.timeout = 10
        gibbon.lists(ENV["MAILCHIMP_LIST_ID"]).members.create(
            body: {
                email_address: member.email,
                status: "subscribed",
                merge_fields: {
                    FNAME: first_name,
                    LNAME: last_name,
                    PHONE: member.phone
                }
            }
        )
    end
end