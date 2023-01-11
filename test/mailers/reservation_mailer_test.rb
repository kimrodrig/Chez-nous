require "test_helper"

class ReservationMailerTest < ActionMailer::TestCase
  test "res_booked" do
    mail = ReservationMailer.res_booked
    assert_equal "Res booked", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
