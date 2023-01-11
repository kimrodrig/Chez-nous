class ReservationMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.reservation_mailer.res_booked.subject
  #
  def res_booked
    attachments.inline["logo.png"] = File.read("#{Rails.root}/app/assets/images/logo.png")
    @member = params[:member]
    @reservation = params[:reservation]
    @date = @reservation.datetime.strftime("%b %d")
    @time = @reservation.datetime.strftime('%I:%M %p')
    @total_deposit = @reservation.party_size * 25
    @total_payment = @reservation.party_size * 100
    @dietaries = @reservation.dietary_restrictions

    mail( 
      from: 'kim@cheznousnyc.com',
      to: @member.email, 
      subject: "Your chez nous reservation is confirmed."
    )
      # @member = member
      # @reservation = member.reservation
      # @modifyurl = "www.cheznousnyc.com/modifyreservation"
      # mail(to: `#{@member.email}`, subject: 'Your chez nous reservation', )

  end
end
