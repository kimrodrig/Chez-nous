class Api::ReservationsController < ApplicationController

    def index
        render json: Reservation.all
    end

    def show
        render json: find_reservation
    end

    def create
        @reservation = Reservation.create!(reservation_params)
        render json: @reservation, status: :created
    end

    def update
        find_reservation.update(reservation_params)
        ReservationMailer.with(member: find_reservation.member, reservation: find_reservation).res_booked.deliver_later
        render json: find_reservation, status: :ok
    end

    def update_with_member_id
        reservation = Member.find(params[:id]).reservation
        if reservation.nil?
            render json: { message: "no reservations under this number"}, status: :not_found
        else
            render json: reservation.update!(member_id: 0)
        end
    end

    def get_reservation_by_time
        reservation = Reservation.find_by(datetime: params[:datetime])
        render json: reservation, status: :ok
    end

    def destroy
        find_reservation.destroy
    end

    private

    def find_reservation
        Reservation.find(params[:id])
    end

    def reservation_params
        params.require(:reservation).permit(:datetime, :member_id, :party_size, dietary_restrictions: [])
    end
end
