# Preview all emails at http://localhost:3000/rails/mailers/reservation_mailer
class ReservationMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/reservation_mailer/res_booked
  def res_booked
    ReservationMailer.with(member: Member.first, reservation: Reservation.first).res_booked
  end

end
